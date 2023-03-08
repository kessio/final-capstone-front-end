import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    rootReducer
  },
});

const rootReducer = () => {
// Add reducer here

}

export default store;