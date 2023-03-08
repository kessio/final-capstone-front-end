import axios from 'axios';

export const fetchReservations = () => async (dispatch) => {
  try {
    const response = await axios.get('/reservations');
    dispatch({ type: 'FETCH_RESERVATIONS', payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const addReservation = (reservation) => async (dispatch) => {
  try {
    const response = await axios.post('/reservations', { reservation });
    dispatch({ type: 'ADD_RESERVATION', payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const addReservation = (reservation) => async (dispatch) => {
    try {
      const response = await axios.post('/reservations', { reservation });
      dispatch({ type: 'ADD_RESERVATION', payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
  
  