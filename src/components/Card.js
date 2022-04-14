import { Button, Link } from "@mui/material";

function Card({ imgPath, title, price, id }) {
  return (
    <>
      <div className="cardWrapper">
        <img src={imgPath} alt={title} />
        <h3>{title}</h3>
        <p>Стоимость: {price}</p>

        <Button href={id} variant="contained" name={id}>
          Купить:
          </Button>
          
      </div>
    </>
  );
}

export default Card;
