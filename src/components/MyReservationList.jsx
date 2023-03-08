import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReservationItem from './ReservationItem';

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios.get('/reservations')
      .then((response) => {
        setReservations(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
