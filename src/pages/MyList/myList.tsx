import Footer from '../../components/Footer/footer';
import Logo from '../../components/logo/logo';
import FilmCard from '../../components/FilmCard/filmCard.tsx';
import { myListInfo } from './myListInfo.ts';

export const FILMCOUNT = 9;

function MyList(){
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{FILMCOUNT}</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {myListInfo.map((film) => <FilmCard title={film.title} imagePath={film.imagePath} key={film.title} />)}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
