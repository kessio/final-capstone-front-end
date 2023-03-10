import { configureStore } from '@reduxjs/toolkit';
import motorcyclesReducers from './motorcycles/motorcycles'
import addItemReducers from './addItem/addItem';


const store = configureStore({
  reducer: {
    motorcycles: motorcyclesReducers,
    addItem: addItemReducers
  },
});

export default store;
