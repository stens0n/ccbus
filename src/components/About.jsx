import React from 'react'

const About = () => {
  return (
    <div className="w-full my-32">
        <div className="max-w-[1240px] mx-auto">
            <div className="text-center">
                <h2 className="text-5xl font-bold">Trusted across the North Shore</h2>
                <p className="text-3xl py-6 text-gray-700">For Job Seekers looking to upgrade their resumes. To Business Professionals Managing a brand.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
                <div className="border py-8 rounded-xl shadow-xl">
                    <p className="text-6xl font-bold text-blue-700">100%</p>
                    <p className="text-gray-700 mt-2">lowest price</p>
                </div>
                <div className="border py-8 rounded-xl shadow-xl">
                    <p className="text-6xl font-bold text-blue-700">Free</p>
                    <p className="text-gray-700 mt-2">Domain Name</p>
                </div>
                <div className="border py-8 rounded-xl shadow-xl">
                    <p className="text-6xl font-bold text-blue-700">Veteran</p>
                    <p className="text-gray-700 mt-2">Owned</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About