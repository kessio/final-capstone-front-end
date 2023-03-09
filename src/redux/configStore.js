import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './Auth/auth';

// root Reducer
const rootReducer = combineReducers({
  // Add reducer here
  auth: authReducer,

});

const store = configureStore({
  reducer: {
    rootReducer,
  },
});

export default store;
