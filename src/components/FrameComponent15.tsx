import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent15.module.css";

const FrameComponent15: FunctionComponent = () => {
  return (
    <header className={styles.frameParent}>
      <div className={styles.chainhostWrapper}>
        <h3 className={styles.chainhost}>ChainHost</h3>
      </div>
      <nav className={styles.frameWrapper}>
        <nav className={styles.shopServicesParent}>
          <div className={styles.shopServices}>Shop Services</div>
          <div className={styles.buyCredits}>Buy Credits</div>
          <div className={styles.readBlogs}>Read blogs</div>
          <div className={styles.contact}>Contact</div>
        </nav>
      </nav>
      <Button
        className={styles.instanceChild}
        disableElevation={true}
        variant="outlined"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "20",
          borderColor: "#fff",
          borderRadius: "100px",
          "&:hover": { borderColor: "#fff" },
          width: 194,
          height: 40,
        }}
      >
        View Cart
      </Button>
    </header>
  );
};

export default FrameComponent15;
