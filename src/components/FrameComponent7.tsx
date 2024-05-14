import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent7.module.css";

const FrameComponent7: FunctionComponent = () => {
  return (
    <div className={styles.heroContentWrapper}>
      <div className={styles.heroContent}>
        <h1 className={styles.forgeYourDigitalContainer}>
          <span>{`Forge Your Digital Fortune with ChainHost's `}</span>
          <span className={styles.cryptoMiningSolutions}>
            Crypto Mining Solutions
          </span>
        </h1>
        <div className={styles.heroSubtitle}>
          <div className={styles.heroDescription}>
            <div className={styles.diveIntoThe}>
              Dive into the world of cryptocurrency mining with confidence and
              ambition. ChainHost equips you with the tools, knowledge, and
              resources you need to build your digital fortune. Our
              industry-leading hosting services ensure you're always at the
              forefront of the blockchain revolution. Join us and forge your
              path to prosperity in the cryptoverse.
            </div>
            <div className={styles.heroUserCount}>
              <Button
                className={styles.heroUserCountChild}
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#0e0e0e",
                  fontSize: "16",
                  background: "#0bd752",
                  borderRadius: "100px",
                  "&:hover": { background: "#0bd752" },
                  width: 188,
                  height: 40,
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
