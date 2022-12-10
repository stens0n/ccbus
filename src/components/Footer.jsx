import React from 'react';

import {
    FaFacebook,
    FaGithub, FaInstagram,
    FaTwitter, 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-6 border-b-2 border-gray-600 py-8 ">
            <div>
                <h6 className="font-bold uppercase pt-3">Services</h6>
                <ul>
                    <li className="py-1">Web Design</li>
                    <li className="py-1">Domain Creation</li>
                    <li className="py-1">Website Hosting</li>
                    <li className="py-1">Social Media Management</li>
                </ul>
            </div>
            <div>
                <h6 className="font-bold uppercase pt-2">Support</h6>
                <ul>
                    <li className="py-1">Pricing</li>
                    <li className="py-1">Domain Creation</li>
                    <li className="py-1">Website Hosting</li>
                    <li className="py-1">Social Media Management</li>
                </ul>
            </div>
            <div className="col-span-2 pt-8 md:pt-2">
                <p className='font-bold uppercase'>Subscribe to Newsletter</p>
                <p className='py-4'>The latest news, deals, resources sent to your inbox!</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type='email' placeholder='Enter Email..'/>
                    <button className='p-2 mb-4'>Subscribe</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2022 Stenson Dev Group, LLC. All Rights Reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaGithub />
        </div>
        </div>
    </div>
  )
}

export default Footer

