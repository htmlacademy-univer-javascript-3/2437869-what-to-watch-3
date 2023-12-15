import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/app.tsx';
import {store} from './store';
import {Provider} from 'react-redux';
import {checkAuthAction} from './store/api-actions.ts';
import ErrorMessage from './components/ErrorMessage/errorMessage.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(checkAuthAction());


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App/>
    </Provider>
  </React.StrictMode>
);
