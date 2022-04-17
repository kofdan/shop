import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

const Singlepage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  const goBack = () => navigate(-1);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <div className='singleProduct'>
      {product && (
        <>
          <img src={product.image} alt={product.title} />
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <b>{product.category}</b>
          <p>Price: {product.price}</p>
          <Button onClick={goBack} variant='contained'>
            Back
          </Button>
        </>
      )}
    </div>
  );
};

export default Singlepage;
