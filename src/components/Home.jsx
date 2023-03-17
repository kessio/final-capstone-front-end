/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import bike from '../images/bike.png';
import { availableMotorcycles } from '../redux/Auth/homeSlice';

const Home = () => {
  const bikes = useSelector(availableMotorcycles);
  // const status = useSelector(allStatus);
  const navigate = useNavigate();

  console.log(bikes);

  return (
    <div
      className="min-h-screen flex flex-col items-center bg-gray-100
    @screen lg:ml-56 mt-0"
    >
      <div className="bg-gray-100 w-full mb-10">
        <div
          className="
        w-full bg-cover bg-no-repeat h-96
        align-middle justify-center
        flex-col
        flex items-center text-center"
          style={{ backgroundImage: `url(${bike})` }}
        >
          <h1 className="text-white text-5xl font-bold ">welcome to Tagie</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {bikes.map((motorcycle) => (
          <div
            key={motorcycle.id}
            className="bg-white rounded-lg p-4 shadow-md flex flex-col justify-between cursor-pointer"
            onClick={() => navigate(`/motorcycles-details/${motorcycle.id}`)}
          >
            <img className="w-48 mx-auto" src={motorcycle.image} />
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
