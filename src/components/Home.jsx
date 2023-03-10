import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getMotorcycles } from '../redux/motorcycles/motorcycles';

function Home() {
  const dispatch = useDispatch();
  const motorcycle = useSelector((state) => state.motorcycles)

  useEffect(() => {
    dispatch(getMotorcycles())
  }, [])


  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full'>
      <div className='flex shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer'>
    {motorcycle && motorcycle.message ? (
      motorcycle.message.map((url) => (
          <img src={url} key={url} alt='dogs' className='object-cover w-full h-48'/>
      ))
    ) : (
      <p>Loading...</p>
    )}
      </div>
  </div>

  )
}

export default Home