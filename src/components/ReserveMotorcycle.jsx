/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import fetchAuthUser from './userid/fetchAuthUser';
import { reserveItem } from '../redux/reserveItems/reserveItemSlice';

function useUser() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/Login');
      return;
    }

    fetchAuthUser()
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [navigate]);

  return user;
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const handleChange = (event) => setValue(event.target.value);
  return [value, handleChange];
}

function ReserveMotorcycle() {
  const { id } = useParams();
  const user = useUser();
  const dispatch = useDispatch();

  const [user_id, setUserId] = useInput('');
  const [motorcycle_id, setMotorcycleId] = useInput('');
  const [start_time, setStartTime] = useInput('');
  const [end_time, setEndTime] = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(reserveItem({ user_id, motorcycle_id, start_time, end_time }));
    setUserId('');
    setMotorcycleId('');
    setStartTime('');
    setEndTime('');
  };

  if (!user) {
    return null;
  }
  

  //const handleReserve = () => {
    //dispatch(reserveItem(userId));
 // };
  return (
    <div>
       <h2>User ID: {user.id}</h2>
       <h2>motorcycle id: {id}</h2>
       <div className="md:grid md:grid-cols-3 md:gap-6 md:ml-60">
        <div className="mt-5 md:col-span-2 md:mt-5">
          <form onSubmit={handleSubmit}>
            <div className="shadow sm:overflow-hidden sm:rounded-md md:mt-10">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                   
                   <label htmlFor='user_id'>
                   <input
                        type="text"
                        name="user_id"
                        id="user_id"
                        value={user_id}
                        onChange={(event) => setUserId(event.target.value)}
                        required
                        />

                   </label>
                   <label htmlFor='motorcycle_id'>
                   <input
                        type="text"
                        name="motorcycle_id"
                        id="motorcycle_id"
                        value={motorcycle_id}
                        onChange={(event) => setMotorcycleId(event.target.value)}
                        required
                        />

                   </label>

                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="start_time"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Start Time
                    </label>
                    <div className="mt-2 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="start_time"
                        id="start_time"
                        value={start_time}
                        onChange={(event) => setStartTime(event.target.value)}
                        required
                        className="block w-full flex-1
                    rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset
                  ring-gray-300 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="end_time"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      End Time
                    </label>
                    <div className="mt-2 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="end_time"
                        id="end_time"
                        value={end_time}
                        onChange={(event) => setEndTime(event.target.value)}
                        required
                        className="block w-full flex-1
                    rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset
                  ring-gray-300 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Reserve</button>

                </div>
              </div>
              </div>
            </form>
          </div>
        </div>
      
    </div>
  );
}

export default ReserveMotorcycle;
