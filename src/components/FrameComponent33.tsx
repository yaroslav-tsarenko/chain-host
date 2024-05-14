import { FunctionComponent } from "react";
import styles from "./FrameComponent33.module.css";

export type FrameComponent33Type = {
  rectangle4?: string;
  theRiseOfAltcoinsExplorin?: string;
};

const FrameComponent33: FunctionComponent<FrameComponent33Type> = ({
  rectangle4,
  theRiseOfAltcoinsExplorin,
}) => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src={rectangle4}
        />
        <div className={styles.frameParent}>
          <div className={styles.sarahLawsonParent}>
            <div className={styles.sarahLawson}>Sarah Lawson</div>
            <h3 className={styles.theRiseOf}>{theRiseOfAltcoinsExplorin}</h3>
          </div>
          <div className={styles.readMore}>{`Read More>`}</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent33;
