import { combineReducers } from '@reduxjs/toolkit';
import {Reducer} from '../const.ts';
import {filmReducer} from './film-reducer/film-reducer.ts';
import {mainReducer} from './reducer/reducer.ts';
import {userReducer} from './user-reducer/user-reducer.tsx';


const reducer = combineReducers({
  [Reducer.FILM_REDUCER]: filmReducer.reducer,
  [Reducer.MAIN_REDUCER]: mainReducer.reducer,
  [Reducer.USER_REDUCER]: userReducer.reducer,
});

export { reducer };
