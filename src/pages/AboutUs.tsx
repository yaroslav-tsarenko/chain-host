import { FunctionComponent } from "react";
import GroupComponent5 from "../components/GroupComponent5";
import FrameComponent14 from "../components/FrameComponent14";
import FrameComponent13 from "../components/FrameComponent13";
import FrameComponent12 from "../components/FrameComponent12";
import FrameComponent10 from "../components/FrameComponent10";
import GroupComponent3 from "../components/GroupComponent3";
import FrameComponent9 from "../components/FrameComponent9";
import styles from "./AboutUs.module.css";

const AboutUs: FunctionComponent = () => {
  return (
    <div className={styles.aboutUs}>
      <section className={styles.frameParent}>
        <GroupComponent5 />
        <FrameComponent14 />
      </section>
      <section className={styles.aboutUsInner}>
        <div className={styles.frameGroup}>
          <div className={styles.navigatingTheCryptoCosmosWrapper}>
            <h1 className={styles.navigatingTheCrypto}>
              Navigating the Crypto Cosmos: Our Odyssey
            </h1>
          </div>
          <div className={styles.atChainhostOurContainer}>
            <p className={styles.atChainhostOur}>
              At ChainHost, our journey in the world of cryptocurrency began
              with a profound belief in the transformative potential of
              blockchain technology. Founded by a group of passionate
              individuals, our company emerged from a collective vision to make
              crypto mining accessible, efficient, and environmentally
              responsible. Since our inception, we've embraced the ever-evolving
              crypto landscape, adapting and innovating to meet the diverse
              needs of our users.
            </p>
            <p className={styles.ourStoryIs}>
              Our story is one of relentless commitment and tireless innovation.
              From our early days to the present, we've consistently invested in
              cutting-edge mining hardware and software. We've remained
              dedicated to staying ahead of industry trends, offering our users
              the latest advancements and ensuring that they have the tools
              required to thrive in the competitive world of crypto mining.
            </p>
            <p className={styles.butWhatTruly}>
              But what truly sets us apart is our unwavering focus on our users.
              We believe in empowering every miner, from beginners to seasoned
              professionals, and our commitment to their success is embedded in
              our user-centric approach. Our 24/7 expert support team stands as
              a testament to this dedication. We understand that in the
              fast-paced crypto mining world, timely and reliable assistance is
              essential. That's why we're here, ready to assist you, no matter
              the hour, no matter the query.
            </p>
            <p className={styles.asProudMembers}>
              As proud members of the crypto mining community, we recognize the
              importance of environmental responsibility. It's why
              sustainability is a core value at ChainHost. We've optimized our
              data centers for energy efficiency, reducing our carbon footprint
              while maximizing the performance of our mining operations. What's
              more, we source a significant portion of our energy from renewable
              sources, aligning our practices with the principles of
              sustainability.
            </p>
          </div>
        </div>
      </section>
      <FrameComponent13 />
      <FrameComponent12 />
      <FrameComponent10 />
      <GroupComponent3 />
      <FrameComponent9 />
    </div>
  );
};

export default AboutUs;
