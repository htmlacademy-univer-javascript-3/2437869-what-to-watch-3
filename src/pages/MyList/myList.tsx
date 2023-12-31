import Footer from '../../components/Footer/footer';
import Logo from '../../components/Logo/logo';
import FilmCard from '../../components/FilmCard/filmCard.tsx';
import {MAXDISPLAYEDFILMS} from '../../components/App/const.ts';
import {FilmCardListProps} from '../../components/FilmList/filmList.tsx';
import {Link} from 'react-router-dom';
import {logOut} from '../../store/api-actions.ts';
import {useAppDispatch} from '../../hooks';


function MyList({films}: FilmCardListProps) {
  const dispatch = useAppDispatch();
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">My list
          <span className="user-page__film-count">{MAXDISPLAYEDFILMS}
          </span>
        </h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </li>
          <li className="user-block__item">
            <Link
              className="user-block__link"
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(logOut());
              }}
              to="/"
            >
              Sign out
            </Link>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {films.map((film) => <FilmCard {...film} key={film.name}/>)}
        </div>
      </section>

      <Footer/>
    </div>
  );
}

export default MyList;
