import {AuthorizationStatus} from '../../components/App/const.ts';
import {createSlice} from '@reduxjs/toolkit';
import {checkAuthAction, logIn, logOut} from '../api-actions.ts';
import {dropToken, saveToken} from '../../services/token.ts';
import {UserState} from '../../const.ts';

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.NoAuth,
  avatar: null,
};

export const userReducer = createSlice({
  name: 'USER_REDUCER',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logOut.fulfilled, (state) => {
        dropToken();
        state.avatar = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        saveToken(action.payload.token);
        state.avatar = action.payload.avatarUrl;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.avatar = action.payload.avatarUrl;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});
