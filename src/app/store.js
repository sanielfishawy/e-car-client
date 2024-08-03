import { configureStore } from '@reduxjs/toolkit';
import tuningReducer from '../features/tuning/tuningSlice';

export const store = configureStore({
  reducer: {
    tuning: tuningReducer,
  },
});
