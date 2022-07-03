import styles from "./restaurantcard.module.css";
export const DetailComponent = ({ data }) => {
  const {
    cuisine,
    deliveryTime,
    minOrder,
    name,
    costForTwo,
    payment_methods
  } = data;
  return (
    <div>
      <h3>{name}</h3>
      <p>{cuisine.join(", ")}</p>
      <p>Cost &#8377;{costForTwo} for two</p>
      <p>
        Min &#8377;{minOrder} * Up to {deliveryTime} min
      </p>
      <p>
        Accepts{" "}
        {payment_methods.card
          ? "Online payments only."
          : payment_methods.cash
          ? "Cash payments only."
          : "bitcoin payments."}{" "}
      </p>
    </div>
  );
};
