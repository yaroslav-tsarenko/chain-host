import { FunctionComponent } from "react";
import FrameComponent8 from "./FrameComponent8";
import FrameComponent7 from "./FrameComponent7";
import styles from "./FrameComponent6.module.css";

const FrameComponent6: FunctionComponent = () => {
  return (
    <section className={styles.homepageInner}>
      <div className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/rectangle-1@2x.png"
        />
        <FrameComponent8 />
        <FrameComponent7 />
      </div>
    </section>
  );
};

export default FrameComponent6;
