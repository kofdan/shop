import Card from "../components/Card";

const arr = [
  {
    id: 1,
    imgPath: "./img/img1.jpg",
    title: "Первый товар",
    description: "Первый товар очень первый товар",
    price: 1234.22
  },
  {
    id: 2,
    imgPath: "./img/img1.jpg",
    title: "Второй товар",
    description: "Второй товар очень первый товар",
    price: 1234.22
  },
  {
    id: 3,
    imgPath: "./img/img1.jpg",
    title: "Третий товар",
    description: "Третий товар очень первый товар",
    price: 1234.22
  },
  {
    id: 4,
    imgPath: "./img/img1.jpg",
    title: "Четвертый товар",
    description: "Четвертый товар очень первый товар",
    price: 1234.22
  }
];

function Homepage() {
  return (
    <>
      <div className="card">
        {arr.map((obj) => (
          <Card
            key={obj.id}
            title={obj.title}
            imgPath={obj.imgPath}
            price={obj.price}
            id={obj.id}
          />
        ))}
      </div>
    </>
  );
}

export default Homepage;
