import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">About AI Builds</h1>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
        <div className="md:w-1/2">
            <img src="/logo.png" alt="Company Logo" className="w-40 h-auto rounded-lg shadow-md" /> 
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700">
              AI Builds is a leading software services company specializing in AI-powered solutions for businesses
              worldwide. Our mission is to empower organizations with cutting-edge technology and innovative software
              solutions that drive growth, efficiency, and success.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="bg-indigo-500 p-3 rounded-full text-white">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">Innovative Solutions</h2>
            <p className="text-gray-600 text-center mt-2">
              We develop innovative software solutions powered by artificial intelligence to address complex business
              challenges and drive digital transformation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="bg-indigo-500 p-3 rounded-full text-white">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">Client-Centric Approach</h2>
            <p className="text-gray-600 text-center mt-2">
              Our client-centric approach ensures that we understand the unique needs of each client and deliver
              customized solutions that exceed expectations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="bg-indigo-500 p-3 rounded-full text-white">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">Continuous Innovation</h2>
            <p className="text-gray-600 text-center mt-2">
              We are committed to continuous innovation, staying ahead of industry trends, and leveraging the latest
              technologies to drive success for our clients.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
