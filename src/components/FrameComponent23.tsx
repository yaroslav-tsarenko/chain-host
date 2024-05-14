import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent23.module.css";

const FrameComponent23: FunctionComponent = () => {
  return (
    <section className={styles.pdpInner}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.whyChooseTrustnodeParent}>
            <h1 className={styles.whyChooseTrustnode}>Why Choose TrustNode?</h1>
            <div className={styles.choosingTrustnodeFor}>
              Choosing TrustNode for your crypto mining journey is a decision
              rooted in trust and innovation. We stand out in the industry for
              several key reasons. With a team of seasoned experts, we bring a
              wealth of knowledge and experience to the table, ensuring that our
              services are tailored to your unique needs. TrustNode's
              state-of-the-art mining infrastructure is designed for peak
              efficiency and sustainability, giving you a competitive edge in
              the world
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
              width: 151,
              height: 40,
            }}
          >
            USERS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent23;
