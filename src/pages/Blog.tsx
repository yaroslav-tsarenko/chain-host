import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import Main from "../components/Main";
import GroupComponent from "../components/GroupComponent";
import Footer from "../components/Footer";
import styles from "./Blog.module.css";

const Blog: FunctionComponent = () => {
  return (
    <div className={styles.blog}>
      <FrameComponent1 />
      <Main />
      <section className={styles.frameParent}>
        <GroupComponent />
        <Footer />
      </section>
    </div>
  );
};

export default Blog;
