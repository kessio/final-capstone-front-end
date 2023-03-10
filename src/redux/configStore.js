import { configureStore } from '@reduxjs/toolkit';
import motorcyclesReducers from './motorcycles/motorcycles'


const store = configureStore({
  reducer: {
    motorcycles: motorcyclesReducers,
  },
});

export default store;
