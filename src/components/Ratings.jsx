export const Rating = ({ data }) => {
  const { rating, reviews, votes } = data;
  return (
    <>
      <div>
        <p
          style={{
            color: "green",
            background: "lightgreen",
            width: "20px",
            padding: "5px",
            borderRadius: "4px"
          }}
        >
          {rating}
        </p>
      </div>
      <p>{reviews} reviews</p>
      <p>{votes} votes</p>
    </>
  );
};
