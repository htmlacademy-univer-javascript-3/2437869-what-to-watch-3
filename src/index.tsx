import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import {store} from './store';
import {Provider} from 'react-redux';
import {checkAuthorization, fetchFilms, fetchPromoFilm} from './store/api-actions.ts';
import ErrorMessage from './components/error-message/error-message.tsx';
import {ToastContainer} from 'react-toastify';
import {AxiosError} from 'axios';
import {BrowserRouter} from 'react-router-dom';
import {processErrorHandle} from './services/process-error-handle.ts';
import { HelmetProvider } from 'react-helmet-async';

store.dispatch(fetchFilms())
  .catch((err: AxiosError) => processErrorHandle(`Something went wrong. ${err.message}`));
store.dispatch(checkAuthorization())
  .catch((err: AxiosError) => processErrorHandle(`Something went wrong. ${err.message}`));
store.dispatch(fetchPromoFilm())
  .catch((err: AxiosError) => processErrorHandle(`Something went wrong. ${err.message}`));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <ToastContainer />
          <ErrorMessage />
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
