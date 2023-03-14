const baseURL = 'http://localhost:3000/api/v1';

const setAuthToken = (headers) => localStorage.setItem('token', headers.Authorization);
const unsetAuthToken = () => localStorage.removeItem('token');

const loginOptions = (user) => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(user),
});

const registerOptions = (user) => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(user),
});

const logoutOptions = () => ({
  method: 'DELETE',
  headers: { Authorization: localStorage.getItem('token') },
});

const api = {
  register: async (user) => {
    const response = await fetch(`${baseURL}/register`, {
      ...registerOptions({ user }),
    });

    const { status: code } = response;

    if (code === 200) setAuthToken(response);

    const data = await response.json();
    return data;
  },
  login: async (user) => {
    const response = await fetch(`${baseURL}/login`, {
      ...loginOptions({ user }),
    });

    const { status: code } = response;

    if (code === 200) setAuthToken(response);

    const data = await response.json();
    return data;
  },
  logout: async () => {
    const response = await fetch(`${baseURL}/logout`, {
      ...logoutOptions(),
    });

    const { status: code } = response;

    if (code === 200) {
      unsetAuthToken();
      const data = await response.json();
      return {
        user: {},
        status: 'successful',
        message: data.message,
      };
    }
    if (code === 500) {
      unsetAuthToken();
      return {
        user: {},
        status: 'Unauthorized, You must Login or Register',
        message: 'Session for User has expired',
      };
    }

    return null;
  },
  fetchAuthUser: async () => {
    const response = await fetch(`${baseURL}/users`, {
      headers: { Authorization: localStorage.getItem('token') },
    });

    const { status: code } = response;

    if (code === 401) {
      unsetAuthToken();
      return {
        user: {},
        status: 'expired',
        error: 'Unauthorized, You must Login or Register',
        message: 'Session for User has expired',
      };
    }

    if (code === 200) {
      const currentUser = await response.json();
      return {
        user: currentUser,
        status: 'successfull',
        error: null,
        message: 'User is authenticated',
      };
    }
    return null;
  },
};

export default api;
