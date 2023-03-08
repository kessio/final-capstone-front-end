import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    </div>
  );
};

export default MyReservations;