import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/v1/motorcycles';

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  const response = await axios.get(apiUrl);
  console.log('myresponse is:', response.data);
  return response.data;
});

export const displayItemsSlice = createSlice({
  name: 'items',
  initialState: {
    itemsList: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.itemsList = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default displayItemsSlice.reducer;
