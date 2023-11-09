import RatingStar from './ratingStar.tsx';
import {STARCOUNT} from '../App/const.ts';
import {useState} from 'react';

function AddReviewForm() {
  const [reviewForm, setReviewForm] = useState({
    rate: 0,
    text: ''
  });
  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {Array.from(Array(STARCOUNT).keys()).map((i) => (
              <RatingStar
                key={STARCOUNT - i}
                value={STARCOUNT - i}
                onClick={() => setReviewForm(
                  {
                    ...reviewForm,
                    rate: STARCOUNT - i,
                  }
                )}
              />
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text" id="review-text"
            placeholder="Review text"
            onChange={(evt) => setReviewForm({
              ...reviewForm,
              text: evt.target.value
            })}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;
