import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent20.module.css";

export type FrameComponent20Type = {
  rectangle11?: string;
};

const FrameComponent20: FunctionComponent<FrameComponent20Type> = ({
  rectangle11,
}) => {
  return (
    <div className={styles.rectangleParent}>
      <img
        className={styles.instanceChild}
        loading="lazy"
        alt=""
        src={rectangle11}
      />
      <div className={styles.frameParent}>
        <div className={styles.bitvaultForgeParent}>
          <div className={styles.bitvaultForge}>BitVault Forge</div>
          <div className={styles.sha256AlgorithmMining}>
            SHA-256 Algorithm Mining Server110 TH/s | 3450 W | 31.5 W/TH
          </div>
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

export default FrameComponent20;
