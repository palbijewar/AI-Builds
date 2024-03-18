import React from 'react';
import { FaChartPie, FaExchangeAlt, FaDatabase, FaBolt } from 'react-icons/fa';

const Analytics = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8 mt-5">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Analytics Solutions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="bg-indigo-500 p-3 rounded-full text-white">
              <FaChartPie className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">Data Visualization</h2>
            <p className="text-gray-600 text-center mt-2">
              Transform raw data into visually appealing charts and graphs, enabling clients to gain valuable insights at a glance.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="bg-indigo-500 p-3 rounded-full text-white">
              <FaExchangeAlt className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">Predictive Analytics</h2>
            <p className="text-gray-600 text-center mt-2">
              Utilize advanced algorithms to forecast future trends and outcomes, empowering businesses to make informed decisions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="bg-indigo-500 p-3 rounded-full text-white">
              <FaDatabase className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">Data Management</h2>
            <p className="text-gray-600 text-center mt-2">
              Implement robust data management systems to organize, store, and retrieve vast amounts of data efficiently and securely.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="bg-indigo-500 p-3 rounded-full text-white">
              <FaBolt className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">Real-time Insights</h2>
            <p className="text-gray-600 text-center mt-2">
              Deliver real-time analytics dashboards, enabling clients to monitor key metrics and make instant data-driven decisions.
            </p>
          </div>
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

export default Analytics;
