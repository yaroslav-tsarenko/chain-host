import { FunctionComponent } from "react";
import FrameComponent31 from "./FrameComponent31";
import styles from "./FrameComponent30.module.css";

const FrameComponent30: FunctionComponent = () => {
  return (
    <section className={styles.blogLisitngInner}>
      <div className={styles.titleParent}>
        <h1 className={styles.title}>Explore More Articles</h1>
        <FrameComponent31
          rectangle55="/rectangle-55@2x.png"
          title="The Power of DeFi: Decentralized Finance Explained"
        />
        <FrameComponent31
          rectangle55="/rectangle-55-1@2x.png"
          title="Navigating Cryptocurrency Taxes: What You Need to Know"
          propLeft="534.5px"
          propTop="84px"
        />
        <FrameComponent31
          rectangle55="/rectangle-55@2x.png"
          title="The Power of DeFi: Decentralized Finance Explained"
          propLeft="1069px"
          propTop="84px"
        />
        <FrameComponent31
          rectangle55="/rectangle-55-3@2x.png"
          title="Crypto Mining Hardware: Which Rig Is Right for You?"
          propLeft="0px"
          propTop="631px"
        />
        <FrameComponent31
          rectangle55="/rectangle-55-4@2x.png"
          title="Ethereum 2.0: The Future of Smart Contracts"
          propLeft="534.5px"
          propTop="631px"
        />
        <FrameComponent31
          rectangle55="/rectangle-55-3@2x.png"
          title={`The Crypto Bull Market: Strategies for Success"`}
          propLeft="1069px"
          propTop="631px"
        />
      </div>
    </section>
  );
};

export default FrameComponent30;
