import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  productIcons?: string;
  bitVaultForge?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  productIcons,
  bitVaultForge,
}) => {
  return (
    <div className={styles.productIconsParent}>
      <img
        className={styles.productIcons}
        loading="lazy"
        alt=""
        src={productIcons}
      />
      <div className={styles.productDetails}>
        <div className={styles.productName}>
          <div className={styles.bitvaultForge}>{bitVaultForge}</div>
          <div className={styles.sha256AlgorithmMining}>
            SHA-256 Algorithm Mining Server110 TH/s | 3450 W | 31.5 W/TH
          </div>
        </div>
        <Button
          className={styles.productDetailsChild}
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
  );
};

export default FrameComponent4;
