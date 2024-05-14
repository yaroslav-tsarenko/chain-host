import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent4.module.css";

export type GroupComponent4Type = {
  rectangle16?: string;
  pioneeringInnovation?: string;
  chainHostIsAtTheForefront?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
};

const GroupComponent4: FunctionComponent<GroupComponent4Type> = ({
  rectangle16,
  pioneeringInnovation,
  chainHostIsAtTheForefront,
  propWidth,
  propBackgroundColor,
  propColor,
  propColor1,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const pioneeringInnovationStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const chainHostIsAtStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className={styles.frameWrapper} style={groupDivStyle}>
      <div className={styles.rectangleParent} style={frameDivStyle}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src={rectangle16}
        />
        <div className={styles.frameParent}>
          <div className={styles.pioneeringInnovationWrapper}>
            <h3
              className={styles.pioneeringInnovation}
              style={pioneeringInnovationStyle}
            >
              {pioneeringInnovation}
            </h3>
          </div>
          <div className={styles.chainhostIsAt} style={chainHostIsAtStyle}>
            {chainHostIsAtTheForefront}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent4;
