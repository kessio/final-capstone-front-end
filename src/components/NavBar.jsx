import React, {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const [nav, setNav] = useState(false);
  return (
   <div className=''>
    <div className='md:hidden flex justify-between m-2'>
      <div onClick={() => setNav(!nav)}><FaBars size={30} color={'green'} /></div>
      <div>LOGO</div>
    </div>
    <div className='hidden md:block fixed top-0 bottom-0 p-2 w-[200px] overflow-y-auto text-center bg-white shadow h-screen border-r-3 border-gray-400'>
    <ul className='mt-40 font-montserrat font-bold text-left text-font-color pl-2'>
      <li className='my-7'><NavLink to="/">HOME</NavLink></li>
      <li className='my-7'><NavLink to="/reserve">RESERVE BIKE</NavLink></li>
      <li className='my-7'><NavLink to="/myreservations">MY RESERVATIONS</NavLink></li>
      <li className='my-7'><NavLink to="/additem">ADD MOTORBIKE</NavLink></li>
      <li className='my-7'><NavLink to="/deleteitem">DELETE MOTORBIKE</NavLink></li>
    </ul>
    </div>
    {nav && (
    <div className='fixed top-0 bottom-0 p-2 w-screen overflow-y-auto text-center bg-white shadow h-screen'>
      <div onClick={() => setNav(!nav)} className='m-4'><FaTimes size={30} color={'green'} /></div>
    <ul className='flex-col font-montserrat font-bold text-font-color'>
      <li onClick={() => setNav(!nav)} className='my-5'><NavLink to="/">HOME</NavLink></li>
      <li onClick={() => setNav(!nav)} className='my-5'><NavLink to="/reserve">RESERVE BIKE</NavLink></li>
      <li onClick={() => setNav(!nav)} className='my-5'><NavLink to="/myreservations">MY RESERVATIONS</NavLink></li>
      <li onClick={() => setNav(!nav)} className='my-5'><NavLink to="/additem">ADD MOTORBIKE</NavLink></li>
      <li onClick={() => setNav(!nav)} className='my-5'><NavLink to="/deleteitem">DELETE MOTORBIKE</NavLink></li>
    </ul>
    </div>
    )}
   
    
   </div>
  )
}

export default NavBar