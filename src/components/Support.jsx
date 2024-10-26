import React from 'react';

import { 
    BriefcaseIcon, GlobeAltIcon, NewspaperIcon
} from '@heroicons/react/24/outline';

import supImg from '../assets/Peabody-MA.jpg';

const Support = () => {
  return (
    <div name="services" className="w-full relative">
        {/* Background Color Layer */}
        <div className="absolute top-0 left-0 w-full h-[840px] bg-blue-300 z-0"></div>
        
        {/* Background Image with Overlay */}
        <div className="w-full h-[840px] bg-gray-800/90 absolute top-0 left-0 z-0">
            <img className="w-full h-full object-cover mix-blend-overlay" src={supImg} alt="/" />
        </div>

        {/* Main Content Container */}
        <div className="max-w-[1240px] mx-auto text-white relative z-10">
            <div className="px-4 py-12">
                <h2 className="text-3xl pt-8 text-gray-300 uppercase text-center">Services</h2>
                <h3 className="text-5xl font-bold py-6 text-center">Web Design With a Mission</h3>
                <p className="py-4 text-2xl text-gray-300 font-bold">
                    Based in Peabody, our goal is simple: to save you money on high-quality websites. We provide modern web design and hosting at competitive rates 
                    for both individuals and businesses.
                </p>
            </div>
            
            {/* Service Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 px-4 pt-36 sm:pt-64 text-black mt-24">
                <div className="rounded-xl shadow-2xl bg-blue-300">
                    <div className="p-8">
                        <GlobeAltIcon className="w-16 p-4 bg-blue-700 text-white rounded-lg mt-[-4rem]" />
                        <h3 className="font-bold text-2xl my-6">Web Design</h3>
                        <p className="text-gray-800 text-xl font-bold">
                            An amazing looking website that will enhance a brand's credibility and reputation. All websites will be Desktop and Mobile responsive.
                        </p>
                    </div>
                </div>

                <div className="bg-blue-300 rounded-xl shadow-2xl">
                    <div className="p-8">
                        <BriefcaseIcon className="w-16 p-4 bg-blue-700 text-white rounded-lg mt-[-4rem]" />
                        <h3 className="font-bold text-2xl my-6">Business Website</h3>
                        <p className="text-gray-800 text-xl font-bold">
                            We create professional websites tailored to your business needs, helping you build a strong online presence. Perfect for showcasing your services, products, and brand.
                        </p>
                    </div>
                </div>

                <div className="bg-blue-300 rounded-xl shadow-2xl">
                    <div className="p-8">
                        <NewspaperIcon className="w-16 p-4 bg-blue-700 text-white rounded-lg mt-[-4rem]" />
                        <h3 className="font-bold text-2xl my-6">Resume Website</h3>
                        <p className="text-gray-800 text-xl font-bold">
                            Looking to showcase your professional experience? We offer custom-built resume websites that help you stand out, providing a modern and impressive way to present your skills and background.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}

export default Support;
