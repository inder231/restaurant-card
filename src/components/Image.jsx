import styles from "./restaurantcard.module.css";
export const Image = ({ src }) => {
  return (
    <img
      width="130px"
      height="130px"
      style={{ borderRadius: "8px" }}
      src={src}
      alt=""
    />
  );
};
