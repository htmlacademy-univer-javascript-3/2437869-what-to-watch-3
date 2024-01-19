import { useState } from 'react';
import Overview from './overview/overview.tsx';
import Details from './details/details.tsx';
import Reviews from './reviews/reviews.tsx';
import {useAppSelector} from '../../hooks';
import {getFilm, getReviews} from '../../store/film-reducer/film-selectors.ts';
import {Film, Review} from '../../const.ts';

const getTab = (tabFilm: 'Overview' | 'Details' | 'Reviews', currentFilm: Film | null, reviews: Review[]) => {
  if (tabFilm === 'Overview') {
    return <Overview currentFilm={currentFilm} />;
  }
  if (tabFilm === 'Details') {
    return <Details currentFilm={currentFilm} />;
  }
  if (tabFilm === 'Reviews') {
    return <Reviews reviews={reviews} />;
  }
};
function FilmTabs() {
  const [tab, setTab] = useState<'Overview' | 'Details' | 'Reviews'>('Overview');
  const reviews = useAppSelector(getReviews);
  const currentFilm = useAppSelector(getFilm);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${tab === 'Overview' ? ' film-nav__item--active' : ''}`}>
            <div onClick={() => setTab('Overview')} className="film-nav__link">{'Overview'}</div>
          </li>
          <li className={`film-nav__item ${tab === 'Details' ? ' film-nav__item--active' : ''}`}>
            <div onClick={() => setTab('Details')} className="film-nav__link">{'Details'}</div>
          </li>
          <li className={`film-nav__item ${tab === 'Reviews' ? ' film-nav__item--active' : ''}`}>
            <div onClick={() => setTab('Reviews')} className="film-nav__link">{'Reviews'}</div>
          </li>
        </ul>
      </nav>
      {getTab(tab, currentFilm, reviews)}
    </div>
  );
}

export default FilmTabs;
