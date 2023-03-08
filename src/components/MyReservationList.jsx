import React, { useEffect } from 'react';
import axios from 'axios';
import ReservationItem from './ReservationItem';
import { fetchReservations } from '../store/reservations/actions';

const MyReservations = ({ reservations, dispatch }) => {
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

export default MyReservations;