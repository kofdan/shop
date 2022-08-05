import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const URL = "https://smktesting.herokuapp.com/api/products/?format=json";

function useConnect() {
  const [data, setData] = useState(null);
  const [reviews, setReviews] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const { id } = useParams();

  const REVIEWS = `https://smktesting.herokuapp.com/api/reviews/`;
  useEffect(() => {
    fetch(`${REVIEWS}${id}?format=json`)
      .then((reviews) => reviews.json())
      .then((reviews) => {
        setReviews(reviews);
      });
  }, [REVIEWS, id]);

  return { data, reviews, id, loading, error };
}

export default useConnect;
