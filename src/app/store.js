import { configureStore } from '@reduxjs/toolkit';
import tuningReducer from '../features/tuning/tuningSlice';
import navigationReducer from '../features/navigation/navigationSlice';

export const store = configureStore({
  reducer: {
    tuning: tuningReducer,
    navigation: navigationReducer,
  },
});
