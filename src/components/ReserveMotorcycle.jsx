/* eslint-disable react/no-unescaped-entities */
import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import fetchAuthUser from './userid/fetchAuthUser';
import { useNavigate, useParams } from 'react-router-dom';


function ReserveMotorcycle() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
    const navigate = useNavigate();
  
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/Login');
        return;
      }
  
      fetchAuthUser()
        .then(data => {
          setUser(data);
        })
        .catch(error => {
          console.log(error);
        });
    }, [navigate]);
  
    if (!user) {
      return null;
    }

  //const dispatch = useDispatch();

  //const handleReserve = () => {
    //dispatch(reserveItem(userId));
 // };
  return (
    <div>
       <h2>User ID: {user.id}</h2>
       <h2>motorcycle id: {id}</h2>
       <div className="col-span-3 sm:col-span-2">
          <label htmlFor="model" className="block text-sm font-medium leading-6 text-gray-900">Model</label>
          <div className="mt-2 flex rounded-md shadow-sm">
            <input 
            type="text" 
            name="model" 
            id="model" 
            value={model}
            onChange={(event) => setModel(event.target.value)}
            required className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
     <button >Reserve Item</button>
      
    </div>
  );
}

export default ReserveMotorcycle;
