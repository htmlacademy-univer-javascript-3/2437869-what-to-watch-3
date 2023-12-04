import {useParams} from 'react-router-dom';
import {FilmCardProps} from '../../FilmCard/filmCardProps.tsx';

type OverviewProps = {
  films: FilmCardProps[];
}

function Overview({films}: OverviewProps): JSX.Element {
  const {id} = useParams();
  const currentFilmId = Number(id);
  const currentFilm = films.at(currentFilmId);

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{currentFilm?.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">240 ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        {currentFilm?.description}
        <p className="film-card__director">
          <strong>Director: {currentFilm?.director}</strong>
        </p>
        <p className="film-card__starring">
          <strong>
            Starring: {currentFilm?.starring}
          </strong>
        </p>
      </div>
    </>
  );
}

export default Overview;
