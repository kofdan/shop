import { useState } from "react";
import styles from "./ReviewsFormStyle.module.css";

function ReviewsForm() {
  const [value, setValue] = useState("");
  const auth = false;
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleBlur = () => {
    if (value === "") {
      console.log(123);
    }
  };
  return (
    <>
      <form
        className={styles.formBody}
        onSubmit={handleSubmit}
        onBlur={handleBlur}
      >
        <label>
          Enter your name:
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}

export default ReviewsForm;
