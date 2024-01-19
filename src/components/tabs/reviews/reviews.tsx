import ReviewBlock from './review-block.tsx';
import {Review} from '../../../const.ts';

type ReviewsProps = {
  reviews: Review[];
}

function Reviews({ reviews }: ReviewsProps) {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.slice(0, reviews.length / 2).map((review) => <ReviewBlock key={review.id} review={review} />)}
      </div>
      <div className="film-card__reviews-col">
        {reviews.slice(reviews.length / 2).map((review) => <ReviewBlock key={review.id} review={review} />)}
      </div>
    </div>
  );
}

export default Reviews;
