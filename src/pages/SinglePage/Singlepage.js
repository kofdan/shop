import { useNavigate, useParams } from "react-router-dom";
import useConnect from "../../hooks/useConnect";

import { Nothingfound } from "../Nothingfound/Nothingfound";
import ProductReviews from "./ProductReviews";
import SingleCard from "./SingleCard";
import ReviewsForm from "./ReviewsForm";

import { Button } from "@mui/material";

const URL = "https://smktesting.herokuapp.com/api/products";
const styles = {
  div: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
};
const Singlepage = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useConnect(URL);
  const goBack = () => navigate("/");
  const { id } = useParams();
  const currentProductId = +id;
  const product = data?.find(({ id }) => id === currentProductId);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <Nothingfound />;

  return (
    <>
      <ReviewsForm />

      <div style={styles.div}>
        {product && (
          <SingleCard
            img={product.img}
            title={product.title}
            text={product.text}
          />
        )}
        <ProductReviews />
      </div>

      <Button variant="contained" onClick={goBack}>
        Back
      </Button>
    </>
  );
};

export default Singlepage;
