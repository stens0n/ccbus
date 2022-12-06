import React from 'react';

import  {Bars3Icon}  from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
              <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Stenson</h1>
              <ul className='hidden md:flex'> 
              <li>Home</li>
              <li>About</li>
              <li>Support</li>
              <li>Platforms</li>
              <li>Pricing</li>
              </ul>
            </div>
        </div>

        <Bars3Icon className='w-5' />
    </div>
  )
}


export default Navbar


