import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// Corrected import path
import StensonWebLogo from '../assets/StensonWebLogo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='w-screen h-[100px] z-50 bg-gray-300 md:fixed md:top-0 md:left-0 drop-shadow-lg'>
      <div className='px-6 flex justify-between items-center w-full h-full'>
        <div className="flex items-center">
          {/* Logo Image */}
          <Link to="home" smooth={true} duration={500}>
            <div className="flex items-center cursor-pointer">
              <img 
                src={StensonWebLogo} 
                alt="Stenson Web Solutions Logo" 
                className="h-52 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-10 ml-10">
            <li className="hover:text-blue-500 cursor-pointer transition duration-300">
              <Link to="home" smooth={true} duration={500}>Home</Link>
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition duration-300">
              <Link to="services" smooth={true} offset={-200} duration={500}>Services</Link>
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition duration-300">
              <Link to="pricing" smooth={true} offset={-50} duration={500}>Packages</Link>
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition duration-300">
              <Link to="work" smooth={true} offset={-50} duration={500}>Portfolio</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div className='md:hidden mr-4' onClick={handleClick}>
          {!nav ? <Bars3Icon className='w-6 h-6' /> : <XMarkIcon className='w-6 h-6' />}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-24 left-0 w-full bg-zinc-200 px-8'}>
        <li className='border-b-2 border-zinc-300 w-full py-4'>
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li className='border-b-2 border-zinc-300 w-full py-4'>
          <Link onClick={handleClick} to="services" smooth={true} offset={-200} duration={500}>Services</Link>
        </li>
        <li className='border-b-2 border-zinc-300 w-full py-4'>
          <Link onClick={handleClick} to="pricing" smooth={true} offset={-50} duration={500}>Packages</Link>
        </li>
        <li className='border-b-2 border-zinc-300 w-full py-4'>
          <Link onClick={handleClick} to="work" smooth={true} offset={-50} duration={500}>Portfolio</Link>
        </li>
        <div className='flex flex-col my-4'>
          <button className='px-8 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300'>
            Free Consultation
          </button>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
