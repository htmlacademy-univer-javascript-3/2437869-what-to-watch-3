import {useAppSelector} from '../../hooks';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import User from '../../components/User/user.tsx';
import AddReviewForm from '../../components/AddReviewForm/addReviewForm.tsx';
import NotFoundScreen from '../NotFound/notFoundScreen.tsx';
import Logo from '../../components/Logo/logo.tsx';

function AddReviewPage(): JSX.Element {
  const currentFilm = useAppSelector((state) => state.film);
  if (!currentFilm){
    return (<NotFoundScreen />);
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
          <User />
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img
            className="film-card__poster--image-item"
            src={currentFilm.posterImage}
            alt={`${currentFilm.name} poster`}
          />
        </div>
      </div>
      <AddReviewForm />
    </section>
  );
}

export default AddReviewPage;
