import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import FrameComponent32 from "../components/FrameComponent32";
import FrameComponent30 from "../components/FrameComponent30";
import FrameComponent29 from "../components/FrameComponent29";
import styles from "./BlogLisitng.module.css";

const BlogLisitng: FunctionComponent = () => {
  return (
    <div className={styles.blogLisitng}>
      <div className={styles.frameParent}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.frameChild} />
        </div>
        <header className={styles.frameGroup}>
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
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.frameWrapper1}>
              <div className={styles.exploreCryptoHostingServersParent}>
                <h1
                  className={styles.exploreCryptoHosting}
                >{`OPur Blogs: Insights & Updates`}</h1>
                <div className={styles.ourHostingSolutions}>
                  Welcome to the TrustNode Blog, your source for valuable
                  insights, updates, and engaging articles on cryptocurrency
                  mining, blockchain technology, and the ever-evolving world of
                  digital assets. Our blog is a treasure trove of knowledge,
                  designed to keep you informed, inspired, and empowered in your
                  crypto journey. Explore our articles to stay ahead of the
                  curve and make the most of your crypto investments.
                </div>
              </div>
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.frameItem} />
            </div>
          </div>
        </div>
      </div>
      <FrameComponent32 />
      <FrameComponent30 />
      <FrameComponent29 />
    </div>
  );
};

export default BlogLisitng;
