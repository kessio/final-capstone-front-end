import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authToken from '../Auth/useToken';

const apiUrl = 'http://localhost:3000/api/v1/motorcycles';

export const postData = createAsyncThunk('form/postData', async (formData) => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    body: formData,
  });
  console.log('Formdata:', formData);
  const data = await response.json();
  return data;
});

export const addItemSlice = createSlice({
  name: 'form',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postData.fulfilled, (state, action) => action.payload);
  },
});

export const { addItem } = addItemSlice.actions;
export default addItemSlice.reducer;
