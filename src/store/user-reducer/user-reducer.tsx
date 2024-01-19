import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {AuthorizationStatus, LogInState, Reducer, UserState} from '../../const.ts';
import {checkAuthorization, logIn, logOut} from '../api-actions.ts';
import {dropToken, saveToken} from '../../services/token.ts';


const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.NoAuth,
  avatar: null,
  loginState: LogInState.NoError,
};

export const userReducer = createSlice({
  name: Reducer.USER_REDUCER,
  initialState,
  reducers: {
    setLoginState: (state, action: PayloadAction<LogInState>) => {
      state.loginState = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(logOut.fulfilled, (state) => {
        dropToken();
        state.avatar = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.loginState = LogInState.NoError;
        saveToken(action.payload.token);
        state.avatar = action.payload.avatarUrl;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthorization.fulfilled, (state, action) => {
        state.avatar = action.payload.avatarUrl;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthorization.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});

export const {setLoginState} = userReducer.actions;
