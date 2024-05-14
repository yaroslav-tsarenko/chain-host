import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent31.module.css";

export type FrameComponent31Type = {
  rectangle55?: string;
  title?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propTop?: CSSProperties["top"];
};

const FrameComponent31: FunctionComponent<FrameComponent31Type> = ({
  rectangle55,
  title,
  propLeft,
  propTop,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className={styles.rectangleParent} style={frameDiv2Style}>
      <img
        className={styles.componentChild}
        loading="lazy"
        alt=""
        src={rectangle55}
      />
      <div className={styles.frameParent}>
        <div className={styles.titleParent}>
          <div className={styles.title}>Karlos Smithe</div>
          <h3 className={styles.title1}>{title}</h3>
        </div>
        <div className={styles.title2}>Read More</div>
      </div>
    </div>
  );
};

export default FrameComponent31;
