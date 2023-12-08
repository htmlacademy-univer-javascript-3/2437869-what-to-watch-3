import {createAction} from '@reduxjs/toolkit';
import {Genres} from '../mocks/genresInfo.ts';


export const changeGenre = createAction(
  'main/changeGenre',
  (genre: Genres) => ({payload: genre}));

export const getGenreFilms = createAction('main/getGenreFilms');
