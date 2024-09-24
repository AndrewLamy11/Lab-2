export default function Hotel({
  image,
  location,
  hotelname,
  above4,
  rating,
  price,
}) {
  return (
    <div className="Hotel">
      <img src={image} alt="" width="200px"></img>
      <h2>{location}</h2>
      <h4>{hotelname}</h4>
      {above4 ? (
        <h4 style={{ color: "green" }}>{rating}</h4>
      ) : (
        <h4 style={{ color: "Red" }}>{rating}</h4>
      )}
      <h5>{price}</h5>
    </div>
  );
}
