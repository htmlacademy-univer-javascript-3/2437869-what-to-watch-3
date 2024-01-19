import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAuthStatus} from '../../store/user-reducer/user-selector.ts';
import {getFavFilms} from '../../store/reducer/selectors.ts';
import {fetchFavoriteFilms} from '../../store/api-actions.ts';
import Logo from '../../components/logo/logo.tsx';
import User from '../../components/user/user.tsx';
import FilmCard from '../../components/film-card/film-card.tsx';
import Footer from '../../components/footer/footer.tsx';
import {processErrorHandle} from '../../services/process-error-handle.ts';
import {AuthorizationStatus} from '../../const.ts';

function MyListPage(): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);
  const favoriteFilms = useAppSelector(getFavFilms);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    if (isMounted && authStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilms())
        .catch((err: AxiosError) => processErrorHandle(`Something went wrong. ${err.message}`));
      navigate('/mylist');
    }

    return () => {
      isMounted = false;
    };
  }, [authStatus, dispatch, navigate]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">{favoriteFilms.length}</span>
        </h1>
        <User />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          {favoriteFilms.map((film) => <FilmCard key={film.id} film={film} />)}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default MyListPage;
