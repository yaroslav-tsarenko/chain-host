import { FunctionComponent } from "react";
import FrameComponent11 from "./FrameComponent11";
import JoinContent from "./JoinContent";
import styles from "./FrameComponent10.module.css";

const FrameComponent10: FunctionComponent = () => {
  return (
    <section className={styles.aboutUsInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.ourCommitmentToExcellenceParent}>
            <h1 className={styles.ourCommitmentTo}>
              Our Commitment to Excellence
            </h1>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <FrameComponent11
                  innovationAsOurCompass="Innovation as Our Compass"
                  atChainHostWeBelieveThatI="At ChainHost, we believe that innovation is the key to staying ahead in the dynamic world of cryptocurrency mining. "
                />
                <FrameComponent11
                  innovationAsOurCompass="Environmental Responsibility"
                  atChainHostWeBelieveThatI="Sustainability is a core value. We've optimized our data centers for energy efficiency, reducing our carbon footprint."
                  propHeight="unset"
                  propDisplay="unset"
                />
                <FrameComponent11
                  innovationAsOurCompass="Diverse Cryptocurrency Support"
                  atChainHostWeBelieveThatI="We offer support for a wide range of cryptocurrencies, allowing you to diversify your mining portfolio."
                  propHeight="56px"
                  propDisplay="inline-block"
                />
              </div>
              <div className={styles.frameDiv}>
                <FrameComponent11
                  innovationAsOurCompass="24/7 Expert Support:"
                  atChainHostWeBelieveThatI="We prioritize your success and peace of mind. Our dedicated support team is available around the clock, ready to assist whether you're a seasoned miner or just starting your crypto journey."
                  propHeight="unset"
                  propDisplay="unset"
                />
                <FrameComponent11
                  innovationAsOurCompass="User-Centric Approach:"
                  atChainHostWeBelieveThatI="We put our users first. Our services are designed to meet the diverse needs of miners, from beginners to professionals."
                  propHeight="unset"
                  propDisplay="unset"
                />
                <FrameComponent11
                  innovationAsOurCompass="Profit Maximization"
                  atChainHostWeBelieveThatI="ur competitive pricing, low fees, and efficient mining processes ensure that our users consistently report higher profitability"
                  propHeight="unset"
                  propDisplay="unset"
                />
              </div>
            </div>
          </div>
        </div>
        <JoinContent />
      </div>
    </section>
  );
};

export default FrameComponent10;
