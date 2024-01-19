import { createSlice } from '@reduxjs/toolkit';
import {AppState, Genre, Reducer, VISIBLE_FILM_CARD_COUNT} from '../../const.ts';
import {changeGenre, setError, setFavoritesCount, setFilmCardCount} from '../actions.ts';
import {changePromoStatus, fetchFavoriteFilms, fetchFilms, fetchPromoFilm} from '../api-actions.ts';


const initialState: AppState = {
  films: [],
  sortedFilms: [],
  genre: Genre.All,
  filmCardCount: 0,
  dataIsLoading: false,
  error: null,
  promo: null,
  favoriteFilms: [],
  favoriteCount: 0,
};

export const mainReducer = createSlice({
  name: Reducer.MAIN_REDUCER,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changeGenre, (state, action) => {
        state.genre = action.payload;
        state.sortedFilms = (state.genre === Genre.All) ? state.films : state.films.filter((film) => film.genre === state.genre);
        state.filmCardCount = Math.min(state.sortedFilms.length, 8);
      })
      .addCase(setFilmCardCount, (state) => {
        const currentGenreFilms = state.sortedFilms.length;
        state.filmCardCount = (state.filmCardCount + VISIBLE_FILM_CARD_COUNT > currentGenreFilms) ? currentGenreFilms : state.filmCardCount + VISIBLE_FILM_CARD_COUNT;
      })
      .addCase(setError, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchFilms.pending, (state) => {
        state.dataIsLoading = true;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.films = action.payload;
        state.sortedFilms = action.payload;
        state.filmCardCount = Math.min(state.films.length, 8);
        state.dataIsLoading = false;
      })
      .addCase(fetchPromoFilm.fulfilled, (state, action) => {
        state.promo = action.payload;
      })
      .addCase(fetchFavoriteFilms.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.favoriteCount = state.favoriteFilms.length;
        state.dataIsLoading = false;
      })
      .addCase(changePromoStatus.fulfilled, (state, action) => {
        state.promo = action.payload;
      })
      .addCase(setFavoritesCount, (state, action) => {
        state.favoriteCount = action.payload;
      });
  },
});
