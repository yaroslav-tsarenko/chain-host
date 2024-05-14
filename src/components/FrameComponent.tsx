import { FunctionComponent } from "react";
import GroupComponent from "./GroupComponent";
import Footer from "./Footer";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.frameParent}>
      <GroupComponent />
      <Footer />
    </section>
  );
};

export default FrameComponent;
