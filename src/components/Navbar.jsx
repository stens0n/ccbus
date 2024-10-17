import React, { useState } from 'react';

import {Link, animateScroll as Scroll} from 'react-scroll';

import  {Bars3Icon, XMarkIcon}  from '@heroicons/react/24/outline';



const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)






  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className="flex items-center justify-between">
              {/* Logo and Company Name */}
              <Link to="home" smooth={true} duration={500}>
              <div className="flex items-center">
                
                <h1 className="text-blue-800 text-3xl font-bold mr-4 sm:text-4xl">Stenson</h1>
                <h1 className="text-blue-800 text-xl font-mono mr-10 my-4">Web Solutions</h1>
              </div>
              </Link>

              {/* Navigation Links */}
              <ul className="hidden md:flex space-x-8">
                <li className="hover:text-blue-500 cursor-pointer transition duration-300">
                  <Link to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li className="hover:text-blue-500 cursor-pointer transition duration-300">
                  <Link to="services" smooth={true} offset={-200} duration={500}>Services</Link>
                </li>
                <li className="hover:text-blue-500 cursor-pointer transition duration-300">
                  <Link to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link>
                </li>
                <li className="hover:text-blue-500 cursor-pointer transition duration-300">
                  <a href="/Work">Work</a>
                </li>
              </ul>
            </div>
            
            <div className='md:hidden mr-4' onClick={handleClick}>
              {!nav ? <Bars3Icon className='w-5'/> : <XMarkIcon className='w-5' />}
            
            </div>
        </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
              <li className='border-b-2 border-zinc-300 w-full'>Home</li>
              <li className='border-b-2 border-zinc-300 w-full'>About</li>
              <li className='border-b-2 border-zinc-300 w-full'>Support</li>
              <li className='border-b-2 border-zinc-300 w-full'>Platforms</li>
              <li className='border-b-2 border-zinc-300 w-full'>Pricing</li>
              <div className='flex flex-col my-4'>
                
                <button className='px-8 py-3'>
                  Free Consultaion
                </button>
              </div>
      </ul>



    </div>
  )
}


export default Navbar


