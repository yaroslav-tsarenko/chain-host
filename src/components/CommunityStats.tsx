import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CommunityStats.module.css";

export type CommunityStatsType = {
  uSERS?: string;
  communitySeparator?: string;
  withAStrongAndGrowingComm?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
};

const CommunityStats: FunctionComponent<CommunityStatsType> = ({
  uSERS,
  communitySeparator,
  withAStrongAndGrowingComm,
  propMinWidth,
  propWidth,
}) => {
  const uSERSStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const communitySeparatorStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.communityStats}>
      <img
        className={styles.communityIcons}
        loading="lazy"
        alt=""
        src="/vector-1.svg"
      />
      <div className={styles.communityCirclesParent}>
        <div className={styles.communityCircles}>
          <div className={styles.communityCirclesChild} />
        </div>
        <div className={styles.users} style={uSERSStyle}>
          {uSERS}
        </div>
      </div>
      <div
        className={styles.communitySeparator}
        style={communitySeparatorStyle}
      >
        {communitySeparator}
      </div>
      <div className={styles.withAStrong}>{withAStrongAndGrowingComm}</div>
    </div>
  );
};

export default CommunityStats;
