export type RatingStarProps = {
  value: number;
  onClick: () => void;
}
function RatingStar({value, onClick} : RatingStarProps) {
  return (
    <>
      <input className="rating__input" id={`star-${value}`} type="radio" name="rating" value={value} onClick={onClick}/>
      <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
    </>
  );
}

export default RatingStar;
