import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

const SHOW_MOTORCYCLES = 'SHOW_MOTORCYCLES';
const SHOW_MOTORCYCLE = 'SHOW_MOTORCYCLE';
const GET_OWNER_MOTORCYCLES = 'GET_OWNER_MOTORCYCLES';
const ADD_MOTORCYCLE = 'ADD_MOTORCYCLE';
const TOGGLE_MOTORCYCLE_AVAILABLITY = 'TOGGLE_MOTORCYCLE_AVAILABLITY';

const initialState = {
  availableMotorcycles: [],
  motorcycle: {},
  allMotorcycles: [],
  status: 'idle',
  error: null,
};

export const getAvailableMotorcycle = createAsyncThunk(SHOW_MOTORCYCLES, async () => {
  try {
    return await api.fetchAvailableMotorcycles();
  } catch (error) {
    return error.message;
  }
});
export const getMotorcycle = createAsyncThunk(SHOW_MOTORCYCLE, async (id) => {
  try {
    return await api.fetchMotorcycles(id);
  } catch (error) {
    return error.message;
  }
});

export const addMotorcycle = createAsyncThunk(ADD_MOTORCYCLE, async (motor) => {
  try {
    return await api.addMotorcycle(motor);
  } catch (error) {
    return error.message;
  }
});

export const getAllMotorcycles = createAsyncThunk(GET_OWNER_MOTORCYCLES, async () => {
  try {
    return await api.fetchAllMotorcycles();
  } catch (error) {
    return error.message;
  }
});

export const toggleAvailability = createAsyncThunk(
  TOGGLE_MOTORCYCLE_AVAILABLITY,
  async ({ motorId, motor }) => {
    try {
      return await api.toggleMotorcycleAvailability(motorId, motor);
    } catch (error) {
      return error.message;
    }
  },
);

const motorcycleSlice = createSlice({
  name: 'motorcycles',
  initialState,
  reducers: {
    resetMotorcycleState: (state) => ({
      ...state,
      motorcycle: {},
      status: 'idle',
      message: '',
      error: null,
    }),
    resetAllMotorcycleSState: (state) => ({
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
      .addCase(getAvailableMotorcycle.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getAvailableMotorcycle.fulfilled, (state, action) => ({
        ...state,
        availableMotorcycles: action.payload,
        status: 'successfull',
      }))
      .addCase(getAvailableMotorcycle.rejected, (state, action) => ({
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
        motorcycle: action.payload,
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
          ...(action.payload.data.available && action.payload.status === 201
            ? [action.payload.data]
            : []),
          ...state.availableMotorcycles,
        ],
        allMotorcycles: [
          ...(action.payload.status === 201 ? [action.payload.data] : []),
          ...state.allMotorcycles,
        ],
        message: action.payload.message,
        status: action.payload.status === 200 ? 'successfull' : 'failed',
      }))
      .addCase(addMotorcycle.rejected, (state, action) => ({
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
          ...state.availableMotorcycles.filter(
            ({ id }) => id !== action.payload.data.id,
          ),
        ],
        allMotorcycles: [
          action.payload.data,
          ...state.allMotorcycles.filter(({ id }) => id !== action.payload.data.id),
        ],
        message: action.payload.message,
        status: 'successfull',
      }))
      .addCase(toggleAvailability.rejected, (state, action) => ({
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
        status: 'successfull',
      }))
      .addCase(getAllMotorcycles.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const {
  resetMotorcycleState,
  resetAllMotorcycleSState,
  setMessageEmpty,
  setStatusIdle,
} = motorcycleSlice.actions;
export const selectavailableMotorcycles = (state) => state.motorcycles.availableMotorcycles;
export const allStatus = (state) => state.motorcycles.status;
export const allMessages = (state) => state.motorcycles.message;
export const motorcycle = (state) => state.motorcycles.motorcycle;
export const allMotorcycles = (state) => state.motorcycles.allMotorcycles;

export default motorcycleSlice.reducer;
