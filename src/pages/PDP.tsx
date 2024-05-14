import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import FrameComponent28 from "../components/FrameComponent28";
import FrameComponent27 from "../components/FrameComponent27";
import FrameComponent25 from "../components/FrameComponent25";
import FrameComponent24 from "../components/FrameComponent24";
import FrameComponent23 from "../components/FrameComponent23";
import FrameComponent22 from "../components/FrameComponent22";
import styles from "./PDP.module.css";

const PDP: FunctionComponent = () => {
  return (
    <div className={styles.pdp}>
      <FrameComponent28 />
      <FrameComponent27 />
      <FrameComponent25 />
      <section className={styles.pdpInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <FrameComponent24
                rectangle4="/rectangle-4@2x.png"
                robustServerInfrastructur="Robust Server Infrastructure"
                ourCryptoHostingServiceIs=" Our crypto hosting service is powered by a robust and state-of-the-art server infrastructure. We offer high-performance servers that are finely tuned for crypto mining, ensuring you get the maximum hashing power for your operations."
              />
              <FrameComponent24
                rectangle4="/rectangle-4@2x.png"
                robustServerInfrastructur="Reliable 24/7 Support"
                ourCryptoHostingServiceIs=" We understand that crypto mining operates around the clock. That's why our dedicated support team is available 24/7 to assist you with any issues or questions you may have. We're here to ensure your mining operations run smoothly at all times."
                propHeight="36px"
                propWidth="36px"
              />
            </div>
          </div>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/rectangle-142@2x.png"
          />
        </div>
      </section>
      <section className={styles.pdpChild}>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <FrameComponent24
                rectangle4="/rectangle-4-2@2x.png"
                robustServerInfrastructur="Advanced Security Measures"
                ourCryptoHostingServiceIs="Security is our top priority. We've implemented advanced security protocols and encryption to safeguard your investments and digital assets. With us, you can mine with confidence, knowing your assets are protected against threats."
                propHeight="46px"
                propWidth="46px"
              />
              <FrameComponent24
                rectangle4="/rectangle-4-2@2x.png"
                robustServerInfrastructur="Global Reach"
                ourCryptoHostingServiceIs="Our crypto hosting services provide you with access to mining resources and opportunities on a global scale. Whether you're looking to tap into international markets or diversify your mining operations, we offer the connectivity and flexibility you need. Explore the world of crypto with us today."
                propHeight="46px"
                propWidth="46px"
              />
            </div>
          </div>
          <img
            className={styles.frameItem}
            alt=""
            src="/rectangle-14-1@2x.png"
          />
        </div>
      </section>
      <section className={styles.frameSection}>
        <div className={styles.frameParent2}>
          <div className={styles.frameParent3}>
            <div className={styles.frequentlyAskedQuestionsWrapper}>
              <h1 className={styles.frequentlyAskedQuestions}>
                Frequently Asked Questions
              </h1>
            </div>
            <Button
              className={styles.frameInner}
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
          <div className={styles.frameParent4}>
            <div className={styles.frameParent5}>
              <div className={styles.frameParent6}>
                <div className={styles.whatIsCryptocurrencyParent}>
                  <div className={styles.whatIsCryptocurrency}>
                    What is cryptocurrency?
                  </div>
                  <div className={styles.vectorWrapper}>
                    <img
                      className={styles.vectorIcon}
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
                className={styles.frameChild1}
                loading="lazy"
                alt=""
                src="/vector-10-1.svg"
              />
            </div>
            <div className={styles.frameParent7}>
              <div className={styles.frameParent8}>
                <div className={styles.howDoIBuyCryptocurrenciesWrapper}>
                  <div className={styles.howDoI}>
                    {" "}
                    How do I buy cryptocurrencies?
                  </div>
                </div>
                <div className={styles.vectorContainer}>
                  <img
                    className={styles.frameChild2}
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
            <div className={styles.frameParent9}>
              <div className={styles.frameParent10}>
                <div className={styles.howDoISecureMyCryptoAsseWrapper}>
                  <div className={styles.howDoI1}>
                    How do I secure my crypto assets?
                  </div>
                </div>
                <div className={styles.vectorFrame}>
                  <img
                    className={styles.frameChild4}
                    alt=""
                    src="/vector-17.svg"
                  />
                </div>
              </div>
              <img
                className={styles.frameChild5}
                alt=""
                src="/vector-10-1.svg"
              />
            </div>
            <div className={styles.frameParent11}>
              <div className={styles.whatIsCryptoStakingWrapper}>
                <div className={styles.whatIsCrypto}>
                  {" "}
                  What is crypto staking?
                </div>
              </div>
              <div className={styles.vectorWrapper1}>
                <img
                  className={styles.frameChild6}
                  alt=""
                  src="/vector-17.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent23 />
      <FrameComponent22 />
    </div>
  );
};

export default PDP;
