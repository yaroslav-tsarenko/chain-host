import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent24.module.css";

export type FrameComponent24Type = {
  rectangle4?: string;
  robustServerInfrastructur?: string;
  ourCryptoHostingServiceIs?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
};

const FrameComponent24: FunctionComponent<FrameComponent24Type> = ({
  rectangle4,
  robustServerInfrastructur,
  ourCryptoHostingServiceIs,
  propHeight,
  propWidth,
}) => {
  const rectangleIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.rectangleWrapper}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src={rectangle4}
          style={rectangleIconStyle}
        />
      </div>
      <div className={styles.robustServerInfrastructureParent}>
        <h3 className={styles.robustServerInfrastructure}>
          {robustServerInfrastructur}
        </h3>
        <div className={styles.ourCryptoHosting}>
          {ourCryptoHostingServiceIs}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent24;
