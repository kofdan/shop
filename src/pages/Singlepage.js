import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import useConnect from "../hooks/useConnect";

import Modal from "../components/Modal";
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
  console.log(product);
  useEffect(() => {
    fetch(`${url}reviews/${id}`)
      .then((res) => res.json())
      .then((reviews) => {
        setReviews(reviews);
      });
  }, [url, id]);

  return (
    <div className='singleProduct'>
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
            {reviews?.map((obj) => (
              <Modal
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
