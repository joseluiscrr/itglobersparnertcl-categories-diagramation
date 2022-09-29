import React from "react";
import { useCssHandles } from "vtex.css-handles";         // * (Dependencia) Generador de clase css vtex
import { Link } from "vtex.render-runtime";               // * (Dependencia) Responsable de manejar la ejecución en tiempo de ejecución de las aplicaciones React en la plataforma VTEX IO
import { LinkProps } from "./BulletTypes";                // * (Estructura ~ TypeScript) Type e Interface
import "./styles.css";

type Props = {
  src: string
  titleBullet: string
  link: LinkProps
};

/**
 * Este componente sirve para entregar un elemento, un bullet en este caso
 * @param src imagen 
 * @param titleBullet imagen
 * @param link redirección
 * @returns elemento con cada una de sus propiedades
 */

/** */
const Bullet = ({ src, titleBullet, link }: Props) => {
  const CSS_HANDLES = ["bullet__item", "bullet__item--title", "bullet__item--image", "bullet__item--link"];   // Lista de clases css
  const handles = useCssHandles(CSS_HANDLES);                                                                 // Generados de clases css vtex

  return (
    <div className={handles.bullet__item}>
      <Link to={link.url} className={handles["bullet__item--link"]}>
        <img className={handles["bullet__item--image"]} src={src} alt={titleBullet} />
        <p className={handles["bullet__item--title"]}>{titleBullet}</p>
      </Link>
    </div>
  );
};

/**
 * Este schema sirve para que el componente pueda ser manejado del lado del admin en VTEX
 */

Bullet.schema = {
  title: "Bullet",
  type: "object",
  properties: {
    src: "Imagen de Bullet",
    type: "string",
    widget: {
      "ui:widget": "image-uploader"
    }
  }
};

export default Bullet;
