import React from 'react';
import { HiCursorClick, HiChatAlt2, HiUserGroup } from 'react-icons/hi';
import { FaCheckCircle } from 'react-icons/fa';

const Engagement = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Engagement Solutions</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="bg-indigo-500 p-3 rounded-full text-white">
              <HiCursorClick className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">Interactive Interfaces</h2>
            <p className="text-gray-600 text-center mt-2">
              Create engaging user experiences with interactive interfaces that captivate and retain your audience.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="bg-indigo-500 p-3 rounded-full text-white">
              <HiChatAlt2 className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">Customer Communication</h2>
            <p className="text-gray-600 text-center mt-2">
              Foster meaningful interactions with customers through real-time communication channels and personalized messaging.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="bg-indigo-500 p-3 rounded-full text-white">
              <HiUserGroup className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">Community Building</h2>
            <p className="text-gray-600 text-center mt-2">
              Cultivate a strong community around your brand by facilitating connections and encouraging user participation.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-700 mb-2">Our engagement solutions help you:</p>
          <ul className="text-gray-600">
            <li className="flex items-center mb-2">
              <FaCheckCircle className="text-green-500 mr-2" />
              Increase user engagement and retention rates.
            </li>
            <li className="flex items-center mb-2">
              <FaCheckCircle className="text-green-500 mr-2" />
              Enhance customer satisfaction and loyalty.
            </li>
            <li className="flex items-center mb-2">
              <FaCheckCircle className="text-green-500 mr-2" />
              Build a strong and active community around your brand.
            </li>
          </ul>
        </div>
        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Engagement;
