import { useNavigate, useParams } from "react-router-dom";
import { Nothingfound } from "../pages/Nothingfound";

import useConnect from "../hooks/useConnect";

// import ProductInfo from "../components/ProductInfo";
import SingleCard from "../components/SingleCard";

const URL = "https://smktesting.herokuapp.com/api/products";

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
    <div className="single-product">
      <>
        <div className="single_body">
          {product && (
            <SingleCard
              img={product.img}
              title={product.title}
              text={product.text}
            />
          )}

          {/* <div className="single_body__reviews">
            <div>
              <form>
                <textarea
                  aria-label="Demo input"
                  placeholder="Type something..."
                />
              </form>
              <button variant="contained" color="success">
                Send Review
              </button>
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
          </div> */}
        </div>
        <button onClick={goBack}>Back</button>
      </>
    </div>
  );
};

export default Singlepage;
