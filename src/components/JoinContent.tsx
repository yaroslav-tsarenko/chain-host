import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./JoinContent.module.css";

const JoinContent: FunctionComponent = () => {
  return (
    <div className={styles.joinContent}>
      <img
        className={styles.joinSeparatorIcon}
        loading="lazy"
        alt=""
        src="/rectangle-14@2x.png"
      />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.joinButton}>
          <h1 className={styles.joinNowContainer}>
            <p className={styles.joinNow}>{`Join Now &`}</p>
            <p className={styles.startSaving}>Start Saving!</p>
          </h1>
          <div className={styles.atChainhostWe}>
            At ChainHost, we believe in rewarding loyalty. Our "Subscribe and
            Save" program is designed with you in mind. By becoming a
            subscriber, you not only secure your place at the forefront of the
            crypto mining world, but you also unlock a treasure trove of
            benefits. These include exclusive discounts, priority customer
            support, and early access to the latest mining innovations.
            Subscribing is your key to a world of savings and an elevated mining
            experience. Don't miss out on the opportunity to maximize your
            crypto mining journey with ChainHost – join our Subscribe and Save
            program today.
          </div>
        </div>
        <Button
          className={styles.frameItem}
          disableElevation={true}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            borderColor: "#fff",
            borderRadius: "100px",
            "&:hover": { borderColor: "#fff" },
            width: 188,
            height: 40,
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default JoinContent;
