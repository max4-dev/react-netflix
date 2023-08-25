'use client';

import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { CategoriesState } from './types';

const initialState: CategoriesState = {
  active: null,
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setActive: (state, data) => {
      state.active = data.payload;
    }
  },
});

export const { setActive } = categoriesSlice.actions;

export const selectIsAuth = (state: RootState) => Boolean(state.categories.data);

export default categoriesSlice.reducer;