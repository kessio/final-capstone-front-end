import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addItemStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    addItemSuccess: (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    },
    addItemFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addItemStart, addItemSuccess, addItemFailure } = itemsSlice.actions;

export default itemsSlice.reducer;

