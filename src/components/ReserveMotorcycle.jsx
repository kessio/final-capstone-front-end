/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DatePicker } from 'antd';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import dayjs from 'dayjs';
import {
  allMessages,
  reserveMotorcycle,
  allStatus,
} from '../redux/reservationSlice';
import useToken from '../redux/Auth/useToken';
import { availableMotorcycles, motorcycle } from '../redux/Auth/homeSlice';
import { authenticatedUser } from '../redux/Auth/authSlice';

const ReserveMotorcycle = () => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  console.log(startTime, endTime);
  const motorcycles = useSelector(availableMotorcycles);
  const currentUser = useSelector(authenticatedUser);
  console.log(currentUser);
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
    if (message === 'Motorcycle has been successfully booked') {
      navigate('/reservation');
    }
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

  return (
    <div className="flex w-full">
      <form className="w-full max-w-md mx-auto p-4 my-8 bg-white rounded-lg shadow-lg">
        <div className="mb-4">
          <DatePicker
            placeholder="Start date"
            placement="topLeft"
            size="large"
            format="YYYY/MM/DD"
            allowClear
            disabledDate={(current) => current && current < moment().endOf('day')}
            onchange={(date) => setStartTime(handleDateFormat(date))}
          />
          <DatePicker
            placeholder="End date"
            placement="topLeft"
            size="large"
            format="YYYY/MM/DD"
            allowClear
            disabledDate={(current) => current && current < moment().endOf('day')}
            onchange={(date) => setEndTime(handleDateFormat(date))}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="motorcycle" className="block font-medium text-sm mb-1">
            Select a motorcycle
          </label>
          <select
            name="motorcycle"
            id="car"
            className="focus:ring-indigo-500 focus:border-indigo-500 h-full px-3 pt-2 pb-3 w-full bg-white border border-gray-300 rounded-md"
            value={selectedMotorcycle?.toString()}
            onChange={handleMotorcycleId}
            required
          >
            {motorcycles.map(({ id: motorcycleId, name }) => (
              <option value={motorcycleId.toString()} key={motorcycleId}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          onClick={handleReserve}
          className="bg-amber rounded-md py-2 px-4 flex justify-center items-center w-full capitalize text-white font-medium transition duration-300 ease-in-out hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={status === 'loading'}
        >
          <span>Add Motorcycle</span>
        </button>
      </form>
    </div>
  );
};

export default ReserveMotorcycle;
