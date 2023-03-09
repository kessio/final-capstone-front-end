import axios from 'axios';

const END_POINT = 'http://localhost:3000/api/v1';

// eslint-disable-next-line import/prefer-default-export
export const baseApi = axios.create({
  baseURL: `${END_POINT}`,
});

// error handling
const handleError = (error) => {
  if (error.response) {
    switch (error.response.status) {
      case 400:
        console.error('Bad Request');
        break;
      case 401:
        console.error('Unauthorized');
        break;
      case 403:
        console.error('Forbidden');
        break;
      case 404:
        console.error('Not Found');
        break;
      default:
        console.error('Server Error');
    }
  } else {
    console.error('Network Error');
  }
};

// function that allows a user to register
export const signup = async (newuser) => {
  try {
    const useradd = { user: newuser };
    const response = await baseApi.post('/auth/signup', useradd);
    const authToken = response.headers.authorization;
    const currentUser = response.data;
    return { authToken, currentUser };
  } catch (error) {
    handleError(error);
  }
  return newuser;
};

export const login = async (newuser) => {
  const useradd = { user: newuser };
  const response = await baseApi.post('/auth/login', useradd);
  const authToken = response.headers.authorization;
  const currentUser = response.data.data;
  return { authToken, currentUser };
};

export const logout = async () => {
  const token = localStorage.getItem('token');
  await baseApi.delete('/auth/logout', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
  });
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return token;
};
