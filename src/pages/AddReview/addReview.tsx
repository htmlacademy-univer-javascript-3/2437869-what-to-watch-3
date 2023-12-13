import { Helmet } from 'react-helmet-async';

import Logo from '../../components/Logo/logo.tsx';
import {FilmCardProps} from '../../components/FilmCard/filmCardProps.tsx';
import {Link, useParams} from 'react-router-dom';
import AddReviewForm from '../../components/AddReviewForm/addReviewForm.tsx';
import NotFoundScreen from '../NotFound/notFoundScreen.tsx';

export type AddReviewPageProps = {
  films: FilmCardProps[];
}

function AddReviewPage({ films }: AddReviewPageProps): JSX.Element {
  const { id } = useParams();
  const currentFilmId = Number(id);
  const currentFilm = films.at(currentFilmId);
  if (!id || currentFilm === undefined) {
    return <NotFoundScreen />;
  }
  return (
    <section className="film-card film-card--full">
      <Helmet>
        <title>Что посмотреть. Оставьте отзыв!</title>
      </Helmet>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src={currentFilm.backgroundImage}
            alt={currentFilm.name}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${currentFilm.id}`} className="breadcrumbs__link">
                  {currentFilm.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img
                  className="user-block__image-item"
                  src="img/avatar.jpg"
                  alt="User avatar"
                />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img
            className="film-card__poster--image-item"
            src={currentFilm.previewImage}
            alt={`${currentFilm.name} poster`}
          />
        </div>
      </div>
      <AddReviewForm />
    </section>
  );
}

export default AddReviewPage;
