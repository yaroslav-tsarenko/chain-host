import { FunctionComponent } from "react";
import GroupComponent4 from "./GroupComponent4";
import styles from "./FrameComponent14.module.css";

const FrameComponent14: FunctionComponent = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.componentParent}>
        <GroupComponent4
          rectangle16="/rectangle-16@2x.png"
          pioneeringInnovation="Pioneering Innovation"
          chainHostIsAtTheForefront="ChainHost is at the forefront of technological advancements in crypto mining. We consistently invest in cutting-edge hardware and software, providing users with state-of-the-art tools to optimize their mining operations."
        />
        <GroupComponent4
          rectangle16="/rectangle-16-1@2x.png"
          pioneeringInnovation="User-Centric Approach"
          chainHostIsAtTheForefront="Our company places users at the heart of everything we do. We offer 24/7 expert support, ensuring that whether you're a seasoned miner or just starting, you have the assistance and resources you need."
          propWidth="490px"
          propBackgroundColor="#0bd752"
          propColor="#0e0e0e"
          propColor1="#0e0e0e"
        />
        <GroupComponent4
          rectangle16="/rectangle-16-2@2x.png"
          pioneeringInnovation="Pioneering Innovation"
          chainHostIsAtTheForefront="Sustainability is a core value at ChainHost. We've optimized our data centers for energy efficiency and use a significant portion of renewable energy sources and contributing to a greener crypto mining ecosystem."
          propWidth="440px"
          propBackgroundColor="#0e0e0e"
          propColor="#fff"
          propColor1="#fff"
        />
      </div>
    </div>
  );
};

export default FrameComponent14;
