import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SustainabilityPoints.module.css";

export type SustainabilityPointsType = {
  sustainabilityCircles?: string;
  sustainabilitySeparator?: string;
  energyEfficientOperations?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const SustainabilityPoints: FunctionComponent<SustainabilityPointsType> = ({
  sustainabilityCircles,
  sustainabilitySeparator,
  energyEfficientOperations,
  propWidth,
}) => {
  const sustainabilitySeparatorStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.sustainabilityPoints}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.sustainabilityCirclesIcon}
          loading="lazy"
          alt=""
          src={sustainabilityCircles}
        />
      </div>
      <div className={styles.sustainabilityDetailsWrapper}>
        <div className={styles.sustainabilityDetails}>
          <div
            className={styles.sustainabilitySeparator}
            style={sustainabilitySeparatorStyle}
          >
            {sustainabilitySeparator}
          </div>
          <div className={styles.energyEfficientOperationsR}>
            {energyEfficientOperations}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityPoints;
