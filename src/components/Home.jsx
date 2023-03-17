/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { availableMotorcycles } from '../redux/Auth/homeSlice';

const Home = () => {
  const bikes = useSelector(availableMotorcycles);
  // const status = useSelector(allStatus);
  const navigate = useNavigate();

  console.log(bikes);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Motorcycle Rentals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {bikes.map((motorcycle) => (
          <div
            key={motorcycle.id}
            className="bg-white rounded-lg p-4 shadow-md flex flex-col justify-between"
            onClick={() => navigate(`/motorcycles-details/${motorcycle.id}`)}
          >
            <img src={motorcycle.image} />
            <div>
              <h2 className="text-2xl font-bold mb-2">{motorcycle.name}</h2>
              <p className="mb-2">
                Rate:
                {motorcycle.model}
                /hr
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
