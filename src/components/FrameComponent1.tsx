import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import FAQExampleRow from "./FAQExampleRow";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <div className={styles.fAQParent}>
      <div className={styles.fAQ}>
        <div className={styles.fAQTitle}>
          <div className={styles.frequentlyAskedQuestions}>
            Frequently Asked Questions
          </div>
        </div>
        <Button
          className={styles.fAQChild}
          disableElevation={true}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#0e0e0e",
            fontSize: "16",
            borderColor: "#0e0e0e",
            borderRadius: "100px",
            "&:hover": { borderColor: "#0e0e0e" },
            width: 178,
            height: 40,
          }}
        >
          Go to FAQ
        </Button>
      </div>
      <div className={styles.fAQExamples}>
        <div className={styles.cryptoDescription}>
          <div className={styles.cryptoContent}>
            <div className={styles.cryptoTitle}>
              <div className={styles.whatIsCryptocurrency}>
                What is cryptocurrency?
              </div>
              <div className={styles.cryptoIcon}>
                <img
                  className={styles.cryptoIconImage}
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
            className={styles.cryptoDescriptionIcon}
            loading="lazy"
            alt=""
            src="/vector-10-1.svg"
          />
        </div>
        <FAQExampleRow howDoIBuyCryptocurrencies=" How do I buy cryptocurrencies?" />
        <FAQExampleRow howDoIBuyCryptocurrencies="How do I secure my crypto assets?" />
        <div className={styles.stakingDescription}>
          <div className={styles.stakingContent}>
            <div className={styles.whatIsCrypto}> What is crypto staking?</div>
          </div>
          <div className={styles.stakingIcon}>
            <img
              className={styles.stakingIconImage}
              loading="lazy"
              alt=""
              src="/vector-17.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
