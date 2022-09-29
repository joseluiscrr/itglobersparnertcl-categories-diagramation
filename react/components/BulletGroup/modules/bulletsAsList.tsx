import React from "react";
import Bullet from "../Bullet";                                                 // * (Componente) Contiene un Bullet
import { BulletsSchema } from "../BulletTypes";                                 // * (Estructura ~ TypeScript) Type e Interface

/**
 * Este componente sirve para crear una lista de bullets
 * @param bullets propiedades a ser utilizadas en el componente de Bullet
 * @returns lista de bullets
 */

export const getBulletsAsTSXList = (bullets: BulletsSchema) => {
  return bullets.map((bullet: any, index) => {
    return (
      <Bullet key={index} src={bullet.image} titleBullet={bullet.titleBullet}
        link={
          bullet.link ?
          bullet.link :
          {
            url: "",
            attributeNoFollow: false,
            attributeTitle: "",
            openNewTab: false,
            newTab: false
          }
        }
      />
    );
  });
};
