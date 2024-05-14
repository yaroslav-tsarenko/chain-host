import { FunctionComponent } from "react";
import AdvantageCards from "./AdvantageCards";
import styles from "./GroupComponent1.module.css";

const GroupComponent1: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.advantagesContent}>
        <h1 className={styles.advantagesOfChoosing}>
          Advantages of Choosing ChainHost
        </h1>
        <div className={styles.advantageCardsParent}>
          <AdvantageCards
            advantageSeparator="01"
            cuttingEdgeTechnology="Cutting-Edge Technology"
            weStayAheadOfTheCurveByCo="We stay ahead of the curve by consistently investing in the latest mining hardware and software, ensuring our users have access to the most advanced and efficient tools in the industry."
          />
          <img
            className={styles.advantageCardsIcon}
            loading="lazy"
            alt=""
            src="/vector-10.svg"
          />
          <AdvantageCards
            advantageSeparator="02"
            cuttingEdgeTechnology="24/7 Expert Support"
            weStayAheadOfTheCurveByCo="Our dedicated support team is available around the clock to assist you with any queries or issues. Whether you're a seasoned miner or just getting started, we've got your back."
            propWidth="1040px"
            propWidth1="83px"
            propMinWidth="83px"
          />
          <img
            className={styles.advantageCardsIcon1}
            loading="lazy"
            alt=""
            src="/vector-10.svg"
          />
          <AdvantageCards
            advantageSeparator="03"
            cuttingEdgeTechnology="Profit Maximization"
            weStayAheadOfTheCurveByCo="With our competitive pricing, low fees, and efficient mining processes, our users consistently report higher profitability compared to other mining services. We're committed to helping you make the most out of your mining endeavors."
            propWidth="1041px"
            propWidth1="84px"
            propMinWidth="84px"
          />
          <img
            className={styles.advantageCardsIcon2}
            loading="lazy"
            alt=""
            src="/vector-10.svg"
          />
          <AdvantageCards
            advantageSeparator="04"
            cuttingEdgeTechnology="Security and Transparency"
            weStayAheadOfTheCurveByCo="ChainHost prioritizes the security of your assets and transactions. Our transparent approach to mining and robust security measures ensure your peace of mind while you mine and transact in the world of cryptocurrencies."
            propWidth="1042px"
            propWidth1="85px"
            propMinWidth="85px"
          />
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
