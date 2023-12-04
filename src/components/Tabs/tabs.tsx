import { useState } from 'react';
import Overview from './Overview/overview.tsx';
import Details from './Details/details.tsx';
import Reviews from './Reviews/reviews.tsx';
import {FilmCardProps} from '../FilmCard/filmCardProps.tsx';
import {reviewsList} from '../../mocks/reviewsList.ts';

type FilmTabsProps = {
  films: FilmCardProps[];
}

function FilmTabs(props: FilmTabsProps) {
  const [tab, setTab] = useState('Overview');
  const getTab = (tabFilm: string) => {
    if (tabFilm === 'Overview') {
      return <Overview films={props.films} />;
    }
    if (tabFilm === 'Details') {
      return <Details films={props.films} />;
    }
    if (tabFilm === 'Reviews') {
      return <Reviews reviews={reviewsList} />;
    }
  };

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
      {getTab(tab)}
    </div>
  );
}

export default FilmTabs;
