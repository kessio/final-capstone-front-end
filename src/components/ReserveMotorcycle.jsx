/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useDispatch } from 'react-redux';
import { reserveItem } from '../redux/reserveItems';

function ReserveMotorcycle({ user_id }) {

  const dispatch = useDispatch();

  const handleReserve = () => {
    dispatch(reserveItem(user_id));
  };
  return (
    <div>
     <button onClick={handleReserve}>Reserve Item</button>
      
    </div>
  );
}

export default ReserveMotorcycle;
