import { FunctionComponent } from "react";
import styles from "./FrameComponent12.module.css";

const FrameComponent12: FunctionComponent = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.empoweringTheWorldThroughIParent}>
          <h1 className={styles.empoweringTheWorld}>
            “Empowering the world through innovation, one block at a time.”
          </h1>
          <div className={styles.asTheFounder}>
            As the founder of ChainHost, I embarked on this journey with a
            vision to make crypto mining accessible and sustainable. Our
            dedication to user empowerment and environmentally responsible
            practices is at the core of our identity. Join us on this exciting
            journey and experience the future of cryptocurrency mining.
          </div>
        </div>
        <div className={styles.emilyClarkParent}>
          <div className={styles.emilyClark}>Emily Clark</div>
          <div className={styles.founder}>Founder</div>
        </div>
      </div>
      <img className={styles.frameItem} alt="" src="/rectangle-2-11@2x.png" />
    </section>
  );
};

export default FrameComponent12;
