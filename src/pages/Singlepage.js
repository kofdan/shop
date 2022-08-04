import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import useConnect from "../hooks/useConnect";

import ProductInfo from "../components/ProductInfo";
import SingleCard from "../components/SingleCard";

const Singlepage = () => {
  const navigate = useNavigate();
  const { data } = useConnect(`https://smktesting.herokuapp.com/api/products`);
  const url = `https://smktesting.herokuapp.com/api/`;
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);

  const goBack = () => navigate(-1);
  const currentProductId = +id;
  const product = data?.find(({ id }) => id === currentProductId);
  useEffect(() => {
    fetch(`${url}reviews/${id}`)
      .then((res) => res.json())
      .then((reviews) => {
        setReviews(reviews);
      });
  }, [url, id]);

  return (
    <div className='single-product'>
      <>
        <div className='single_body'>
          {product && (
            <SingleCard
              img={product.img}
              title={product.title}
              text={product.text}
            />
          )}

          <div className='single_body__reviews'>
            <div>
              <form>
                <textarea
                  aria-label='Demo input'
                  placeholder='Type something...'
                />
              </form>
              <Button variant='contained' color='success'>
                Send Review
              </Button>
            </div>
            {reviews?.map((obj) => (
              <ProductInfo
                key={obj.id}
                id={obj.id}
                product={obj.product}
                rate={obj.rate}
                text={obj.text}
                created_at={obj.created_at}
              />
            ))}
          </div>
        </div>
        <Button onClick={goBack} variant='contained'>
          Back
        </Button>
      </>
    </div>
  );
};

export default Singlepage;
