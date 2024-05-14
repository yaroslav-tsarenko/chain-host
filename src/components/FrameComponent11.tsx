import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent11.module.css";

export type FrameComponent11Type = {
  innovationAsOurCompass?: string;
  atChainHostWeBelieveThatI?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
};

const FrameComponent11: FunctionComponent<FrameComponent11Type> = ({
  innovationAsOurCompass,
  atChainHostWeBelieveThatI,
  propHeight,
  propDisplay,
}) => {
  const innovationAsOurStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  return (
    <div className={styles.rectangleParent}>
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src="/rectangle-15@2x.png"
      />
      <div className={styles.innovationAsOurCompassParent}>
        <h3 className={styles.innovationAsOur} style={innovationAsOurStyle}>
          {innovationAsOurCompass}
        </h3>
        <div className={styles.atChainhostWe}>{atChainHostWeBelieveThatI}</div>
      </div>
    </div>
  );
};

export default FrameComponent11;
