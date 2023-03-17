import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'http://localhost:3000/api/v1/motorcycles';

export const getMotorcycles = createAsyncThunk('motorcycle/getMotorcycles', async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data.motorcycles);
  return data;
});

const motorcyclesSlice = createSlice({
  name: 'motorcycle',
  initialState: [],
  reducers: {
    Motorcycles(state, action) {
      state.push(action.payload);
    },
  },
  extraReducers: {
    [getMotorcycles.fulfilled]: (state, action) => action.payload,
  },
});

export const { Motorcycles } = motorcyclesSlice.actions;
export default motorcyclesSlice.reducer;
