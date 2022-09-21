import React, { PropsWithChildren } from "react";
import { useListContext, ListContextProvider } from "vtex.list-context";
import { BulletsSchema } from "./BulletTypes";
import { useDevice } from "vtex.device-detector";
import { getBulletsAsTSXList } from "./modules/bulletsAsList";
import { useCssHandles } from "vtex.css-handles";
import styles from "./styles.css";

export interface BulletGroupProps {
  bullets: BulletsSchema
};

const BulletGroup = ({ bullets, children }: PropsWithChildren<BulletGroupProps>) => {
  const { isMobile } = useDevice();
  const { list } = useListContext() || [];
  const bulletsGroup = getBulletsAsTSXList(bullets);
  const newListContextValue = list.concat(bulletsGroup);

  const CSS_HANDLES = ["bullet__container"];
  const handles = useCssHandles(CSS_HANDLES);

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
