import Card from "../components/Card";
import useConnect from "../hooks/useConnect";
import Nothingfound from "./Nothingfound";

function Homepage() {
  const { data, loading, error } = useConnect();
  if (loading) return <h1>Loading...</h1>;
  if (error) return <Nothingfound />;
  return (
    <>
      <div className="card">
        {data?.map((obj) => (
          <Card
            key={obj.id}
            title={obj.title}
            img={obj.img}
            id={obj.id}
            text={obj.text}
          />
        ))}
      </div>
    </>
  );
}

export default Homepage;
