import useConnect from "../../hooks/useConnect";
import { useParams } from "react-router-dom";
const URL = "https://smktesting.herokuapp.com/api/reviews";

const styles = {
  ul: {
    textDecoration: "none"
  },
  li: {
    border: "1px solid black",
    borderRadius: "10px",
    marginBottom: "5px",
    textAlign: "center",
    listStyle: "none"
  }
};

function ProductReviews() {
  const { id } = useParams();
  const reviewsURL = `${URL}/${id}`;
  const { data } = useConnect(reviewsURL);

  const reviews = data;
  return (
    <>
      <div>
        <ul style={styles.ul}>
          {reviews?.map((obj) => (
            <li style={styles.li} key={obj.id}>
              <h3>{obj.text}</h3>
              <p>{obj.created_at}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductReviews;
