import { Fragment, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AxiosError } from 'axios';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFavCount, getFilmCardCount, getGenreFilmList, getPromo} from '../../store/reducer/selectors.ts';
import {getAuthStatus} from '../../store/user-reducer/user-selector.ts';
import {changePromoStatus, fetchFavoriteFilms} from '../../store/api-actions.ts';
import {setFavoritesCount} from '../../store/actions.ts';
import Logo from '../../components/logo/logo.tsx';
import User from '../../components/user/user.tsx';
import GenreList from '../../components/genre/genre-list.tsx';
import FilmList from '../../components/film-list/film-list.tsx';
import Footer from '../../components/footer/footer.tsx';
import PlayerState from '../../components/player-state/player-state.tsx';
import ShowMore from '../../components/show-more/show-more.tsx';
import {processErrorHandle} from '../../services/process-error-handle.ts';
import {AuthorizationStatus} from '../../const.ts';

import {Review} from '../../const.ts';


export type AppProps = {
  title: string;
  genre: string;
  releaseYear: number;
  review: Review[];
};

function MainPage() {
  const promoFilm = useAppSelector(getPromo);
  const filmsGenre = useAppSelector(getGenreFilmList);
  const filmCardCount = useAppSelector(getFilmCardCount);
  const favCount = useAppSelector(getFavCount);
  const authStatus = useAppSelector(getAuthStatus);
  const dispatch = useAppDispatch();

  const isMountedRef = useRef(false);

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }

    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilms())
        .catch((err: AxiosError) => processErrorHandle(`Something went wrong. ${err.message}`));
    }
  }, [authStatus, dispatch]);

  if (!promoFilm) {
    return null;
  }

  const handleAddClick = () => {
    dispatch(changePromoStatus({ filmId: promoFilm.id, status: +(!promoFilm?.isFavorite) }))
      .catch((err: AxiosError) => processErrorHandle(`Something went wrong. ${err.message}`));
    if (promoFilm?.isFavorite) {
      dispatch(setFavoritesCount(favCount - 1));
    } else {
      dispatch(setFavoritesCount(favCount + 1));
    }
  };

  return (
    <Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src={promoFilm?.backgroundImage}
            alt={promoFilm?.name}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <Logo />
          <User />
        </header>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                className="film-card__poster--image-item"
                src={promoFilm?.posterImage}
                alt={promoFilm?.name}
              />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm?.genre}</span>
                <span className="film-card__year">{promoFilm?.released}</span>
              </p>
              <div className="film-card__buttons">
                <Link
                  to={`/player/${promoFilm?.id}`}
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg className="btn--play__icon-item" viewBox="0 0 19 19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </Link>
                {authStatus === AuthorizationStatus.Auth && (
                  <button
                    className="btn btn--list film-card__button"
                    onClick={handleAddClick}
                  >
                    {promoFilm?.isFavorite
                      ?
                      <PlayerState viewBox={'0 0 18 14'} width={19} height={14} xlinkHref={'#in-list'} state={''} />
                      :
                      <PlayerState viewBox={'0 0 19 20'} width={19} height={20} xlinkHref={'#add'} state={''} />}
                    <span>My list</span>
                    <span className="film-card__count">{favCount}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList />
          <div className="catalog__films-list">
            <FilmList films={filmsGenre.slice(0, filmCardCount)} />
          </div>
          {filmCardCount !== filmsGenre.length && <ShowMore />}
        </section>
        <Footer />
      </div>
    </Fragment>
  );
}

export default MainPage;
