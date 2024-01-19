import {State} from '../state.ts';
import {Reducer} from '../../const.ts';


export const getCurrentGenre = (state: State) => state[Reducer.MAIN_REDUCER].genre;
export const getFilmList = (state: State) => state[Reducer.MAIN_REDUCER].films;
export const getPromo = (state: State) => state[Reducer.MAIN_REDUCER].promo;
export const getGenreFilmList = (state: State) => state[Reducer.MAIN_REDUCER].sortedFilms;
export const getFilmCardCount = (state: State) => state[Reducer.MAIN_REDUCER].filmCardCount;
export const getError = (state: State) => state[Reducer.MAIN_REDUCER].error;
export const getLoading = (state: State) => state[Reducer.MAIN_REDUCER].dataIsLoading;
export const getFavCount = (state: State) => state[Reducer.MAIN_REDUCER].favoriteCount;
export const getFavFilms = (state: State) => state[Reducer.MAIN_REDUCER].favoriteFilms;
