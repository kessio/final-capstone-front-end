import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from './reservationReducer';

const store = configureStore({
  reducer: reservationReducer,
});

export default store;
