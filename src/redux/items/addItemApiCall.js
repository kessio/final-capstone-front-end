import axios from 'axios';
import { addItemStart, addItemSuccess, addItemFailure } from './addItemSlice';

const apiUrl = 'http://localhost:3000/api/v1/motorcycles';

const token = localStorage.getItem('token');

export const addItem = (item) => async (dispatch) => {
  dispatch(addItemStart());
  try {
    const response = await axios.post(apiUrl, item, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(addItemSuccess(response.data));
  } catch (error) {
    dispatch(addItemFailure(error.message));
  }
};
