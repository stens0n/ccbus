import React from 'react'
import {
    CloudArrowUpIcon,
    LockClosedIcon,
    PaperAirplaneIcon,
    ServerStackIcon
} from '@heroicons/react/24/solid';

import { Link, Element } from 'react-scroll';

import bgImg from '../assets/dev.png'

const Hero = () => {
  return (
    <div name='home' className="w-full h-screen bg-zinc-300 flex flex-col justify-between">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto " >
            <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
                <p className="text-2xl">Peabody locally owned</p>
                <h1 className="text-blue-800 py-3 text-5xl md:text-7xl font-bold">Web Creation & Hosting</h1>
                <p className="text-2xl">Does your <strong>small business</strong> need an <strong>affordable website?</strong></p>
                <br />
                <p className="text-xl">A high-quality website doesn’t have to break the bank. We deliver websites at a fraction of the cost our competitors charge.
                </p>
                <Link 
                to="work" 
                smooth={true} 
                duration={500} 
                className="py-3 px-6 sm:w-[60%] my-4 cursor-pointer bg-blue-500 text-white text-center hover:bg-yellow-600 hover:text-black transition-all duration-300"
                >
                Portfolio
                </Link>

            </div>
            <div>
                <img src={bgImg} className='w-auto h-[400px]' alt='/' />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 
            rounded-xl text-center shadow-xl'>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-700'><CloudArrowUpIcon className='h-6 text-blue-900' /> Website Design</p>
                    <p className='flex px-4 py-2 text-slate-700'><PaperAirplaneIcon className='h-6 text-blue-900' /> SEO</p>
                    <p className='flex px-4 py-2 text-slate-700'><LockClosedIcon className='h-6 text-blue-900' /> SSL security</p>
                    
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Hero

