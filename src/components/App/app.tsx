import Main from '../../pages/MainPage/mainPage.tsx';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from './const.ts';
import {HelmetProvider} from 'react-helmet-async';

import {AppProps} from '../../pages/MainPage/appProps.tsx';
import MyList from '../../pages/MyList/myList.tsx';
import FilmPage from '../../pages/Film/filmPage.tsx';
import SignIn from '../../pages/SignIn/signIn.tsx';
import AddReview from '../../pages/AddReview/addReview.tsx';
import Player from '../../pages/Player/player.tsx';
import NotFoundScreen from '../../pages/NotFound/notFoundScreen.tsx';
import PrivateRoute from '../PrivateRoute/privateRoute.tsx';
import {myListInfo} from '../../mocks/myListInfo.ts';

function App(props: AppProps) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Main {...props} />}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <MyList films={myListInfo}/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Film}
            element={<FilmPage {...props}/>}
          />
          <Route
            path={AppRoute.SignIn}
            element={<SignIn/>}
          />
          <Route
            path={AppRoute.AddReview}
            element={<AddReview {...props}/>}
          />
          <Route
            path={AppRoute.Player}
            element={<Player {...props.player}/>}
          />
          <Route
            path={'*'}
            element={<NotFoundScreen/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>

  );
}

export default App;
