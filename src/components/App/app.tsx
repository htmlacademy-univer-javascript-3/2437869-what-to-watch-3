import Main from '../../pages/MainPage/mainPage.tsx';
import {Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import MyList from '../../pages/MyList/myList.tsx';
import FilmPage from '../../pages/Film/filmPage.tsx';
import SignIn from '../../pages/SignIn/signIn.tsx';
import AddReview from '../../pages/AddReview/addReview.tsx';
import Player from '../../pages/Player/player.tsx';
import NotFoundScreen from '../../pages/NotFound/notFoundScreen.tsx';
import PrivateRoute from '../PrivateRoute/privateRoute.tsx';
import {useAppSelector} from '../../hooks';
import Spinner from '../Spinner/spinner.tsx';
import {AppRoute} from './const.ts';
import HistoryRouter from '../HistoryRoute/historyRoute.tsx';
import browserHistory from '../../browserHistory.ts';

function App() {
  const films = useAppSelector((state)=> state.filteredFilms);
  const isLoading = useAppSelector((state) => state.dataIsLoading);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Main />}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute>
                <MyList films={films}/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Film}
            element={<FilmPage films={films}/>}
          />
          <Route
            path={AppRoute.SignIn}
            element={<SignIn/>}
          />
          <Route
            path={AppRoute.AddReview}
            element={<AddReview films={films}/>}
          />
          <Route
            path={AppRoute.Player}
            element={<Player video={''} poster={''}/>}
          />
          <Route
            path={'*'}
            element={<NotFoundScreen/>}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
