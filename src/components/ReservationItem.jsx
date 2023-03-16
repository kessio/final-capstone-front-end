import React from 'react';
import PropTypes from 'prop-types';

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

ReservationItem.propTypes = {
  reservation: PropTypes.shape({
    date: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReservationItem;
