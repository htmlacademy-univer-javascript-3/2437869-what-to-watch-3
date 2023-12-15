import Footer from '../../components/Footer/footer.tsx';
import {Link, useParams} from 'react-router-dom';
import NotFoundScreen from '../NotFound/notFoundScreen.tsx';
import {Fragment, useEffect} from 'react';
import {Helmet} from 'react-helmet-async';
import {AuthorizationStatus, MAXDISPLAYEDFILMS} from '../../components/App/const.ts';
import FilmTabs from '../../components/Tabs/tabs.tsx';
import FilmList from '../../components/FilmList/filmList.tsx';
import Logo from '../../components/Logo/logo.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchFilmByID, fetchReviewsByID, fetchSimilarByID} from '../../store/api-actions.ts';
import {setFilmsDataLoadingStatus} from '../../store/actions.ts';
import User from '../../components/User/user.tsx';

function FilmPage(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const currentFilm = useAppSelector((state) => state.film);
  const similarFilms = useAppSelector((state) => state.similarFilms);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  useEffect(() => {
    dispatch(setFilmsDataLoadingStatus(true));
    dispatch(fetchFilmByID(String(id)));
    dispatch(fetchSimilarByID(String(id)));
    dispatch(fetchReviewsByID(String(id)));
    dispatch(setFilmsDataLoadingStatus(false));
  }, [id, dispatch]);
  if (!id || !currentFilm) {
    return <NotFoundScreen/>;
  }
  return (
    <Fragment>
      <Helmet>
        <title>Что посмотреть. Описание фильма</title>
      </Helmet>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={currentFilm?.backgroundImage}
              alt={currentFilm?.name}
            />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <Logo/>
            <User />
          </header>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm.genre}</span>
                <span className="film-card__year">{currentFilm.released}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" className="btn--play__icon-item">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" className="btn--list__icon-item">
                    <use xlinkHref="#add"/>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{MAXDISPLAYEDFILMS}</span>
                </button>
                {authorizationStatus === AuthorizationStatus.Auth && (
                  <Link to={`/films/${currentFilm.id}/review`} className="btn film-card__button">
                    Add review
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                className="film-card__poster--image-item"
                src={currentFilm.posterImage}
                alt={`${currentFilm.name} poster`}
              />
            </div>
            <FilmTabs/>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList films={similarFilms}/>
        </section>
        <Footer/>
      </div>
    </Fragment>
  );
}

export default FilmPage;
