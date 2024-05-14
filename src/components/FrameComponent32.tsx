import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import FrameComponent33 from "./FrameComponent33";
import styles from "./FrameComponent32.module.css";

const FrameComponent32: FunctionComponent = () => {
  return (
    <section className={styles.blogLisitngInner}>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/rectangle-56@2x.png"
          />
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.titleParent}>
                <div className={styles.title}>
                  Navigating the World of DeFi: Strategies, Risks, and
                  Opportunities
                </div>
                <h3 className={styles.title1}>
                  Crypto Mining for Beginners: A Step-by-Step Guide
                </h3>
              </div>
              <div className={styles.title2}>
                In the rapidly evolving landscape of cryptocurrency,
                Decentralized Finance (DeFi) has emerged as a revolutionary
                force, promising financial freedom like never before. Our blog,
                "Demystifying Decentralized Finance (DeFi): A Roadmap to
                Financial Freedom," is your compass through this exciting
                journey. We'll unravel the intricacies of DeFi, explore the
                strategies that can maximize your gains, delve into the
                potential risks, and shine a light on the myriad of
                opportunities waiting to be seized. Whether you're a seasoned
                blockchain enthusiast or just dipping your toes into DeFi
                waters,
              </div>
            </div>
            <Button
              className={styles.frameItem}
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#0e0e0e",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#0e0e0e" },
                width: 240,
                height: 44,
              }}
            >
              Explore Our Services
            </Button>
          </div>
        </div>
        <div className={styles.componentParent}>
          <FrameComponent33
            rectangle4="/rectangle-41@2x.png"
            theRiseOfAltcoinsExplorin="The Rise of Altcoins: Exploring Beyond Bitcoin"
          />
          <FrameComponent33
            rectangle4="/rectangle-4-1@2x.png"
            theRiseOfAltcoinsExplorin="Sustainable Mining: Balancing Profit and the Environment"
          />
          <FrameComponent33
            rectangle4="/rectangle-4-21@2x.png"
            theRiseOfAltcoinsExplorin="The Blockchain Revolution: Impacts and Implications"
          />
          <FrameComponent33
            rectangle4="/rectangle-4-3@2x.png"
            theRiseOfAltcoinsExplorin="Crypto Wallets Demystified: Choosing the Right One for You"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent32;
