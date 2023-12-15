import {State} from '../state.ts';
import {Reducer} from '../../const.ts';


export const getAvatar = (state: State) => state[Reducer.USER_REDUCER].avatar;
export const getAuthStatus = (state: State) => state[Reducer.USER_REDUCER].authorizationStatus;
