import { FunctionComponent } from "react";
import GroupComponent1 from "../components/GroupComponent1";
import FrameComponent1 from "../components/FrameComponent1";
import GroupComponent from "../components/GroupComponent";
import FrameComponent from "../components/FrameComponent";
import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy: FunctionComponent = () => {
  return (
    <div className={styles.privacyPolicy}>
      <GroupComponent1 />
      <section className={styles.frameParent}>
        <GroupComponent />
        <FrameComponent />
      </section>
    </div>
  );
};

export default PrivacyPolicy;
