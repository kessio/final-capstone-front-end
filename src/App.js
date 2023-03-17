import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ReserveMotorcycle from './components/ReserveMotorcycle';
import MyReservations from './components/MyReservations';
import AddMotorcycle from './components/AddMotorcycle';
import Signup from './components/user_auth/Signup';
import DeleteMotorcycle from './components/DeleteMotorcycle';
import Login from './components/user_auth/Login';
import { getAvailableMotorcycle } from './redux/Auth/homeSlice';
import useToken from './redux/Auth/useToken';
import { getAuthenticatedUser } from './redux/Auth/authSlice';

function App() {
  const isTokenSet = useToken();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAvailableMotorcycle());
  }, []);

  useEffect(() => {
    if (isTokenSet) dispatch(getAuthenticatedUser());
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/reserve" element={<ReserveMotorcycle />} />
        <Route path="/myreservations" element={<MyReservations />} />
        <Route path="/additem" element={<AddMotorcycle />} />
        <Route path="/deleteitem" element={<DeleteMotorcycle />} />
      </Routes>
    </div>
  );
}

export default App;
