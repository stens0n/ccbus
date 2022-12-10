import React from 'react';

import { 
    PhoneIcon, ArrowSmallRightIcon
} from '@heroicons/react/24/outline';

import {
    ChevronUpIcon, StarIcon
} from '@heroicons/react/24/solid';

import supImg from '../assets/Peabody-MA.jpg';


const Support = () => {
  return (
    <div name='services' className="w-full mt-24 ">
        <div className='w-full h-[700px] bg-gray-800/90 absolute'>
            <img className="w-full h-full object-cover mix-blend-overlay" src={supImg} alt="/"/>
        </div>

        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
                <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Services</h2>
                <h3 className="text-5xl font-bold py-6 text-center">Web Design With a Mission</h3>
                <p className='py-4 text-2xl text-slate-300'>A company proudly founded in Peabody, we're here to serve the Web Development needs of Individuals and Businesses.
                We provide premium, modern website design, and hosting at competetive rates. 
                </p>
            </div>


            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-36 sm:pt-64 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <PhoneIcon className='w-16 p-4 bg-blue-700 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Web Design</h3>
                      <p className='text-gray-600 text-xl'>An amazing looking website that will enhance a brands credibility and reputation. All websites will be Desktop and Mobile responsive.</p>
                  </div>
                  <div className='pl-8 py-4'>
                      <p className='flex items-center text-blue-700'>Contact Us <ArrowSmallRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <ChevronUpIcon className='w-16 p-4 bg-blue-700 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                  </div>
                  <div className='pl-8 py-4'>
                      <p className='flex items-center text-blue-700'>Contact Us <ArrowSmallRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <StarIcon className='w-16 p-4 bg-blue-700 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                  </div>
                  <div className='pl-8 py-4'>
                      <p className='flex items-center text-blue-700'>Contact Us <ArrowSmallRightIcon className='w-5 ml-2' /></p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Support