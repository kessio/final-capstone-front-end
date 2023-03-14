import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from 'redux-logger';
import authSlice from './Auth/authSlice';
import motorcyclesReducers from './motorcycles/motorcycles';
import addItemReducers from './addItem/addItem'

// root Reducer
const rootReducer = combineReducers({
  // Add reducer here
  auth: authSlice,
  motorcycles: motorcyclesReducers,
  addItem: addItemReducers

});

// Redux store
const store = configureStore({
  reducer: {
    rootReducer,
  },
  middleware: [...getDefaultMiddleware(), logger],
});

export default store;
