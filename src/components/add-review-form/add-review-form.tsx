import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AxiosError } from 'axios';
import {useAppDispatch} from '../../hooks';
import {postReview} from '../../store/api-actions.ts';
import RatingStar from './rating-star.tsx';
import {processErrorHandle} from '../../services/process-error-handle.ts';
import {MAX_LENGTH_REVIEW, MIN_LENGTH_REVIEW} from '../../const.ts';

function AddReviewForm() {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const [filmRating, setRating] = useState(0);
  const [reviewContent, setReview] = useState('');
  const dispatch = useAppDispatch();

  const handleInputChange = useCallback((evt: ChangeEvent<HTMLInputElement>) =>
    setRating(Number(evt.target.value)), []);

  const doOnSubmit = (rating: number, comment: string) => {
    dispatch(postReview({ filmId: id, rating, comment }))
      .catch((err: AxiosError) => processErrorHandle(`Something went wrong. ${err.message}`));
    navigate(`/films/${id}`);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (filmRating && reviewContent) {
      doOnSubmit(filmRating, reviewContent);
    }
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {Array.from({ length: 10 }, (_, i) => i + 1)
              .reverse()
              .map((number) => <RatingStar key={number} value={number} onClick={handleInputChange} />)}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            value={reviewContent}
            onChange={(evt: ChangeEvent<HTMLTextAreaElement>) => {
              setReview(evt.target.value);
            }}
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            minLength={MIN_LENGTH_REVIEW}
            maxLength={MAX_LENGTH_REVIEW}
          >
          </textarea>
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={!filmRating || !reviewContent || reviewContent.length < MIN_LENGTH_REVIEW || reviewContent.length > MAX_LENGTH_REVIEW}
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;
