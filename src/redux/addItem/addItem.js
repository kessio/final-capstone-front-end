import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const apiUrl = 'http://localhost:3000/api/v1/motorcycles'

export const postData = createAsyncThunk('form/postData', async  (formData) =>{
    
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData
      });
      console.log("Formdata:", formData)
      const data = await response.json();
      console.log(data)
      return data;
    }
  );

  export const addItemSlice = createSlice({
    name: 'form',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(postData.fulfilled, (state, action) => {
          return action.payload;
        });
    },
  });
  
export const { addItem } = addItemSlice.actions;
export default addItemSlice.reducer;
