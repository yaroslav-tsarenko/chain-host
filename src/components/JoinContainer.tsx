import { FunctionComponent } from "react";
import JoinContent from "./JoinContent";
import FrameComponent1 from "./FrameComponent1";
import styles from "./JoinContainer.module.css";

const JoinContainer: FunctionComponent = () => {
  return (
    <section className={styles.joinContainer}>
      <div className={styles.join}>
        <JoinContent />
        <FrameComponent1 />
      </div>
    </section>
  );
};

export default JoinContainer;
