import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./GroupComponent3.module.css";

const GroupComponent3: FunctionComponent = () => {
  return (
    <section className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameParent}>
        <div className={styles.ourProductsParent}>
          <div className={styles.ourProducts}>Our Products</div>
          <div className={styles.ourComprehensiveServicesWrapper}>
            <h1 className={styles.ourComprehensiveServices}>
              Our Comprehensive Services
            </h1>
          </div>
        </div>
        <div className={styles.instanceParent}>
          <div className={styles.rectangleGroup}>
            <img
              className={styles.instanceChild}
              loading="lazy"
              alt=""
              src="/rectangle-11@2x.png"
            />
            <div className={styles.frameGroup}>
              <div className={styles.bitvaultForgeParent}>
                <div className={styles.bitvaultForge}>BitVault Forge</div>
                <div className={styles.sha256AlgorithmMining}>
                  SHA-256 Algorithm Mining Server110 TH/s | 3450 W | 31.5 W/TH
                </div>
              </div>
              <Button
                className={styles.frameItem}
                disableElevation={true}
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#0e0e0e",
                  fontSize: "16",
                  borderColor: "#0e0e0e",
                  borderRadius: "100px",
                  "&:hover": { borderColor: "#0e0e0e" },
                  width: 188,
                  height: 40,
                }}
              >
                Add to Cart
              </Button>
            </div>
          </div>
          <div className={styles.rectangleContainer}>
            <img
              className={styles.instanceItem}
              alt=""
              src="/rectangle-11-1@2x.png"
            />
            <div className={styles.frameContainer}>
              <div className={styles.bitvaultForgeGroup}>
                <div className={styles.bitvaultForge1}>BitVault Forge</div>
                <div className={styles.sha256AlgorithmMining1}>
                  SHA-256 Algorithm Mining Server110 TH/s | 3450 W | 31.5 W/TH
                </div>
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
                  width: 188,
                  height: 40,
                }}
              >
                Add to Cart
              </Button>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <img
              className={styles.instanceInner}
              alt=""
              src="/rectangle-11-2@2x.png"
            />
            <div className={styles.frameParent1}>
              <div className={styles.bitvaultForgeContainer}>
                <div className={styles.bitvaultForge2}>BitVault Forge</div>
                <div className={styles.sha256AlgorithmMining2}>
                  SHA-256 Algorithm Mining Server110 TH/s | 3450 W | 31.5 W/TH
                </div>
              </div>
              <Button
                className={styles.frameButton}
                disableElevation={true}
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#0e0e0e",
                  fontSize: "16",
                  borderColor: "#0e0e0e",
                  borderRadius: "100px",
                  "&:hover": { borderColor: "#0e0e0e" },
                  width: 188,
                  height: 40,
                }}
              >
                Add to Cart
              </Button>
            </div>
          </div>
          <div className={styles.rectangleParent1}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle-11@2x.png"
            />
            <div className={styles.frameParent2}>
              <div className={styles.bitvaultForgeParent1}>
                <div className={styles.bitvaultForge3}>BitVault Forge</div>
                <div className={styles.sha256AlgorithmMining3}>
                  SHA-256 Algorithm Mining Server110 TH/s | 3450 W | 31.5 W/TH
                </div>
              </div>
              <Button
                className={styles.frameChild1}
                disableElevation={true}
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#0e0e0e",
                  fontSize: "16",
                  borderColor: "#0e0e0e",
                  borderRadius: "100px",
                  "&:hover": { borderColor: "#0e0e0e" },
                  width: 188,
                  height: 40,
                }}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupComponent3;
