import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent26.module.css";

export type FrameComponent26Type = {
  serverConfiguration?: string;
  cPUCores18GBRAM200GBSSDS?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth1?: CSSProperties["width"];
};

const FrameComponent26: FunctionComponent<FrameComponent26Type> = ({
  serverConfiguration,
  cPUCores18GBRAM200GBSSDS,
  propWidth,
  propDisplay,
  propMinWidth,
  propWidth1,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const serverConfigurationStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const cPUCores18Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameWrapper} style={frameDiv1Style}>
        <div className={styles.frameGroup}>
          <div className={styles.serverConfigurationWrapper}>
            <div
              className={styles.serverConfiguration}
              style={serverConfigurationStyle}
            >
              {serverConfiguration}
            </div>
          </div>
          <div className={styles.cpuCores18} style={cPUCores18Style}>
            {cPUCores18GBRAM200GBSSDS}
          </div>
        </div>
      </div>
      <img className={styles.frameChild} alt="" src="/vector-19-1.svg" />
    </div>
  );
};

export default FrameComponent26;
