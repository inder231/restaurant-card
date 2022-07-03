import { OrderButton } from "./OrderButton";
import { Image } from "./Image";
import { DetailComponent } from "./DetailComponent";
import styles from "./restaurantcard.module.css";
import { Rating } from "./Ratings";

export const RestaurantCard = ({ data }) => {
  const {
    id,
    name,
    cuisine,
    costForTwo,
    minOrder,
    deliveryTime,
    payment_methods,
    src
  } = data;

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.foodImage}>
          <Image src={src} />
        </div>
        <div className={styles.textData}>
          <DetailComponent data={data} />
        </div>
        <div className={styles.ratingDiv}>
          <Rating data={data} />
        </div>
      </div>
      <div className={styles.footer}>
        <div>
          <OrderButton />
        </div>
      </div>
    </div>
  );
};
