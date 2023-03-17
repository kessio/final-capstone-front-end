import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import {
  allMessages,
  reserveMotorcycle,
  allStatus,
} from '../redux/reservationSlice';
import useToken from '../redux/Auth/useToken';
import { availableMotorcycles, motorcycle } from '../redux/auth/homeSlice';
import { authenticatedUser } from '../redux/Auth/authSlice';

const ReserveMotorcycle = () => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const currentUser = useSelector(authenticatedUser);
  const message = useSelector(allMessages);
  const status = useSelector(allStatus);
  const selectedMotorcycle = useSelector(motorcycle);
  const [motorcycleId, setMotorcycleId] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isTokenSet = useToken();

  const handleDateFormat = (date) => moment(dayjs(date).toDate()).format('YYYY-MM-DD');

  const handleMotorcycleId = (motorcycleId) => setMotorcycleId(+motorcycleId);

  const handleReserve = () => {
    const reservation = {
      start_time: startTime,
      end_time: endTime,
      motorcycle_id: motorcycleId,
    };

    const reservationObject = {
      reservation,
      userId: currentUser.id,
    };
    dispatch(reserveMotorcycle(reservationObject));
  };

  const navigateReservation = () => {
    if (message === 'Motorcycle has been successfully booked') { navigate('/reservation'); }
  };

  const checkAuthUser = () => {
    if (!isTokenSet) navigate('/login');
  };

  const handleSelectedMotorcycle = () => {
    if (selectedMotorcycle) setMotorcycleId(selectedMotorcycle);
  };

  useEffect(() => {
    handleSelectedMotorcycle();
    navigateReservation();
    checkAuthUser();
  }, [message, isTokenSet, selectedMotorcycle]);
};
