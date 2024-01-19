import { Route, Routes } from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {getError, getLoading} from '../../store/reducer/selectors.ts';
import MainPage from '../../pages/main/main-page.tsx';
import SignInPage from '../../pages/sign-in/sign-in-page.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import MyListPage from '../../pages/my-list/my-list-page.tsx';
import FilmPage from '../../pages/film/film-page.tsx';
import AddReviewPage from '../../pages/add-review/add-review-page.tsx';
import PlayerPage from '../../pages/player/player-page.tsx';
import NotFoundScreen from '../../pages/not-found/not-found-screen.tsx';
import Spinner from '../spinner/spinner.tsx';
import ErrorMessage from '../error-message/error-message.tsx';
import {AppRoute} from '../../const.ts';

function App(): JSX.Element {
  const isLoading = useAppSelector(getLoading);
  const isError = useAppSelector(getError);

  if (isLoading) {
    return (
      <Spinner />
    );
  }

  if (isError) {
    return (
      <ErrorMessage />
    );
  }

  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainPage />}
      />
      <Route
        path={AppRoute.SignIn}
        element={<SignInPage />}
      />
      <Route
        path={AppRoute.MyList}
        element={
          <PrivateRoute>
            <MyListPage />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Film}
        element={<FilmPage />}
      />
      <Route
        path={AppRoute.AddReview}
        element={<AddReviewPage />}
      />
      <Route
        path={AppRoute.Player}
        element={<PlayerPage />}
      />
      <Route
        path="*"
        element={<NotFoundScreen />}
      />
    </Routes>
  );
}

export default App;
