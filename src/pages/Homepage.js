import { useEffect, useState } from "react";

import Card from "../components/Card";



function Homepage() {





  // useEffect( () => {
  //   fetch('https://fakestoreapi.com/products')
  //   .then(res=>res.json())
  //   .then(result => {
  //     setItems(result)
  //   })
  // }, [] )
  const [products, setProducts] = useState([]);

  useEffect( () => {
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(data => {
        setProducts(data)
      })
    }, [] )
  return (
    <>
      <div className="card">
        {
        products.map(obj => (
          <Card
          key={obj.id}
          title={obj.title}
          imgPath={obj.image}
          price={obj.price}
          id={obj.id}
        />
        ))}
      </div>
    </>
  );
}

export default Homepage;
