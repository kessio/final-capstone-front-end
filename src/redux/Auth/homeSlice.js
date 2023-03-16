import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

const initialState = {
  availableMotorcycles: [],
  motorcycles: {},
  allMotorcycles: [],
  status: 'idle',
  error: null,
};

export const getAvailableMotorcycles = createAsyncThunk('home/getAvailableMotorcyles', async () => {
  try {
    return await api.fetchAvailableMotorcycles();
  } catch (error) {
    return error.message;
  }
});

export const getMotorcycle = createAsyncThunk('home/getMotorcycle', async (id) => {
  try {
    return await api.fetchMotorcycle(id);
  } catch (error) {
    return error.message;
  }
});

export const addMotorcycle = createAsyncThunk('home/addMotorcycle', async (motor) => {
  try {
    return await api.addMotorcycle(motor);
  } catch (error) {
    return error.message;
  }
});

export const getAllMotorcycles = createAsyncThunk('home/getAllMotorcycles', async () => {
  try {
    return await api.getAllMotorcycles();
  } catch (error) {
    return error.message;
  }
});

export const toggleAvailability = createAsyncThunk('home/toggleAvailability', async ({ id, availability }) => {
  const motor = { isAvailable: availability };
  try {
    return await api.toggleMotorcycleAvailability(id, motor);
  } catch (error) {
    return error.message;
  }
});

const homeSlice = createSlice({
  name: 'Motorcycles',
  initialState,
  reducers: {
    resetMotorState: (state) => ({
      ...state,
      motorcycles: {},
      status: 'idle',
      message: '',
      error: null,
    }),
    resetAllMotorcycleState: (state) => ({
      ...state,
      allMotorcycles: [],
      status: 'idle',
      message: '',
      error: null,
    }),
    setMessageEmpty: (state, action) => ({
      ...state,
      message: action.payload,
    }),
    setStatusIdle: (state) => ({
      ...state,
      status: 'idle',
      message: '',
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAvailableMotorcycles.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getAvailableMotorcycles.fulfilled, (state, action) => ({
        ...state,
        availableMotorcycles: action.payload,
        status: 'Successful',
      }))
      .addCase(getAvailableMotorcycles.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(getMotorcycle.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getMotorcycle.fulfilled, (state, action) => ({
        ...state,
        motorcyle: action.payload,
        status: 'successfull',
      }))
      .addCase(getMotorcycle.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(addMotorcycle.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(addMotorcycle.fulfilled, (state, action) => ({
        ...state,
        availableMotorcycles: [
          ...(action.payload.data.available
            && action.payload.status === 201 ? [action.payload.data] : []),
          ...state.availableMotorcycles,
        ],
        allMotorcycles: [
          ...(action.payload.status === 201 ? [action.payload.data] : []),
          ...state.allMotorcycles,
        ],
        message: action.payload.message,
        status: action.payload.status === 200 ? 'successful' : 'failed',
      }))
      .addCase(addMotorcycle.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(getAllMotorcycles.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getAllMotorcycles.fulfilled, (state, action) => ({
        ...state,
        allMotorcycles: action.payload,
        status: 'successful',
      }))
      .addCase(getAllMotorcycles.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(toggleAvailability.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(toggleAvailability.fulfilled, (state, action) => ({
        ...state,
        availableMotorcycles: [
          ...(action.payload.data.available ? [action.payload.data] : []),
          ...state.availableMotorcycles.filter(({ id }) => id !== action.payload.data.id),
        ],
        allMotorcycles: [
          action.payload.data,
          ...state.allMotorcycles.filter(({ id }) => id !== action.payload.data.id),
        ],
        message: action.payload.message,
        status: 'successful',
      }))
      .addCase(toggleAvailability.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const {
  resetMotorState, resetAllMotorcycleState, setMessageEmpty, setStatusIdle,
} = homeSlice.actions;
export const availableMotorcycles = (state) => state.motorcycles.availableMotorcycles;
export const allStatus = (state) => state.motorcycles.status;
export const allMessages = (state) => state.motorcycles.message;
export const motorcycle = (state) => state.motorcycles.motorcycles;
export const allMotorcycle = (state) => state.motorcycles.allMotorcycles;

export default homeSlice.reducer;
