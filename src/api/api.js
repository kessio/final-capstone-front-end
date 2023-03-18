import axios from 'axios';

const baseURL = 'http://localhost:3000/api/v1';

const setAuthToken = ({ headers }) => {
  localStorage.setItem('token', headers.Authorization);
};

const removeAuthToken = () => {
  localStorage.removeItem('token');
};

const createHeaders = () => ({
  'Content-Type': 'application/json',
  Authorization: localStorage.getItem('token'),
});

const createError = (status) => {
  if (status === 401) return { message: 'Unauthorized. Please log in or register.' };
  if (status === 403) return { message: 'Forbidden. You do not have permission to access this resource.' };
  if (status === 404) return { message: 'Not Found. The resource you are looking for does not exist.' };
  if (status >= 500) return { message: 'Something went wrong on our side. Please try again later.' };
  return null; // a default return statement.
};

const api = axios.create({ baseURL });

api.interceptors.request.use((config) => {
  const newConfig = {
    ...config,
    headers: createHeaders(),
  };
  return newConfig;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const err = error.response;
    const status = err ? err.status : 500;
    throw createError(status);
  },
);

export const userAPI = {
  login: async (user) => {
    const res = await api.post('/login', JSON.stringify(user));
    setAuthToken(res);
    return res.data;
  },

  register: async (user) => {
    const res = await api.post('/register', JSON.stringify(user));
    setAuthToken(res);
    return res.data;
  },

  logout: async () => {
    const res = await api.delete('/logout');
    removeAuthToken();
    return res.data.message;
  },

  getAuthUser: async () => {
    const res = await api.get('/users');
    return res.data;
  },
};

export const motorcycleAPI = {
  getAll: async () => {
    const res = await api.get('/all_motorcycles');
    return res.data;
  },

  getAvailable: async () => {
    const res = await api.get('/motorcycles', { headers: null });
    return res.data;
  },

  getById: async (id) => {
    const res = await api.get(`/motorcycles/${id}`);
    return res.data;
  },

  toggleAvailability: async (id, data) => {
    const res = await api.patch(`/motorcycles/${id}/availability`, JSON.stringify(data));
    return res.data;
  },

  add: async (data) => {
    const res = await api.post('/motorcycles', JSON.stringify(data));
    return res.data;
  },
};

export const reservationAPI = {
  reserve: async (userId, data) => {
    const res = await api.post(`/users/${userId}/reservations`, JSON.stringify(data));
    return res.data;
  },

  getAll: async (userId) => {
    const res = await api.get(`/users/${userId}/reservations`);
    return res.data;
  },

  delete: async (userId, id) => {
    const res = await api.delete(`/users/${userId}/reservations/${id}`);
    return res.data;
  },
};
