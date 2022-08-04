import Button from "@mui/material/Button";

function Card({ img, title, text, id }) {
  const url = "http://smktesting.herokuapp.com/";
  return (
    <>
      <div className='card-wrapper'>
        <img src={`${url}static/${img}`} alt={title} />
        <h3>{title}</h3>
        <p>{text}</p>
        <Button href={`product/${id}`} variant='contained' name={id}>
          More
        </Button>
      </div>
    </>
  );
}
export default Card;
