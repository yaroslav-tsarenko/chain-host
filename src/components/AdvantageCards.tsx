import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./AdvantageCards.module.css";

export type AdvantageCardsType = {
  advantageSeparator?: string;
  cuttingEdgeTechnology?: string;
  weStayAheadOfTheCurveByCo?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
};

const AdvantageCards: FunctionComponent<AdvantageCardsType> = ({
  advantageSeparator,
  cuttingEdgeTechnology,
  weStayAheadOfTheCurveByCo,
  propWidth,
  propWidth1,
  propMinWidth,
}) => {
  const advantageDetailsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const advantageSeparatorStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      minWidth: propMinWidth,
    };
  }, [propWidth1, propMinWidth]);

  return (
    <div className={styles.advantageCards}>
      <div className={styles.advantageDetails} style={advantageDetailsStyle}>
        <div
          className={styles.advantageSeparator}
          style={advantageSeparatorStyle}
        >
          {advantageSeparator}
        </div>
        <div className={styles.cuttingEdgeTechnologyParent}>
          <h3 className={styles.cuttingEdgeTechnology}>
            {cuttingEdgeTechnology}
          </h3>
          <div className={styles.weStayAhead}>{weStayAheadOfTheCurveByCo}</div>
        </div>
      </div>
      <img
        className={styles.advantageCardsChild}
        loading="lazy"
        alt=""
        src="/group-66.svg"
      />
    </div>
  );
};

export default AdvantageCards;
