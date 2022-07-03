import { useEffect, useState } from "react";
import { RestaurantCard } from "./components/RestaurantCard";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [price, setPrice] = useState("ASC");
  const [rating, setRating] = useState(0);
  const [totalCount, setTotalCount] = useState();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://rct-restaurant-app-api.herokuapp.com/items?_limit=10_page=${page}&rating_gte=${rating}&_sort=costForTwo&_order=${price}`
      )
      .then((res) => {
        setData(res.data);
        console.log(res);
        setTotalCount(res.headers["x-total-count"]);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(true);
      });
  }, [page, price, rating]);
  const getData = (paymentCard, paymentCash) => {
    setIsLoading(true);
    axios
      .get(
        `https://rct-restaurant-app-api.herokuapp.com/items?_limit=10_page=1&rating_gte=0&_sort=costForTwo&_order=ASC&payment_methods.card=${paymentCard}&payment_methods.cash=${paymentCash}`
      )
      .then((res) => {
        setData(res.data);
        setTotalCount(res.headers["x-total-count"]);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(true);
      });
  };
  console.log(totalCount);
  const handleRating = (e) => {
    setRating(e.target.value);
  };
  const handlePaymentCard = () => {
    console.log("clicked");
    getData((paymentCash = false), (paymentCard = true));
  };
  const handlePaymentCash = () => {
    console.log("clicked");
    getData((paymentCash = true), (paymentCard = false));
  };
  const handleAllPayments = () => {
    getData((paymentCard = true), (paymentCash = true));
  };
  const handlePrice = (e) => {
    console.log(e.target.value);
    setPrice(e.target.value);
  };
  const handlePage = (val) => {
    console.log(page);
    setPage((page) => page + val);
  };
  return (
    <div className="App">
      <div className="functionality">
        <div>
          <button onClick={() => handlePage(-1)} disabled={page === 1}>
            Prev
          </button>
        </div>
        <div className="rating">
          <select onChange={handleRating}>
            <option value="">Ratings</option>
            <option value="4">Above 4</option>
            <option value="3">Above 3</option>
            <option value="2">Above 2</option>
            <option value="1">Above 1</option>
            <option value="0">All</option>
          </select>
        </div>
        <div className="paymentSorting">
          <button onClick={() => handleAllPayments()}>All</button>
          <button onClick={() => handlePaymentCash()}>Cash</button>
          <button onClick={() => handlePaymentCard()}>Card</button>
        </div>
        <div className="sortingInPrice">
          <select onChange={handlePrice}>
            <option value="">Price sorting</option>
            <option value="ASC">low to high</option>
            <option value="DESC">high to low</option>
          </select>
        </div>
        <div>
          <button
            onClick={() => handlePage(+1)}
            disabled={page === Math.ceil(totalCount / 10)}
          >
            Next
          </button>
        </div>
      </div>
      {isloading ? (
        <div>
          <img
            src="https://imgs.search.brave.com/nuIJMuYyFq_uENi8Cz4KUS9O-X8B7SfvVCByOXdtOJI/rs:fit:898:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4y/MDNPeUlRclpRY3ZQ/QXR0dHJ1a3NnSGFE/NiZwaWQ9QXBp"
            alt=""
          />
        </div>
      ) : error ? (
        <div>something went wrong..</div>
      ) : (
        <div className="gridData">
          {data?.map((ele) => (
            <RestaurantCard key={ele.id} data={ele} />
          ))}
        </div>
      )}
    </div>
  );
}
