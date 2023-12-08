import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/app.tsx';
import {films} from './mocks/films.ts';
import {player} from './mocks/player.ts';
import {reviewsList} from './mocks/reviewsList.ts';
import {store} from './store';
import {Provider} from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        title={'The Grand Budapest Hotel'}
        genre={'Drama'}
        releaseYear={2014}
        films={films}
        player={player}
        review={reviewsList}
      />
    </Provider>
  </React.StrictMode>
);
