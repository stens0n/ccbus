import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

const Pricing = () => {
  return (
    <div name="pricing" className="w-full text-white my-24 relative">
      {/* Background Overlay */}
      <div className="w-full h-full bg-blue-900 absolute inset-0 mix-blend-overlay"></div>

      <div className="max-w-[1240px] mx-auto py-12 px-4">
        {/* Header Section */}
        <div className="text-center py-8 text-slate-300">
          <h2 className="text-3xl uppercase text-blue-300">Packages</h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-blue-300 py-4">
            Find The Right Package for You
          </h3>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Premium Website Package */}
          <div className="bg-white text-slate-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <span className="inline-block uppercase px-3 py-1 bg-indigo-200 text-blue-900 rounded-2xl text-xs sm:text-sm mb-4">
              Premium Website
            </span>
            <div className="flex items-baseline">
              <span className="text-3xl sm:text-5xl font-bold">Most Affordable</span>
              <span className="text-base sm:text-lg text-blue-900 ml-2 ">/per project</span>
            </div>
            <p className="text-lg sm:text-xl py-4 text-slate-600">
              Custom, modern website design tailored to your needs.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-green-600 mr-3" />
                Mobile and Desktop Responsive
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-green-600 mr-3" />
                Easy-to-manage Updates
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-green-600 mr-3" />
                SSL Certificates
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-green-600 mr-3" />
                SEO-Friendly
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-green-600 mr-3" />
                Affordable Hosting
              </li>
            </ul>
            <button className="w-full py-3 mt-6 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300">
              Get Quote
            </button>
          </div>

          {/* Multi-page Website Package */}
          <div className="bg-white text-slate-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <span className="inline-block uppercase px-3 py-1 bg-indigo-200 text-blue-900 rounded-2xl text-xs sm:text-sm mb-4">
            Multi-page Website
          </span>
            <div className="flex items-baseline">
              <span className="text-3xl sm:text-5xl font-bold">Best Value</span>
              <span className="text-base sm:text-lg text-slate-500 ml-2">/per project</span>
            </div>
            <p className="text-lg sm:text-xl py-4 text-slate-600">
              Multi-Page Websites Built for Growth.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-green-600 mr-3" />
                Advanced Customization
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-green-600 mr-3" />
                Priority Support
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-green-600 mr-3" />
                E-commerce Integration
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-green-600 mr-3" />
                Advanced SEO Optimization
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-green-600 mr-3" />
                Ongoing Maintenance
              </li>
            </ul>
            <button className="w-full py-3 mt-6 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300">
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
