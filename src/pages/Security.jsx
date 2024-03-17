import React from 'react';
import { FaShieldAlt, FaLock, FaTools } from 'react-icons/fa';
import { HiShieldCheck } from 'react-icons/hi';

const Security = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Security Solutions</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="bg-indigo-500 p-3 rounded-full text-white">
              <FaShieldAlt className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">Data Encryption</h2>
            <p className="text-gray-600 text-center mt-2">
              Implement robust encryption techniques to protect sensitive data from unauthorized access and breaches.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="bg-indigo-500 p-3 rounded-full text-white">
              <HiShieldCheck className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">Security Audits</h2>
            <p className="text-gray-600 text-center mt-2">
              Conduct regular security audits and assessments to identify vulnerabilities and ensure compliance with industry standards.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="bg-indigo-500 p-3 rounded-full text-white">
              <FaLock className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">Access Control</h2>
            <p className="text-gray-600 text-center mt-2">
              Implement granular access controls and authentication mechanisms to regulate user access and prevent unauthorized usage.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-700 mb-2">Our security solutions help you:</p>
          <ul className="text-gray-600">
            <li className="flex items-center mb-2">
              <FaTools className="text-gray-500 mr-2" />
              Enhance the security posture of your software applications.
            </li>
            <li className="flex items-center mb-2">
              <FaTools className="text-gray-500 mr-2" />
              Mitigate risks associated with data breaches and cyber threats.
            </li>
            <li className="flex items-center mb-2">
              <FaTools className="text-gray-500 mr-2" />
              Ensure compliance with regulatory requirements and industry standards.
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

export default Security;
