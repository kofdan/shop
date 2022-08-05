import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function useConnect() {
  const [data, setData] = useState(null);
  const [reviews, setReviews] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const URL = "https://smktesting.herokuapp.com/api";
  const { id } = useParams();
  const PRODUCTS = `${URL}/products/`;
  const REVIEWS = `${URL}/reviews/${id}`;

  useEffect(() => {
    setLoading(true);
    fetch(PRODUCTS)
      .then((data) => data.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [PRODUCTS]);

  useEffect(() => {
    fetch(REVIEWS)
      .then((reviews) => reviews.json())
      .then((reviews) => {
        setReviews(reviews);
      });
  }, [REVIEWS, id]);

  return { data, reviews, id, loading, error };
}

export default useConnect;
