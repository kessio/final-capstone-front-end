import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { motorcycle, getMotorcycle } from '../redux/Auth/homeSlice';

const DetailsPage = () => {
  const { id } = useParams();
  const motorcycleDetails = useSelector(motorcycle);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleReserve = () => {
    navigate('/reserve');
  };

  useEffect(() => {
    dispatch(getMotorcycle(id));
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col max-w-4xl px-4">
        <div className="flex justify-center mb-4">
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%',
          }}
          >
            <div style={{ width: '50%', margin: 'auto' }}>
              <img
                className="rounded-lg w-full"
                src={motorcycleDetails.image}
                alt={motorcycleDetails.name}
              />
            </div>
            <div
              className="bg-white rounded-lg shadow p-6"
              style={{ position: 'sticky', top: '0', width: '30%' }}
            >
              <h1 className="text-3xl font-bold mb-4">{motorcycleDetails.name}</h1>
              <div className="mb-4">
                <h2 className="text-lg font-medium">Price:</h2>
                <p>{motorcycleDetails.price}</p>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-medium">Model:</h2>
                <p>{motorcycleDetails.model}</p>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-medium">Description:</h2>
                <p>{motorcycleDetails.description}</p>
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleReserve} type="button">
                Reserve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
