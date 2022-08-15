import { useState } from "react";
import styles from "./Rate.module.css";

const Rate = () => {
  const [rateHov, setRateHov] = useState(false);

  return (
    <div className={styles.starRate}>
      <ul className={styles.starRateWrapper}>
        <li className={styles.starRateItem}>
          <a
            onMouseEnter={() => setRateHov(true)}
            onMouseLeave={() => setRateHov(false)}
            style={{ backgroundPosition: rateHov ? "left -16px" : "left 0" }}
            className={styles.starRateLink}
            href=" "
            data-value="5"
          >
            <span className={styles.starRateSpan}>5 stars</span>
          </a>
        </li>
        <li className={styles.starRateItem}>
          <a className={styles.starRateLink} href=" " data-value="4">
            <span className={styles.starRateSpan}>4 stars</span>
          </a>
        </li>
        <li className={styles.starRateItem}>
          <a className={styles.starRateLink} href=" " data-value="3">
            <span className={styles.starRateSpan}>3 stars</span>
          </a>
        </li>
        <li className={styles.starRateItem}>
          <a className={styles.starRateLink} href=" " data-value="2">
            <span className={styles.starRateSpan}>2 stars</span>
          </a>
        </li>
        <li className={styles.starRateItem}>
          <a className={styles.starRateLink} href=" " data-value="1">
            <span className={styles.starRateSpan}>1 star</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Rate;
