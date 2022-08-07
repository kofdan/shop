const styles = {
  item: {
    alignSelf: "start"
  }
};

function SingleCard({ img, title, text }) {
  const url = "http://smktesting.herokuapp.com/";
  return (
    <>
      <div style={styles.item}>
        <h3>{title}</h3>
        <img src={`${url}static/${img}`} alt={title} />
        <p>{text}</p>
      </div>
    </>
  );
}
export default SingleCard;
