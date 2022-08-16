import "./rateStyles.css";

const Rate = () => {
  return (
    <>
      <div className="simple-rating">
        <div className="simple-rating__items">
          <input
            id="simple-rating__5"
            type="radio"
            className="simple-rating__item"
            name="simple-rating"
            value="5"
          />
          <label
            htmlFor="simple-rating__5"
            className="simple-rating__label"
          ></label>

          <input
            id="simple-rating__4"
            type="radio"
            className="simple-rating__item"
            name="simple-rating"
            value="4"
          />
          <label
            htmlFor="simple-rating__4"
            className="simple-rating__label"
          ></label>

          <input
            id="simple-rating__3"
            type="radio"
            className="simple-rating__item"
            name="simple-rating"
            value="3"
          />
          <label
            htmlFor="simple-rating__3"
            className="simple-rating__label"
          ></label>

          <input
            id="simple-rating__2"
            type="radio"
            className="simple-rating__item"
            name="simple-rating"
            value="2"
          />
          <label
            htmlFor="simple-rating__2"
            className="simple-rating__label"
          ></label>

          <input
            id="simple-rating__1"
            type="radio"
            className="simple-rating__item"
            name="simple-rating"
            value="1"
          />
          <label
            htmlFor="simple-rating__1"
            className="simple-rating__label"
          ></label>
        </div>
      </div>
    </>
  );
};

export default Rate;
