'use client';

import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from './types'
import { fetchLogin, fetchSignup } from './asyncActions'
import { RootState } from '../store';
import { Status } from '../types';

const initialState: AuthState = {
  data: null,
  status: Status.LOADING
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state) => {
      localStorage.removeItem('email');
      state.data = null;
    }
  },

  extraReducers: (builder) => {
    //login
    builder.addCase(fetchLogin.pending, (state) => {
      state.status = Status.LOADING;
    })

    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = Status.SUCCESS;
    })

    builder.addCase(fetchLogin.rejected, (state) => {
      state.data = null;
      state.status = Status.ERROR;
    })

    //register
    builder.addCase(fetchSignup.pending, (state) => {
      state.data = null;
      state.status = Status.LOADING;
    })

    builder.addCase(fetchSignup.fulfilled, (state, action) => {
      state.data = action.payload;
      if (action.payload.warningMessage) {
        state.status = Status.ERROR;
      } else {
        state.status = Status.SUCCESS;
      }
    })

    builder.addCase(fetchSignup.rejected, (state) => {
      state.data = null;
      state.status = Status.ERROR;
    })
  }
})

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const {logOut} = authSlice.actions;

export const selectIsAuth = (state: RootState) => Boolean(state.auth.data);

export default authSlice.reducer;