import React from 'react'
import {CheckIcon} from '@heroicons/react/24/solid'

const Pricing = () => {
  return (
    <div name='pricing' className="w-full text-white my-24">
        <div className="w-full h-[800px] bg-blue-600 absolute mix-blend-overlay"></div>

        <div className="max-w-[1240px] mx-auto py-12">

            <div className="text-center py-8 text-slate-300">
                <h2 className="text-3xl uppercase">Packages</h2>
                <h3 className='text-5xl font-bold text-white py-8'>Find The Right Package for you.</h3>
                <p className="text-3xl">
                Affordable web design/hosting packages to suit your needs. Whether you're a small business or an individual, we have a solution that fits your goals and budget.
                </p>
            </div>

            <div className="grid md:grid-cols-2">

                <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
                    <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">Premium Website</span>
                    <div>
                        <p className="text-5xl font-bold py-4 flex">Most Affordable<span className='text-xl text-slate-500 flex flex-col justify-end'>/per project</span></p>
                    </div>
                    <p className="text-2xl py-8 text-slate-500">Custom, modern website design tailored to your needs.</p>
                    <div className="text-2xl">
                        <p className="flex py-4"><CheckIcon className='w-7 mr-5 text-green-600' />Fully responsive for mobile, tablet, and desktop.</p>
                        <p className="flex py-4"><CheckIcon className='w-7 mr-5 text-green-600' />SEO-friendly structure for better visibility.</p>
                        <p className="flex py-4"><CheckIcon className='w-7 mr-5 text-green-600' />Easy-to-manage updates.</p>
                        <p className="flex py-4"><CheckIcon className='w-7 mr-5 text-green-600' />Free Domain Name.</p>
                        <p className="flex py-4"><CheckIcon className='w-7 mr-5 text-green-600' />Affordable Hosting.</p>
                        <button className="w-full py-4 my-4">Get Quote</button>
                    </div>
                </div>
                <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
                    <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">Multi-page Website</span>
                    <div>
                        <p className="text-5xl font-bold py-4 flex">Best Value<span className='text-xl text-slate-500 flex flex-col justify-end'>/per project</span></p>
                    </div>
                    <p className="text-2xl py-8 text-slate-500">Multi-Page Websites Built for Growth.</p>
                    <div className="text-2xl">
                        <p className="flex py-4"><CheckIcon className='w-7 mr-5 text-green-600' />Advanced Customization.</p>
                        <p className="flex py-4"><CheckIcon className='w-7 mr-5 text-green-600' />Priority Support.</p>
                        <p className="flex py-4"><CheckIcon className='w-7 mr-5 text-green-600' />Advanced Customization.</p>
                        <p className="flex py-4"><CheckIcon className='w-7 mr-5 text-green-600' />Priority Support.</p>
                        <p className="flex py-4"><CheckIcon className='w-7 mr-5 text-green-600' />Priority Support.</p>
                        <button className="w-full py-4 my-4">Get Quote</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing