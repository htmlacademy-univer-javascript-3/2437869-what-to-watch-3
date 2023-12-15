import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from './state.ts';
import {AxiosInstance} from 'axios';
import {
  loadFilm,
  loadFilms, loadReviews, loadSimilarFilms, redirectToRoute,
  requireAuthorization,
  setAuthorizationStatus,
  setError,
  setFilmsDataLoadingStatus
} from './actions.ts';
import {APIRoute, AuthData, Review, TIMEOUT_SHOW_ERROR, UserData, UserReview} from '../const.ts';
import {FilmCardProps} from '../components/FilmCard/filmCardProps.tsx';
import {AppRoute, AuthorizationStatus} from '../components/App/const.ts';
import {dropToken, saveToken} from '../services/token.ts';


export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmsDataLoadingStatus(true));
    const {data} = await api.get<FilmCardProps[]>(APIRoute.Films);
    dispatch(setFilmsDataLoadingStatus(false));
    dispatch(loadFilms(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logIn = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, {
      email,
      password,
    });
    saveToken(data.token);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.MyList));
  }
);

export const logOut = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  }
);

export const clearError = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'clearError',
  (_arg, { dispatch }) => {
    setTimeout(() => {
      dispatch(setError(null));
    }, TIMEOUT_SHOW_ERROR);
  }
);

export const fetchFilmByID = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFilmById',
  async (filmId: string, { dispatch, extra: api }) => {
    const { data } = await api.get<FilmCardProps>(`${APIRoute.Films}/${filmId}`);
    dispatch(loadFilm(data));
  });

export const fetchReviewsByID = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchReviewsById',
  async (filmId: string, { dispatch, extra: api }) => {
    const { data } = await api.get<Review[]>(`${APIRoute.Reviews}/${filmId}`);
    dispatch(loadReviews(data));
  });

export const fetchSimilarByID = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchSimilarById',
  async (filmId: string, { dispatch, extra: api }) => {
    const { data } = await api.get<FilmCardProps[]>(`${APIRoute.Films}/${filmId}${APIRoute.SimilarFilms}`);
    dispatch(loadSimilarFilms(data));
  });

export const postReview = createAsyncThunk<void, UserReview, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postFilmReview',
  async ({ comment, rating, filmId }, { dispatch, extra: api }) => {
    dispatch(setFilmsDataLoadingStatus(true));
    await api.post<UserReview>(`${APIRoute.Reviews}/${filmId}`, { comment, rating, });
    dispatch(setFilmsDataLoadingStatus(false));
  }
);
