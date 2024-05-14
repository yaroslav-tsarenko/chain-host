import { FunctionComponent } from "react";
import styles from "./FAQExampleRow.module.css";

export type FAQExampleRowType = {
  howDoIBuyCryptocurrencies?: string;
};

const FAQExampleRow: FunctionComponent<FAQExampleRowType> = ({
  howDoIBuyCryptocurrencies,
}) => {
  return (
    <div className={styles.fAQExampleRow}>
      <div className={styles.fAQExampleItem}>
        <div className={styles.fAQExampleContent}>
          <div className={styles.howDoI}>{howDoIBuyCryptocurrencies}</div>
        </div>
        <div className={styles.fAQExampleIcons}>
          <img
            className={styles.fAQIconFirst}
            loading="lazy"
            alt=""
            src="/vector-17.svg"
          />
        </div>
      </div>
      <img
        className={styles.fAQIconSecond}
        loading="lazy"
        alt=""
        src="/vector-10-1.svg"
      />
    </div>
  );
};

export default FAQExampleRow;
