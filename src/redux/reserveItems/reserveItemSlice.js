import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/v1';
const token = localStorage.getItem('token');

export const reserveItem = createAsyncThunk(
  'item/reserveItem',
  async ({ userId, reservationData }) => {
    const url = `${API_BASE_URL}/users/${userId}/reservations`;
    const headers = { Authorization: `Bearer ${token}` };
    const response = await axios.post(url, reservationData, { headers });
    return response.data;
  }
);

const ReserveItemSlice = createSlice({
  name: 'item',
  initialState: {
    item: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(reserveItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(reserveItem.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.item = action.payload;
      })
      .addCase(reserveItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ReserveItemSlice.reducer;