import Star from "/assets/star.svg";
function Rating({ value }) {
  const starts = Array(value).fill(Star);
  return (
    <>
      {starts.map((star, index) => (
        <img src={star} key={index} width="14" height="14" alt={star}></img>
      ))}
    </>
  );
}

export default Rating;
