import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent8.module.css";

const FrameComponent8: FunctionComponent = () => {
  return (
    <header className={styles.frameParent}>
      <div className={styles.chainhostWrapper}>
        <h3 className={styles.chainhost}>ChainHost</h3>
      </div>
      <nav className={styles.menuWrapper}>
        <nav className={styles.menu}>
          <div className={styles.shopServices}>Shop Services</div>
          <div className={styles.buyCredits}>Buy Credits</div>
          <div className={styles.readBlogs}>Read blogs</div>
          <div className={styles.contact}>Contact</div>
        </nav>
      </nav>
      <Button
        className={styles.componentChild}
        disableElevation={true}
        variant="outlined"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "20",
          borderColor: "#fff",
          borderRadius: "100px",
          "&:hover": { borderColor: "#fff" },
          width: 195,
          height: 40,
        }}
      >
        View Cart
      </Button>
    </header>
  );
};

export default FrameComponent8;
