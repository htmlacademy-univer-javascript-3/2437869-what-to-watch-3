import {createAction} from '@reduxjs/toolkit';
import {Genres} from '../mocks/genresInfo.ts';
import {FilmCardProps} from '../components/FilmCard/filmCardProps.tsx';


export const changeGenre = createAction('main/changeGenre',
  (genre: Genres) => ({payload: genre}));

export const setCardsCount = createAction('main/setFilmCardCount');

export const loadFilms = createAction<FilmCardProps[]>('data/loadFilms');

export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');

