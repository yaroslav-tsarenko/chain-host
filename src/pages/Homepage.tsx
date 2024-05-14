import { FunctionComponent } from "react";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import GroupComponent2 from "../components/GroupComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import JoinContainer from "../components/JoinContainer";
import FrameComponent from "../components/FrameComponent";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  return (
    <div className={styles.homepage}>
      <FrameComponent6 />
      <FrameComponent5 />
      <GroupComponent2 />
      <FrameComponent3 />
      <FrameComponent2 />
      <section className={styles.miningContentParent}>
        <div className={styles.miningContent}>
          <div className={styles.miningContentChild} />
          <h1 className={styles.unveilingTheWorld}>
            Unveiling the World of Crypto Mining
          </h1>
          <div className={styles.cryptocurrencyMiningIsContainer}>
            <p className={styles.cryptocurrencyMiningIs}>
              Cryptocurrency mining is the heartbeat of blockchain networks, and
              at ChainHost, we're passionate about providing the tools and
              knowledge needed to navigate this exciting terrain. Whether you're
              a seasoned miner or just starting, our platform simplifies the
              complexities of crypto mining. We offer you the power to join in
              securing blockchain transactions and the opportunity to earn
              crypto rewards. Our mission is to demystify the world of mining,
              making it accessible, efficient, and profitable for all. Dive into
              the world of crypto mining with ChainHost, and unlock the
              potential of the digital gold rush.
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.cryptocurrencyMiningIs1}>
              Cryptocurrency mining is the heartbeat of blockchain networks, and
              at ChainHost, we're passionate about providing the tools and
              knowledge needed to navigate this exciting terrain. Whether you're
              a seasoned miner or just starting, our platform simplifies the
              complexities of crypto mining. We offer you the power to join in
              securing blockchain transactions and the opportunity to earn
              crypto rewards. Our mission is to demystify the world of mining,
              making it accessible, efficient, and profitable for all. Dive into
              the world of crypto mining with ChainHost, and unlock the
              potential of the digital gold rush.
            </p>
          </div>
        </div>
        <img
          className={styles.separatorIcon}
          loading="lazy"
          alt=""
          src="/rectangle-2-1@2x.png"
        />
      </section>
      <JoinContainer />
      <FrameComponent />
    </div>
  );
};

export default Homepage;
