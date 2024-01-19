import { createAction } from '@reduxjs/toolkit';
import {Genre} from '../const.ts';


export const changeGenre = createAction<Genre>('main/changeGenre');
export const setFilmCardCount = createAction('main/setFilmCardCount');
export const setDataIsLoading = createAction<boolean>('main/setError');
export const setError = createAction<string | null>('setDataIsLoading');
export const setFavoritesCount = createAction<number>('main/setFavoritesCount');
