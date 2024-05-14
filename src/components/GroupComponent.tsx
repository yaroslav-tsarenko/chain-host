import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./GroupComponent.module.css";

const GroupComponent: FunctionComponent = () => {
  return (
    <div className={styles.subscriptionSeparatorParent}>
      <div className={styles.subscriptionSeparator} />
      <div className={styles.subscriptionContent}>
        <div className={styles.subscriptionDetails}>
          <div className={styles.subscriptionTitle}>
            <h1 className={styles.subscribeAndSave}>Subscribe and Save 10%</h1>
          </div>
          <div className={styles.atChainhostWe}>
            At ChainHost, we value your commitment to the world of crypto
            mining. That's why we offer a "Subscribe and Save" program that
            empowers you to enjoy consistent savings and benefits as a loyal
            member of our community. By subscribing to our services, you not
            only secure your access to state-of-the-art mining solutions but
            also unlock exclusive discounts, priority support, and early access
            to the latest advancements in the crypto mining industry. Join our
            Subscribe and Save program today to embark on a journey of
            continuous savings and mining excellence.
          </div>
        </div>
        <div className={styles.subscriptionUsers}>
          <Button
            className={styles.subscriptionUsersChild}
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              borderColor: "#fff",
              borderRadius: "100px",
              "&:hover": { borderColor: "#fff" },
              width: 176,
              height: 40,
            }}
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
