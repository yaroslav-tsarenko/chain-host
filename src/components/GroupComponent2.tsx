import { FunctionComponent } from "react";
import FrameComponent4 from "./FrameComponent4";
import styles from "./GroupComponent2.module.css";

const GroupComponent2: FunctionComponent = () => {
  return (
    <section className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.solutionsContent}>
        <div className={styles.discoverAWorldOfCryptoMinParent}>
          <div className={styles.discoverAWorld}>
            Discover a World of Crypto Mining Solutions
          </div>
          <div className={styles.exploreOurProductPortfolioWrapper}>
            <h1 className={styles.exploreOurProduct}>
              Explore Our Product Portfolio
            </h1>
          </div>
        </div>
        <div className={styles.componentParent}>
          <FrameComponent4
            productIcons="/rectangle-11@2x.png"
            bitVaultForge="BitVault Forge"
          />
          <FrameComponent4
            productIcons="/rectangle-11-1@2x.png"
            bitVaultForge="EtherMint Nexus"
          />
          <FrameComponent4
            productIcons="/rectangle-11-2@2x.png"
            bitVaultForge="CryptoPulse Citadel"
          />
          <FrameComponent4
            productIcons="/rectangle-11@2x.png"
            bitVaultForge="BlockHaven Bastion"
          />
        </div>
      </div>
      <div className={styles.solutionsDescriptionWrapper}>
        <h1 className={styles.solutionsDescription}>
          <p className={styles.blankLine}>&nbsp;</p>
        </h1>
      </div>
    </section>
  );
};

export default GroupComponent2;
