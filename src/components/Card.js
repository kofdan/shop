import Button from "@mui/material/Button";

function Card({ imgPath, title, price, id }) {
  return (
    <>
      <div className='cardWrapper'>
        <img src={imgPath} alt={title} />
        <h3>{title}</h3>
        <p>Стоимость: {price}</p>

        <Button href={"/products/" + id} variant='contained' name={id}>
          Купить
        </Button>
      </div>
    </>
  );
}

export default Card;
