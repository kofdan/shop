import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import Dbconnect from "../hooks/Dbconnect";
import Nothingfound from "./Nothingfound";

const Singlepage = () => {
  const { product, loading, error } = Dbconnect(
    "https://fakestoreapi.com/products"
  );

  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <Nothingfound />;

  return (
    <div className='singleProduct'>
      {product && (
        <>
          <img src={product?.image} alt={product?.title} />
          <h1>{product?.title}</h1>
          <p>{product?.description}</p>
          <b>{product?.category}</b>
          <p>Price: {product?.price}</p>
          <Button onClick={goBack} variant='contained'>
            Back
          </Button>
        </>
      )}
    </div>
  );
};

export default Singlepage;
