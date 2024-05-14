import { FunctionComponent } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import FrameComponent20 from "./FrameComponent20";
import styles from "./FrameComponent19.module.css";

const FrameComponent19: FunctionComponent = () => {
  return (
    <section className={styles.productListingInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.showing9ProductsParent}>
            <div className={styles.showing9Products}>Showing 9 Products</div>
            <FormControl
              className={styles.parent}
              variant="standard"
              sx={{
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                borderRadius: "0px 0px 0px 0px",
                width: "13.802083333333334%",
                height: "24px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "24px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "24px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "24px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "24px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#0e0e0e",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Montserrat",
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select
                color="primary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="9px"
                    height="4px"
                    src="/vector-17.svg"
                    style={{}}
                  />
                )}
              >
                <MenuItem>Show All Categories</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/vector-11.svg"
          />
        </div>
        <div className={styles.instanceParent}>
          <FrameComponent20 rectangle11="/rectangle-11@2x.png" />
          <FrameComponent20 rectangle11="/rectangle-11-1@2x.png" />
          <FrameComponent20 rectangle11="/rectangle-11-2@2x.png" />
          <FrameComponent20 rectangle11="/rectangle-11@2x.png" />
          <FrameComponent20 rectangle11="/rectangle-11@2x.png" />
          <FrameComponent20 rectangle11="/rectangle-11-1@2x.png" />
          <FrameComponent20 rectangle11="/rectangle-11-2@2x.png" />
          <FrameComponent20 rectangle11="/rectangle-11@2x.png" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent19;
