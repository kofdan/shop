import Card from "../components/Card";
import Dbconnect from "../hooks/Dbconnect";
import Nothingfound from "./Nothingfound";

function Homepage() {
  const { data, loading, error } = Dbconnect(
    "https://fakestoreapi.com/products"
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) return <Nothingfound />;

  return (
    <>
      <div className='card'>
        {data?.map((obj) => (
          <Card
            key={obj.id}
            title={obj.title}
            imgPath={obj.image}
            price={obj.price}
            id={obj?.id}
          />
        ))}
      </div>
    </>
  );
}

export default Homepage;
