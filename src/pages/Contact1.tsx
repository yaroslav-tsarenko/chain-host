import { FunctionComponent } from "react";
import GroupComponent4 from "../components/GroupComponent4";
import FrameComponent9 from "../components/FrameComponent9";
import GroupComponent3 from "../components/GroupComponent3";
import FrameComponent7 from "../components/FrameComponent7";
import styles from "./Contact1.module.css";

const Contact1: FunctionComponent = () => {
  return (
    <div className={styles.contact}>
      <GroupComponent4 />
      <FrameComponent9 />
      <section className={styles.frameParent}>
        <GroupComponent3 />
        <FrameComponent7 />
      </section>
    </div>
  );
};

export default Contact1;
