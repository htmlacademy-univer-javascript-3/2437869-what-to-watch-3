import {useAppDispatch, useAppSelector} from '../../hooks';
import {Link, Navigate, useParams} from 'react-router-dom';
import User from '../../components/user/user.tsx';
import AddReviewForm from '../../components/add-review-form/add-review-form.tsx';
import Logo from '../../components/logo/logo.tsx';
import {getFilm} from '../../store/film-reducer/film-selectors.ts';
import {getAuthStatus} from '../../store/user-reducer/user-selector.ts';
import {useEffect} from 'react';
import {setDataIsLoading} from '../../store/actions.ts';
import {fetchFilmByID} from '../../store/api-actions.ts';
import {AxiosError} from 'axios';
import {processErrorHandle} from '../../services/process-error-handle.ts';
import {AppRoute, AuthorizationStatus} from '../../const.ts';

function AddReviewPage() {
  const { id = '' } = useParams();
  const dispatch = useAppDispatch();
  const currentFilm = useAppSelector(getFilm);
  const authStatus = useAppSelector(getAuthStatus);

  useEffect(() => {
    dispatch(setDataIsLoading(true));
    dispatch(fetchFilmByID(id))
      .catch((err: AxiosError) => processErrorHandle(`Something went wrong. ${err.message}`));
    dispatch(setDataIsLoading(false));
  }, [id, dispatch]);

  if (authStatus === AuthorizationStatus.NoAuth) {
    return <Navigate to={AppRoute.Main} />;
  }

  if (!currentFilm) {
    return null;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src={currentFilm?.backgroundImage}
            alt={currentFilm?.name}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${currentFilm?.id}`} className="breadcrumbs__link">
                  {currentFilm?.name}
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
            src={currentFilm?.posterImage}
            alt={currentFilm?.name && `${currentFilm.name} poster`}
          />
        </div>
      </div>
      <AddReviewForm />
    </section>
  );
}

export default AddReviewPage;
