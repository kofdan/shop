import { useState } from "react";
import styles from "./ReviewsFormStyle.module.css";

function ReviewsForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
      <ul className={styles.rateWrapper}>
        <li className={styles.rateItem}></li>
        <li className={styles.rateItem}></li>
        <li className={styles.rateItem}></li>
        <li className={styles.rateItem}></li>
        <li className={styles.rateItem}></li>
      </ul>
    </>
  );
}

export default ReviewsForm;
