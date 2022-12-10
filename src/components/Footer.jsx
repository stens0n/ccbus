import React from 'react';

import {
    FaFacebook,
    FaGithub, FaInstagram,
    FaTwitter, 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-blue-900 text-gray-300 py-y px-2">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-6 border-b-2 border-gray-600 py-8">
            <div>
                <h6 className="font-bold uppercase pt-2">Services</h6>
                <ul>
                    <li className="py-1">Web Design</li>
                    <li className="py-1">Domain Creation</li>
                    <li className="py-1">Website Hosting</li>
                    <li className="py-1">Social Media Management</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer

