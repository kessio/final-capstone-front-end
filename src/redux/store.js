import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from './reservationsReducer';

const store = configureStore({
  reducer: reservationReducer,
});

export default store;
