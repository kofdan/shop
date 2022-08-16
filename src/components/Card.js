import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function Card({ img, title, text, id }) {
  const url = "http://smktesting.herokuapp.com/";
  return (
    <>
      <div className="card-wrapper">
        <img src={`${url}static/${img}`} alt={title} />
        <h3>{title}</h3>
        <p>{text}</p>
        <Button
          component={Link}
          to={`product/${id}`}
          variant="contained"
          name={id}
        >
          More
        </Button>
      </div>
    </>
  );
}
export default Card;
