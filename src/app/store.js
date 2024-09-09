import { configureStore } from '@reduxjs/toolkit';
import tuningReducer from '../features/tuning/tuningSlice';
import navigationReducer from '../features/navigation/navigationSlice';
import speedoReducer from '../features/speedo/speedoSlice';

export const store = configureStore({
  reducer: {
    tuning: tuningReducer,
    navigation: navigationReducer,
    speedo: speedoReducer,
  },
});
