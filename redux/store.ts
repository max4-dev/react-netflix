'use client';

import { configureStore } from '@reduxjs/toolkit';
import auth from './auth/slice';
import films from './films/slice';
import categories from './categories/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    auth,
    films,
    categories
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;