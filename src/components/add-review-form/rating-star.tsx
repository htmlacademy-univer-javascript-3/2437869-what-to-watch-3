import {ChangeEvent, Fragment} from 'react';

type RatingStarProps = {
  value: number;
  onClick: (evt: ChangeEvent<HTMLInputElement>) => void;
}
function RatingStar({ value, onClick }: RatingStarProps): React.ReactElement {
  return (
    <Fragment key={value}>
      <input data-testid='rating-item' key={`star-${value}`} onChange={onClick}
        className="rating__input" id={`star-${value}`} type="radio"
        name="rating" value={`${value}`}
      />
      <label className="rating__label" htmlFor={`star-${value}`}>
        Rating ${value}
      </label>
    </Fragment>
  );
}


export default RatingStar;
