import { FunctionComponent } from "react";
import FrameComponent26 from "./FrameComponent26";
import styles from "./FrameComponent25.module.css";

const FrameComponent25: FunctionComponent = () => {
  return (
    <section className={styles.pdpInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.specificationParent}>
              <h3 className={styles.specification}>Specification</h3>
              <h3 className={styles.enquiries}>Enquiries</h3>
              <h3 className={styles.reviews}>Reviews</h3>
            </div>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/vector-19.svg"
            />
          </div>
        </div>
        <div className={styles.vectorParent}>
          <img
            className={styles.frameItem}
            loading="lazy"
            alt=""
            src="/vector-24.svg"
          />
          <div className={styles.rectangleParent}>
            <div className={styles.frameInner} />
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.serverPurposeParent}>
                  <div className={styles.serverPurpose}>Server purpose</div>
                  <div className={styles.hostingACryptoCurrenyExchaWrapper}>
                    <div className={styles.hostingACrypto}>
                      Hosting a crypto curreny exchange platform
                    </div>
                  </div>
                </div>
              </div>
              <img
                className={styles.vectorIcon}
                alt=""
                src="/vector-19-1.svg"
              />
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper1}>
                <div className={styles.serverTypeParent}>
                  <div className={styles.serverType}>Server Type</div>
                  <div className={styles.virtualPrivateServer}>
                    Virtual Private Server (VPS)
                  </div>
                </div>
              </div>
              <img
                className={styles.frameChild1}
                alt=""
                src="/vector-19-1.svg"
              />
            </div>
            <FrameComponent26
              serverConfiguration="Server Configuration"
              cPUCores18GBRAM200GBSSDS="4 CPU Cores, 18 GB RAM, 200GB SSD Storage | Ubuntu 2004 LTS"
            />
            <FrameComponent26
              serverConfiguration="Security"
              cPUCores18GBRAM200GBSSDS="Configured UFW Firewall | Snort IDS?IPS for intrusion detection | Regular security updates and patches"
              propWidth="1273px"
              propDisplay="inline-block"
              propMinWidth="65px"
              propWidth1="unset"
            />
            <div className={styles.frameParent2}>
              <div className={styles.frameWrapper2}>
                <div className={styles.frameParent3}>
                  <div className={styles.cryptoCurrencySoftwareWrapper}>
                    <div className={styles.cryptoCurrencySoftware}>
                      Crypto Currency Software
                    </div>
                  </div>
                  <div className={styles.bitcoinCoreV0220}>
                    Bitcoin Core v022.0
                  </div>
                </div>
              </div>
              <img
                className={styles.frameChild2}
                alt=""
                src="/vector-19-1.svg"
              />
              <div className={styles.frameWrapper3}>
                <div className={styles.frameParent4}>
                  <div className={styles.backUpsWrapper}>
                    <div className={styles.backUps}>Back Ups</div>
                  </div>
                  <div className={styles.nightlyBackupsWith}>
                    NIghtly Backups with 7 days retention period
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent25;
