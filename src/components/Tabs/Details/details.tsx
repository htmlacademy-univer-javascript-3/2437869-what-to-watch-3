import { useParams } from 'react-router-dom';
import React from 'react';
import {FilmCardProps} from '../../FilmCard/filmCardProps.tsx';

type DetailsProps = {
  films: FilmCardProps[];
}

function Details({ films }: DetailsProps): JSX.Element {
  const { id } = useParams();
  const currentFilmId = Number(id);
  const currentFilm = films.at(currentFilmId);

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{currentFilm?.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {currentFilm?.starring.map((actor) => (
              <React.Fragment key={actor}>{actor}, <br /> </React.Fragment>
            ))}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{currentFilm?.runTime}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{currentFilm?.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{currentFilm?.released}</span>
        </p>
      </div>
    </div>
  );
}

export default Details;
