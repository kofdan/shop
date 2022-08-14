import { useEffect, useState } from "react";
import styles from "./ReviewsFormStyle.module.css";

function ReviewsForm() {
  const [value, setValue] = useState("");
  const [revError, setRevError] = useState(false);
  const [fieldValid, setFieldValid] = useState(false);
  const [dataSend, setDataSend] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue("");
    setDataSend(true);
  };

  const handleBlur = () => {
    if (value === "") {
      setRevError(true);
      setDataSend(false);
    } else {
      setRevError(false);
    }
  };
  const handleFocus = (e) => dataSend && setDataSend(false);

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value.length > 0) {
      setFieldValid(true);
      setRevError(false);
    } else {
      setFieldValid(false);
    }
  }, [value, dataSend]);

  return (
    <>
      <form
        className={styles.formBody}
        onSubmit={handleSubmit}
        onBlur={handleBlur}
      >
        <textarea
          onBlur={handleBlur}
          onChange={handleOnChange}
          onFocus={handleFocus}
          id="content"
          placeholder="Type your review..."
        ></textarea>
        <button disabled={!fieldValid}>Send</button>
        {dataSend && <p className={styles.succsess}>Your message send. Thx</p>}
        {revError && (
          <p className={styles.error}>this field must be not empty</p>
        )}
      </form>
    </>
  );
}

export default ReviewsForm;
