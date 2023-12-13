import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from './state.ts';
import {AxiosInstance} from 'axios';
import {loadFilms, setFilmsDataLoadingStatus} from './actions.ts';
import {APIRoute} from '../const.ts';
import {FilmCardProps} from '../components/FilmCard/filmCardProps.tsx';

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
