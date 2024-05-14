import { FunctionComponent } from "react";
import GroupComponent6 from "../components/GroupComponent6";
import FrameComponent19 from "../components/FrameComponent19";
import FrameComponent18 from "../components/FrameComponent18";
import FrameComponent17 from "../components/FrameComponent17";
import FrameComponent16 from "../components/FrameComponent16";
import styles from "./ProductListing.module.css";

const ProductListing: FunctionComponent = () => {
  return (
    <div className={styles.productListing}>
      <GroupComponent6 />
      <FrameComponent19 />
      <FrameComponent18 />
      <FrameComponent17 />
      <FrameComponent16 />
    </div>
  );
};

export default ProductListing;
