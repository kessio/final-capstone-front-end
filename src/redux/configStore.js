import { configureStore } from '@reduxjs/toolkit';

const rootReducer = () => {
// Add reducer here

};

const store = configureStore({
  reducer: {
    rootReducer,
  },
});

export default store;
