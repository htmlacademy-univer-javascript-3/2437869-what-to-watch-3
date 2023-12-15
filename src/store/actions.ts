import {createAction} from '@reduxjs/toolkit';
import {Genres} from '../mocks/genresInfo.ts';
import {FilmCardProps} from '../components/FilmCard/filmCardProps.tsx';
import {AppRoute, AuthorizationStatus} from '../components/App/const.ts';
import {Review, UserData} from '../const.ts';


export const changeGenre = createAction('main/changeGenre',
  (genre: Genres) => ({payload: genre}));

export const setCardsCount = createAction('main/setFilmCardCount');

export const loadFilms = createAction<FilmCardProps[]>('data/loadFilms');

export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('main/setError');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');

export const saveUser = createAction<UserData>('user/saveUser');


export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');

export const loadFilm = createAction<FilmCardProps>('film/loadFilm');

export const loadReviews = createAction<Review[]>('film/loadReviews');

export const loadSimilarFilms = createAction<FilmCardProps[]>('film/loadSimilar');
