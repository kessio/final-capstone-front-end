import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations } from '../redux/reservationActions';
import ReservationItem from './ReservationItem';

const MyReservation = () => {
  const reservations = useSelector((state) => state.reservations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  return (
    <div>
      <h1>My Reservations</h1>
      {reservations.map((reservation) => (
        <ReservationItem key={reservation.id} reservation={reservation} />
      ))}
    </div>
  );
};

export default MyReservation;
