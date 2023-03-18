import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import DetailsPage from './components/detailsPage';
import ReserveMotorcycle from './components/ReserveMotorcycle';
import MyReservations from './components/MyReservations';
import Signup from './components/user_auth/Signup';
import Login from './components/user_auth/Login';
import { getAvailableMotorcycle } from './redux/Auth/homeSlice';
import useToken from './redux/Auth/useToken';
import { getAuthenticatedUser } from './redux/Auth/authSlice';

function App() {
  const isTokenSet = useToken();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAvailableMotorcycle());
  }, [dispatch]);

  useEffect(() => {
    if (isTokenSet) dispatch(getAuthenticatedUser());
  });

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="motorcycles-details/:id" element={<DetailsPage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/reserve/:id" element={<ReserveMotorcycle />} />
        <Route path="/myreservations" element={<MyReservations />} />
      </Routes>
    </div>
  );
}

export default App;
