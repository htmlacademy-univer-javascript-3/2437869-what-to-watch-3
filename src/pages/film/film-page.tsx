import { Fragment, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AxiosError } from 'axios';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFilm, getFilmLoadingStatus, getSimilarFilms} from '../../store/film-reducer/film-selectors.ts';
import {getAuthStatus} from '../../store/user-reducer/user-selector.ts';
import {getFavCount} from '../../store/reducer/selectors.ts';
import {
  changeStatus,
  fetchFavoriteFilms,
  fetchFilmByID,
  fetchReviewsByID,
  fetchSimilarByID
} from '../../store/api-actions.ts';
import {setFavoritesCount} from '../../store/actions.ts';
import Spinner from '../../components/spinner/spinner.tsx';
import Logo from '../../components/logo/logo.tsx';
import User from '../../components/user/user.tsx';
import FilmTabs from '../../components/tabs/tabs.tsx';
import FilmList from '../../components/film-list/film-list.tsx';
import Footer from '../../components/footer/footer.tsx';
import {AuthorizationStatus, SIMILAR_FILM_CARD_COUNT} from '../../const.ts';
import PlayerState from '../../components/player-state/player-state.tsx';
import {processErrorHandle} from '../../services/process-error-handle.ts';


function FilmPage() {
  const { id = '' } = useParams();
  const dispatch = useAppDispatch();
  const currentFilm = useAppSelector(getFilm);
  const similarFilms = useAppSelector(getSimilarFilms);
  const authStatus = useAppSelector(getAuthStatus);
  const isFilmLoadingStatus = useAppSelector(getFilmLoadingStatus);
  const favCount = useAppSelector(getFavCount);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(fetchFilmByID(id))
        .catch((err: AxiosError) => processErrorHandle(`Something went wrong. ${err.message}`));
      dispatch(fetchSimilarByID(id))
        .catch((err: AxiosError) => processErrorHandle(`Something went wrong. ${err.message}`));
      dispatch(fetchReviewsByID(id))
        .catch((err: AxiosError) => processErrorHandle(`Something went wrong. ${err.message}`));

      if (authStatus === AuthorizationStatus.Auth) {
        dispatch(fetchFavoriteFilms())
          .catch((err: AxiosError) => processErrorHandle(`Something went wrong. ${err.message}`));
      }
    }

    return () => {
      isMounted = false;
    };
  }, [id, dispatch, authStatus]);

  if (!currentFilm) {
    return null;
  }

  const handleAddClick = () => {
    dispatch(changeStatus({ filmId: currentFilm.id, status: +(!currentFilm.isFavorite) }))
      .catch((err: AxiosError) => processErrorHandle(`Something went wrong. ${err.message}`));
    if (currentFilm.isFavorite) {
      dispatch(setFavoritesCount(favCount - 1));
    } else {
      dispatch(setFavoritesCount(favCount + 1));
    }
  };

  if (isFilmLoadingStatus) {
    return <Spinner />;
  }

  return (
    <Fragment>
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
            <Logo />
            <User />
          </header>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm?.genre}</span>
                <span className="film-card__year">{currentFilm?.released}</span>
              </p>
              <div className="film-card__buttons">
                <Link
                  to={`/player/${currentFilm?.id}`}
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" className="btn--play__icon-item">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </ Link>
                {authStatus === AuthorizationStatus.Auth && (
                  <button
                    className="btn btn--list film-card__button"
                    onClick={handleAddClick}
                  >
                    {currentFilm?.isFavorite
                      ?
                      <PlayerState viewBox={'0 0 18 14'} width={19} height={14} xlinkHref={'#in-list'} state={''} />
                      :
                      <PlayerState viewBox={'0 0 19 20'} width={19} height={20} xlinkHref={'#add'} state={''} />}
                    <span>My list</span>
                    <span className="film-card__count">{favCount}</span>
                  </button>
                )}
                {authStatus === AuthorizationStatus.Auth && (
                  <Link to={`/films/${currentFilm?.id}/review`} className="btn film-card__button">
                    Add review
                  </ Link>
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
                src={currentFilm?.posterImage}
                alt={`${currentFilm?.name} poster`}
              />
            </div>
            <FilmTabs />
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList films={similarFilms.slice(0, SIMILAR_FILM_CARD_COUNT)} />
        </section>
        <Footer />
      </div>
    </Fragment>
  );
}

export default FilmPage;
