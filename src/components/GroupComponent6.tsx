import { FunctionComponent } from "react";
import FrameComponent21 from "./FrameComponent21";
import styles from "./GroupComponent6.module.css";

const GroupComponent6: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.rectangleWrapper}>
        <div className={styles.frameChild} />
      </div>
      <FrameComponent21 />
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.exploreCryptoHostingServersParent}>
              <h1 className={styles.exploreCryptoHosting}>
                Explore crypto hosting servers
              </h1>
              <div className={styles.ourHostingSolutions}>
                Our hosting solutions provide secure and efficient
                infrastructure, ensuring your mining rigs perform at their best.
                With cutting-edge technology, reliable uptime, and a commitment
                to sustainability, we empower miners to thrive in the
                ever-evolving world of digital assets.
              </div>
            </div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.frameItem} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent6;
