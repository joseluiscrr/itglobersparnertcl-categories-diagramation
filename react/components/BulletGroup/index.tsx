// * Componente principal BulletGroup

import React, { PropsWithChildren } from "react";                             // * (Dependencia ~ PropsWithChildren) Crea componentes reutilizables que permite que los componentes se construyan juntos
import { useListContext, ListContextProvider } from "vtex.list-context";      // * (Dependencia) Crea listas de imágenes de productos que se pueden agregar, reordenar o eliminar mediante Site Editor
import { useCssHandles } from "vtex.css-handles";                             // * (Dependencia) Generador de clases de vtex
import { useDevice } from "vtex.device-detector";                             // * (Dependencia) Sirve para averiguar el tamaño de la ventana gráfica del dispositivo actual      
import { getBulletsAsTSXList } from "./modules/bulletsAsList";                // * (Componente) Contiene lista de bullets con imagenes y nombres
import { BulletsSchema } from "./BulletTypes";                                // * (Estructura ~ TypeScript) Type e Interface
import styles from "./styles.css";

export interface BulletGroupProps {
  bullets: BulletsSchema
};

/**
 * Este componente sirve para un contexto de la información que me pasen, en este caso; imágenes, nombre y url
 * @param bullets array de objetos
 * @param children
 * @returns contexto de las propiedades pasadas, en mobile y desktop se pinta de forma diferente
 */

/** */
const BulletGroup = ({ bullets, children }: PropsWithChildren<BulletGroupProps>) => {
  const { isMobile } = useDevice();                                                       // * Detecta si es mobile o no
  const { list } = useListContext() || [];                                                // * Crea una lista para almacenar los datos de la lista, así como filtros, paginación, estado de clasificación y devoluciones de llamada para actualizarlos
  const bulletsGroup = getBulletsAsTSXList(bullets);
  const newListContextValue = list.concat(bulletsGroup);

  const CSS_HANDLES = ["bullet__container"];                                              // Lista de clases css
  const handles = useCssHandles(CSS_HANDLES);                                             // Generador de clase css vtex

  return (
    <div className={`${styles.bullet__group}`}>
      <h1 className={`${styles["bullet__group--title"]}`}>Bullet Group</h1>
      <ListContextProvider list={newListContextValue}>
        {
          isMobile ?
            <div className={handles.bullet__container}>
              {bulletsGroup}
            </div> :
            children
        }
      </ListContextProvider>
    </div>
  );
};

export default BulletGroup;
