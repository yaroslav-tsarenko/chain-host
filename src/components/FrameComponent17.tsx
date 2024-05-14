import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent17.module.css";

const FrameComponent17: FunctionComponent = () => {
  return (
    <section className={styles.productListingInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frequentlyAskedQuestionsWrapper}>
            <h1 className={styles.frequentlyAskedQuestions}>
              Frequently Asked Questions
            </h1>
          </div>
          <Button
            className={styles.frameChild}
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
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.whatIsCryptocurrencyParent}>
                <div className={styles.whatIsCryptocurrency}>
                  What is cryptocurrency?
                </div>
                <div className={styles.vectorWrapper}>
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt=""
                    src="/vector-17.svg"
                  />
                </div>
              </div>
              <div className={styles.cryptocurrencyIsA}>
                Cryptocurrency is a digital or virtual form of currency that
                uses cryptography for security. It operates on a decentralized
                ledger called blockchain, enabling secure, transparent, and
                peer-to-peer transactions.
              </div>
            </div>
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/vector-10-1.svg"
            />
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.frameParent3}>
              <div className={styles.howDoIBuyCryptocurrenciesWrapper}>
                <div className={styles.howDoI}>
                  {" "}
                  How do I buy cryptocurrencies?
                </div>
              </div>
              <div className={styles.vectorContainer}>
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-17.svg"
                />
              </div>
            </div>
            <img
              className={styles.frameChild1}
              loading="lazy"
              alt=""
              src="/vector-10-1.svg"
            />
          </div>
          <div className={styles.frameParent4}>
            <div className={styles.frameParent5}>
              <div className={styles.howDoISecureMyCryptoAsseWrapper}>
                <div className={styles.howDoI1}>
                  How do I secure my crypto assets?
                </div>
              </div>
              <div className={styles.vectorFrame}>
                <img
                  className={styles.frameChild2}
                  loading="lazy"
                  alt=""
                  src="/vector-17.svg"
                />
              </div>
            </div>
            <img
              className={styles.frameChild3}
              loading="lazy"
              alt=""
              src="/vector-10-1.svg"
            />
          </div>
          <div className={styles.frameParent6}>
            <div className={styles.whatIsCryptoStakingWrapper}>
              <div className={styles.whatIsCrypto}>
                {" "}
                What is crypto staking?
              </div>
            </div>
            <div className={styles.vectorWrapper1}>
              <img
                className={styles.frameChild4}
                loading="lazy"
                alt=""
                src="/vector-17.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent17;
