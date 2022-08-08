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
    listStyle: "none",
    paddingLeft: "15px"
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
              <p>
                {obj.username} {obj.created_at}
              </p>
              <h3>Comment: {obj.text}</h3>
              <p>Rate: {obj.rate}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductReviews;
