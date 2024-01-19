import { createSlice } from '@reduxjs/toolkit';
import {changeStatus, fetchFilmByID, fetchReviewsByID, fetchSimilarByID} from '../api-actions.ts';
import {FilmState, Reducer} from '../../const.ts';

const initialState: FilmState = {
  film: null,
  reviews: [],
  similarFilms: [],
  isFilmLoading: false,
};

export const filmReducer = createSlice({
  name: Reducer.FILM_REDUCER,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilmByID.pending, (state) => {
        state.isFilmLoading = true;
      })
      .addCase(fetchFilmByID.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isFilmLoading = false;
      })
      .addCase(fetchReviewsByID.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchSimilarByID.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(changeStatus.fulfilled, (state, action) => {
        if (state.film?.id === action.payload.id) {
          state.film.isFavorite = action.payload.isFavorite;
        }
      });
  },
});
