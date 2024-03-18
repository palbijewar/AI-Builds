import React from 'react';
import { FaCode, FaDatabase, FaCogs } from 'react-icons/fa';

const Integration = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8 mt-5">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Integration Solutions</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="bg-indigo-500 p-3 rounded-full text-white">
              <FaCode className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">API Integration</h2>
            <p className="text-gray-600 text-center mt-2">
              Implement seamless API integrations to connect various applications and systems, enabling data sharing and automation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="bg-indigo-500 p-3 rounded-full text-white">
              <FaDatabase className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">Database Integration</h2>
            <p className="text-gray-600 text-center mt-2">
              Integrate databases across platforms to centralize data management and ensure data consistency and integrity.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="bg-indigo-500 p-3 rounded-full text-white">
              <FaCogs className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">Custom Integration Solutions</h2>
            <p className="text-gray-600 text-center mt-2">
              Develop custom integration solutions tailored to your specific business needs, ensuring seamless communication between systems.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-700 mb-2">Our integration solutions help you:</p>
          <ul className="text-gray-600">
            <li className="flex items-center mb-2">
              <FaCode className="text-gray-500 mr-2" />
              Streamline business processes by integrating disparate systems and applications.
            </li>
            <li className="flex items-center mb-2">
              <FaDatabase className="text-gray-500 mr-2" />
              Improve data accuracy and accessibility by synchronizing data across platforms.
            </li>
            <li className="flex items-center mb-2">
              <FaCogs className="text-gray-500 mr-2" />
              Enhance decision-making capabilities with real-time data exchange and insights.
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

export default Integration;
