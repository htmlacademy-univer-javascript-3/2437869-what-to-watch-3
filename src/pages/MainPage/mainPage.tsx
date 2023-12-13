import Logo from '../../components/Logo/logo.tsx';
import GenreList from '../../components/Genres/genreList.tsx';
import Footer from '../../components/Footer/footer.tsx';
import {MAXDISPLAYEDFILMS} from '../../components/App/const.ts';
import FilmList from '../../components/FilmList/filmList.tsx';
import {useAppSelector} from '../../hooks';
import ShowMore from '../../components/ShowMore/showMore.tsx';
import Spinner from '../../components/Spinner/spinner.tsx';
import {store} from '../../store';
import {fetchFilmsAction} from '../../store/api-actions.ts';
import {useEffect} from 'react';

function Main(): JSX.Element {
  useEffect(() => {
    store.dispatch(fetchFilmsAction());
  },[]);
  const filmsGenre = useAppSelector((state) => state.films);
  const cardsCount = useAppSelector((state) => state.cardsCount);
  const isLoading = useAppSelector((state) => state.dataIsLoading);
  if (isLoading) {
    return (
      <Spinner />
    );
  }
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="props.title"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo/>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">props.title</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">props.genre</span>
                <span className="film-card__year">props.releaseYear</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{MAXDISPLAYEDFILMS}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList/>

          <div className="catalog__films-list">
            <FilmList films={filmsGenre.slice(0, cardsCount)} />
          </div>
          {cardsCount !== filmsGenre.length && <ShowMore/>}
        </section>

        <Footer/>
      </div>


    </>
  );
}

export default Main;
