import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = "https://dog.ceo/api/breeds/image/random/9";

export const getMotorcycles = createAsyncThunk('motorcycle/getMotorcycles', async () => {
    const response = await fetch(apiUrl)
    const data = await response.json();
    console.log(data)
    return data
})

const motorcyclesSlice = createSlice({
    name: 'motorcycle',
    initialState: [],
    reducers: {
        Motorcycles(state, action){
            state.push(action.payload);
        },
    },
    extraReducers: {
        [getMotorcycles.fulfilled]: (state,action) => action.payload,
    },
});

export const { Motorcycles } = motorcyclesSlice.actions;
export default motorcyclesSlice.reducer
   

