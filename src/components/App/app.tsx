import Main from '../../pages/MainPage/mainPage.tsx';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from './const.ts';
import {HelmetProvider} from 'react-helmet-async';

import {MainProps} from '../../pages/MainPage/mainProps.tsx';
import MyList from '../../pages/MyList/myList.tsx';
import MoviePage from '../../pages/Film/moviePage.tsx';
import SignIn from '../../pages/SignIn/signIn.tsx';
import AddReview from '../../pages/AddReview/addReview.tsx';
import Player from '../../pages/Player/player.tsx';
import NotFoundScreen from '../../pages/NotFound/notFoundScreen.tsx';
import PrivateRoute from '../PrivateRoute/privateRoute.tsx';

function App(props: MainProps) {
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
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                <MyList/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Film}
            element={<MoviePage/>}
          />
          <Route
            path={AppRoute.SignIn}
            element={<SignIn/>}
          />
          <Route
            path={AppRoute.AddReview}
            element={<AddReview/>}
          />
          <Route
            path={AppRoute.Player}
            element={<Player/>}
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
