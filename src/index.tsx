import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/app.tsx';
import {filmsInfo} from './mocks/films.ts';
import {player} from './mocks/player.ts';
import {reviewsList} from './mocks/reviewsList.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      title={'The Grand Budapest Hotel'}
      genre={'Drama'}
      releaseYear={2014}
      films={filmsInfo}
      player={player}
      review={reviewsList}
    />
  </React.StrictMode>
);
