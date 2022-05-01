function SingleCard({ img, title, text }) {
  const url = "http://smktesting.herokuapp.com/";
  return (
    <>
      <div className='single_body__product'>
        <h3>{title}</h3>
        <img src={`${url}static/${img}`} alt={title} />
        <p>{text}</p>
      </div>
    </>
  );
}
export default SingleCard;
