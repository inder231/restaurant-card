import styles from "./restaurantcard.module.css";
export const DetailComponent = ({ data }) => {
  const { cuisine, deliveryTime, minOrder, name, costForTwo, payment_methods } =
    data;
  return (
    <div>
      <h3>{name}</h3>
      <p>{cuisine.join(", ")}</p>
      <p>Cost &#8377;{costForTwo} for two</p>
      <p>
        Min &#8377;{minOrder} * Up to {deliveryTime} min
      </p>
      <p>

        {payment_methods.card && payment_methods.cash
          ? "All payments accepted"
          : (payment_methods.card && "Accepts Online Payments only.") ||
            (payment_methods.cash && "Accepts Cash Payments only.")}
      </p>
    </div>
  );
};
