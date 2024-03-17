import React from 'react';
import { FaRobot, FaCog, FaChartLine } from 'react-icons/fa';

const Automation = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Automation Solutions</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="bg-indigo-500 p-3 rounded-full text-white">
              <FaRobot className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">Robotic Process Automation (RPA)</h2>
            <p className="text-gray-600 text-center mt-2">
              Utilize RPA technology to automate repetitive tasks and streamline business processes, increasing efficiency and productivity.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="bg-indigo-500 p-3 rounded-full text-white">
              <FaCog className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">Workflow Automation</h2>
            <p className="text-gray-600 text-center mt-2">
              Implement workflow automation solutions to orchestrate complex processes and optimize resource utilization, leading to faster project delivery.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="bg-indigo-500 p-3 rounded-full text-white">
              <FaChartLine className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">Analytics Automation</h2>
            <p className="text-gray-600 text-center mt-2">
              Deploy analytics automation tools to generate insights and reports automatically, enabling data-driven decision-making and forecasting.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-700 mb-2">Our automation solutions help you:</p>
          <ul className="text-gray-600">
            <li className="flex items-center mb-2">
              <FaCog className="text-gray-500 mr-2" />
              Improve operational efficiency by reducing manual efforts and errors.
            </li>
            <li className="flex items-center mb-2">
              <FaCog className="text-gray-500 mr-2" />
              Accelerate time-to-market for products and services through streamlined processes.
            </li>
            <li className="flex items-center mb-2">
              <FaCog className="text-gray-500 mr-2" />
              Enhance scalability and scalability by automating repetitive tasks and scaling resources dynamically.
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

export default Automation;
