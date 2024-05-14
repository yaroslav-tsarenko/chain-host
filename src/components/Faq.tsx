import { FunctionComponent } from "react";
import FrameComponent2 from "./FrameComponent2";
import styles from "./Faq.module.css";

const Faq: FunctionComponent = () => {
  return (
    <section className={styles.faq}>
      <div className={styles.faqGrid}>
        <div className={styles.cryptoInfo}>
          <div className={styles.whatIsCrypto}>
            <div className={styles.cryptoTitle}>
              <div className={styles.whatIsCryptocurrency}>
                What is cryptocurrency?
              </div>
              <div className={styles.cryptoIcon}>
                <img
                  className={styles.iconWhat}
                  loading="lazy"
                  alt=""
                  src="/vector-17.svg"
                />
              </div>
            </div>
            <div className={styles.cryptocurrencyIsA}>
              Cryptocurrency is a digital or virtual form of currency that uses
              cryptography for security. It operates on a decentralized ledger
              called blockchain, enabling secure, transparent, and peer-to-peer
              transactions.
            </div>
          </div>
          <img
            className={styles.infoIcon}
            loading="lazy"
            alt=""
            src="/vector-10.svg"
          />
        </div>
        <FrameComponent2 howDoIBuyCryptocurrencies=" How do I buy cryptocurrencies?" />
        <FrameComponent2 howDoIBuyCryptocurrencies="How do I secure my crypto assets?" />
        <div className={styles.whatIsStaking}>
          <div className={styles.stakingTitle}>
            <div className={styles.whatIsCrypto1}> What is crypto staking?</div>
          </div>
          <div className={styles.stakingIcon}>
            <img className={styles.iconStaking} alt="" src="/vector-17.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
