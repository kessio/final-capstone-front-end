import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toggleAvailability } from './Auth/homeSlice';
import { reservationAPI } from '../api/api';

// Actions
const RESERVE_MOTORCYCLE = 'RESERVE_MOTORCYCLE';
const GET_RESERVATIONS = 'GET_RESERVATIONS';
const DELETE_RESERVATION = 'DELETE_RESERVATION';
const initialState = {
  reservations: [],
  status: 'idle',
  message: '',
  error: null,
};
// Thunks
export const reserveMotorcycle = createAsyncThunk(
  RESERVE_MOTORCYCLE,
  async ({ userId, reservation }) => {
    try {
      return await reservationAPI.reserve(userId, reservation);
    } catch (error) {
      return error.message;
    }
  },
);
export const getReservations = createAsyncThunk(
  GET_RESERVATIONS,
  async (userId) => {
    try {
      return await reservationAPI.getAll(userId);
    } catch (error) {
      return error.message;
    }
  },
);
export const deleteReservation = createAsyncThunk(
  DELETE_RESERVATION,
  async ({ userId, reservationId }) => {
    try {
      return await reservationAPI.delete(userId, reservationId);
    } catch (error) {
      return error.message;
    }
  },
);

// Reducer
const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    resetReservationState: (state) => ({
      ...state,
      reservations: [],
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
      .addCase(reserveMotorcycle.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(reserveMotorcycle.fulfilled, (state, action) => ({
        ...state,
        reservations: [
          ...(action.payload.status === 201 ? [action.payload.data] : []),
          ...state.reservations,
        ],
        message: action.payload.message,
        status: action.payload.status === 201 ? 'succeeded' : 'failed',
        error: action.payload.error,
      }))
      .addCase(reserveMotorcycle.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(getReservations.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getReservations.fulfilled, (state, action) => ({
        ...state,
        reservations: action.payload,
        message: action.payload.message,
        status: 'succeeded',
      }))
      .addCase(getReservations.rejected, (state, action) => ({
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
        reservations: [
          ...state.reservations.map((reservation) => (reservation.motorcycle.id
            === action.payload.data.id
            ? {
              ...reservation,
              motorcycle: { ...reservation.motorcycle, available: action.payload.data.available },
            }
            : reservation)),
        ],
        status: 'succeeded',
        message: `${action.payload.data.name} is ${action.payload.data.available ? 'available' : 'unavailable'}`,
      }))
      .addCase(toggleAvailability.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(deleteReservation.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(deleteReservation.fulfilled, (state, action) => ({
        ...state,
        reservations: [
          ...state.reservations.filter(
            (reservation) => reservation.id !== action.payload.data.id,
          ),
        ],
        message: action.payload.message,
        status: 'succeeded',
      }))
      .addCase(deleteReservation.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const motorcycleReservations = (state) => state.reservations.reservations;
export const { resetReservationState, setMessageEmpty, setStatusIdle } = reservationsSlice.actions;
export const allStatus = (state) => state.reservations.status;
export const allMessages = (state) => state.reservations.message;

export default reservationsSlice.reducer;
