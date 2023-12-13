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
import {useAppSelector} from '../../hooks';
import Spinner from '../Spinner/spinner.tsx';

function App(props: AppProps) {
  const films = useAppSelector((state)=> state.filteredFilms);
  const isLoading = useAppSelector((state) => state.dataIsLoading);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Main />}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <MyList {...props} films={films}/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Film}
            element={<FilmPage {...props} films={films}/>}
          />
          <Route
            path={AppRoute.SignIn}
            element={<SignIn/>}
          />
          <Route
            path={AppRoute.AddReview}
            element={<AddReview {...props} films={films}/>}
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
