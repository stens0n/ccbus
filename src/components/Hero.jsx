import React from 'react';
import {
    CloudArrowUpIcon,
    LockClosedIcon,
    PaperAirplaneIcon
} from '@heroicons/react/24/solid';

import { Link } from 'react-scroll';

import bgImg from '../assets/dev.png';

const Hero = () => {
  return (
    <div
      name='home'
      className="w-full min-h-screen bg-zinc-300 flex flex-col justify-between pt-4 md:pt-8"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto px-4">
        {/* Text Section */}
        <div className="flex flex-col justify-center md:items-start w-full py-4 md:py-8">
          <p className="text-lg md:text-2xl font-bold">Peabody locally owned</p>
          <h1 className="text-blue-900 py-3 text-4xl md:text-6xl font-bold">
            Web Creation & Hosting
          </h1>
          <p className="text-lg md:text-2xl">
            Does your <strong>small business</strong> need an <strong>affordable website?</strong>
          </p>
          <br />
          <p className="text-base md:text-xl">
            A high-quality website doesn’t have to break the bank. We deliver websites at a fraction of the cost our competitors charge.
          </p>
          <Link 
            to="work" 
            smooth={true} 
            duration={500} 
            className="py-3 px-6 sm:w-[60%] my-4 cursor-pointer bg-blue-500 text-white text-center rounded hover:bg-yellow-600 hover:text-black transition-all duration-300"
          >
            Portfolio
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center py-4 md:py-8">
          <img 
            src={bgImg} 
            className='w-full md:max-w-full h-auto object-contain' 
            alt='Development Illustration' 
          />
        </div>
      </div>

      {/* Services Box */}
      <div className='flex flex-col mt-4 py-4 md:py-8 md:max-w-[760px] md:mx-auto bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl mx-2 md:mx-0 mb-8'>
        <div className='flex flex-wrap justify-around px-4'>
          <p className='flex items-center px-4 py-2 text-slate-700'>
            <CloudArrowUpIcon className='h-6 w-6 text-blue-900 mr-2' /> Website Design
          </p>
          <p className='flex items-center px-4 py-2 text-slate-700'>
            <PaperAirplaneIcon className='h-6 w-6 text-blue-900 mr-2' /> Social Media Management
          </p>
          <p className='flex items-center px-4 py-2 text-slate-700'>
            <LockClosedIcon className='h-6 w-6 text-blue-900 mr-2' /> SSL Security
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
