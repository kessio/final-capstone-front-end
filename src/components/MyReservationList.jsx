import React, { useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchReservations } from '../store/actions';
import ReservationItem from './ReservationItem';

const MyReservationsList = ({ reservations, fetchReservations }) => {
  useEffect(() => {
    fetchReservations();
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

MyReservationsList.propTypes = {
  reservations: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      item: PropTypes.string.isRequired,
    })
  ).isRequired,
  fetchReservations: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  reservations: state.reservations,
});

const mapDispatchToProps = (dispatch) => ({
  fetchReservations: () => dispatch(fetchReservations()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyReservationsList);
