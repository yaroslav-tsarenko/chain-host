import { FunctionComponent } from "react";
import SustainabilityDescription from "./SustainabilityDescription";
import GroupComponent1 from "./GroupComponent1";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  return (
    <section className={styles.sustainabilityIconParent}>
      <img
        className={styles.sustainabilityIcon}
        loading="lazy"
        alt=""
        src="/rectangle-2@2x.png"
      />
      <div className={styles.sustainabilityContent}>
        <SustainabilityDescription />
        <GroupComponent1 />
      </div>
    </section>
  );
};

export default FrameComponent3;
