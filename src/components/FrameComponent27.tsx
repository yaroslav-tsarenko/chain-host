import { FunctionComponent } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import styles from "./FrameComponent27.module.css";

const FrameComponent27: FunctionComponent = () => {
  return (
    <section className={styles.pdpInner}>
      <div className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/rectangle-23@2x.png"
        />
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.sha256AlgorithmMiningServeParent}>
              <div className={styles.sha256AlgorithmMining}>
                SHA-256 Algorithm Mining Server95 TH/s | 3250 W | 34.2 J/TH
              </div>
              <h1 className={styles.hostingPackageFor}>
                Hosting Package for 101W-105W Servers
              </h1>
            </div>
            <div className={styles.thePinnacleOf}>
              The pinnacle of crypto hosting solutions designed to cater to the
              needs of serious investors, traders, and blockchain enthusiasts.
              With Dedicated Hosting, you're in complete control of your crypto
              environment. Enjoy exclusive access to powerful hardware, ensuring
              lightning-fast speeds and optimal performance for your digital
              assets.
            </div>
            <div className={styles.frameItem} />
            <div className={styles.chooseOptionsBelow}>
              Choose Options Below:
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.monthlyParent}>
                    <div className={styles.monthly}>Monthly</div>
                    <div className={styles.hourly}>Hourly</div>
                  </div>
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.rectangleWrapper}>
                    <div className={styles.frameInner} />
                  </div>
                  <img
                    className={styles.vectorIcon}
                    loading="lazy"
                    alt=""
                    src="/vector-25.svg"
                  />
                </div>
              </div>
              <div className={styles.rectangleDiv} />
              <div className={styles.frameWrapper1}>
                <div className={styles.frameParent2}>
                  <div className={styles.durationWrapper}>
                    <div className={styles.duration}>Duration:</div>
                  </div>
                  <FormControl
                    className={styles.parent}
                    variant="standard"
                    sx={{
                      borderColor: "#fff",
                      borderStyle: "SOLID",
                      borderTopWidth: "1px",
                      borderRightWidth: "1px",
                      borderBottomWidth: "1px",
                      borderLeftWidth: "1px",
                      borderRadius: "0px 0px 0px 0px",
                      width: "66.88963210702342%",
                      height: "41px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "41px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "41px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "41px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "41px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: "Regular",
                        fontFamily: "Montserrat",
                        textAlign: "left",
                        p: "0 !important",
                        marginLeft: "13px",
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
                          width="22px"
                          height="11px"
                          src="/frame-198.png"
                          style={{ marginRight: "8px" }}
                        />
                      )}
                    >
                      <MenuItem>7 Hours</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
              </div>
            </div>
            <div className={styles.quantityParent}>
              <div className={styles.quantity}>Quantity:</div>
              <div className={styles.frameParent3}>
                <div className={styles.wrapper}>
                  <div className={styles.div}>-</div>
                </div>
                <div className={styles.container}>
                  <div className={styles.div1}>1</div>
                </div>
                <div className={styles.frame}>
                  <div className={styles.div2}>+</div>
                </div>
              </div>
            </div>
            <div
              className={styles.noteThePinnacle}
            >{`Note: The pinnacle of crypto hosting solutions designed to cater to the needs of serious investors, traders, and blockchain enthusiasts. With Dedicated Hosting, you're in `}</div>
            <div className={styles.instanceParent}>
              <Button
                className={styles.frameButton}
                disableElevation={true}
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  borderColor: "#fff",
                  borderRadius: "100px",
                  "&:hover": { borderColor: "#fff" },
                  height: 40,
                }}
              >
                USERS
              </Button>
              <div className={styles.showFaqWrapper}>
                <div className={styles.showFaq}>Show FAQ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent27;
