import React from 'react';
import {useAppSelector} from '../../../hooks';


function Overview(): JSX.Element {
  const currentFilm = useAppSelector((state) => state.film);

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{currentFilm?.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{`${currentFilm?.scoresCount} ratings`}</span>
        </p>
      </div>
      <div className="film-card__text">
        {currentFilm?.description}
        <p className="film-card__director">
          <strong>Director: {currentFilm?.director}</strong>
        </p>
        <p className="film-card__starring">
          <strong>
            Starring: {currentFilm?.starring.map((actor) => (
              currentFilm?.starring[currentFilm?.starring.length - 1] === actor ?
                <React.Fragment key={actor}>{actor} and other</React.Fragment> :
                <React.Fragment key={actor}>{actor}, </React.Fragment>
            ))}
          </strong>
        </p>
      </div>
    </>
  );
}

export default Overview;
