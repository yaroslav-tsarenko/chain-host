import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <section className={styles.featuresContentWrapper}>
      <div className={styles.featuresContent}>
        <div className={styles.keyFeaturesOfChainhostWrapper}>
          <h1 className={styles.keyFeaturesOf}>Key Features of ChainHost</h1>
        </div>
        <div className={styles.featureCardsParent}>
          <div className={styles.featureCards}>
            <div className={styles.featureDetails}>
              <h3 className={styles.userFriendlyDashboard}>
                User-Friendly Dashboard
              </h3>
              <div className={styles.ourIntuitiveDashboard}>
                Our intuitive dashboard provides you with real-time data and
                insights, making it easy for miners of all levels to monitor
                their operations and earnings with precision.
              </div>
            </div>
            <div className={styles.featureDetails1}>
              <h3 className={styles.secureWalletIntegration}>
                Secure Wallet Integration
              </h3>
              <div className={styles.seamlesslyIntegrateYour}>
                Seamlessly integrate your mining earnings with secure wallets,
                ensuring the safety and accessibility of your cryptocurrency
                assets.
              </div>
            </div>
          </div>
          <div className={styles.poolsContentParent}>
            <div className={styles.poolsContent}>
              <h3 className={styles.highPerformanceMiningPools}>
                High-Performance Mining Pools
              </h3>
              <div className={styles.joinOurHighPerformance}>
                Join our high-performance mining pools that increase your
                chances of earning rewards while contributing to the security
                and efficiency of various blockchain networks.
              </div>
            </div>
            <div className={styles.multipleCryptocurrencySupporParent}>
              <h3 className={styles.multipleCryptocurrencySuppor}>
                Multiple Cryptocurrency Support
              </h3>
              <div className={styles.chainhostOffersSupport}>
                ChainHost offers support for a wide range of cryptocurrencies,
                allowing you to diversify your mining portfolio and choose the
                coins that align with your investment goals.
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <img
              className={styles.footerChild}
              alt=""
              src="/rectangle-6@2x.png"
            />
            <img className={styles.footerItem} alt="" src="/group-135.svg" />
            <img
              className={styles.footerInner}
              loading="lazy"
              alt=""
              src="/group-137@2x.png"
            />
            <img className={styles.groupIcon} alt="" src="/group-136.svg" />
            <img
              className={styles.footerChild1}
              loading="lazy"
              alt=""
              src="/group-138@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
