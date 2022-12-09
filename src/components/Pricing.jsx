import React from 'react'
import {CheckIcon} from '@heroicons/react/24/solid'

const Pricing = () => {
  return (
    <div className="w-full text-white my-24">
        <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>

        <div className="max-w-[1240px] mx-auto py-12">

            <div className="text-center py-8 text-slate-300">
                <h2 className="text-3xl uppercase">Pricing</h2>
                <h3 className='text-5xl font-bold text-white py-8'>Find The Right Package for you.</h3>
                <p className="text-3xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, distinctio animi dolorum dolor accusamus corporis. Rerum tenetur earum necessitatibus sunt?</p>
            </div>

            <div className="grid md:grid-cols-2">

                <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl">
                    <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">Basic Website</span>
                    <div>
                        <p className="text-6xl font-bold py-4 flex">$299<span className='text-xl text-slate-500 flex flex-col justify-end'>/per project</span></p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <div className="text-2xl py-8 text-slate-500">
                        <p><CheckIcon className='w-7 mr-5 text-green-600' />Lorem, ipsum dolor.</p>
                        <p><CheckIcon className='w-7 mr-5 text-green-600' />Lorem, ipsum dolor.</p>
                        <p><CheckIcon className='w-7 mr-5 text-green-600' />Lorem, ipsum dolor.</p>
                        <p><CheckIcon className='w-7 mr-5 text-green-600' />Lorem, ipsum dolor.</p>
                        <p><CheckIcon className='w-7 mr-5 text-green-600' />Lorem, ipsum dolor.</p>
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing