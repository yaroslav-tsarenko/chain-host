import { FunctionComponent } from "react";
import FrameComponent15 from "./FrameComponent15";
import styles from "./GroupComponent5.module.css";

const GroupComponent5: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <img className={styles.frameChild} alt="" src="/rectangle-1@2x.png" />
      <FrameComponent15 />
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.theChainhostJourneyWrapper}>
            <h1 className={styles.theChainhostJourney}>
              The ChainHost Journey
            </h1>
          </div>
          <div className={styles.ourStoryAt}>
            Our story at ChainHost is one of dedication, innovation, and
            unwavering commitment. From our humble beginnings to becoming a
            trusted name in crypto mining, every chapter has been marked by the
            trust and support of our users. We started this journey with a
            vision to redefine crypto mining and provide accessible,
            sustainable, and profitable solutions. As we continue to write our
            story, we're excited to have you as a part of it, and we look
            forward to the chapters yet to come.
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent5;
