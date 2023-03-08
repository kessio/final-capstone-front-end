import React from 'react';

const ReservationItem = ({ reservation }) => (
  <div>
    <p>
      Date:
      {reservation.date}
    </p>
    <p>
      City:
      {reservation.city}
    </p>
    <p>
      Item:
      {reservation.item}
    </p>
  </div>
);

export default ReservationItem;
