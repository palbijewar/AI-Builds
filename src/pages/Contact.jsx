import React, { useRef, useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_o4f2uhs', 
        'template_yo79y9u', 
        {
          from_name: form.name,
          to_name: 'Recipient Name', 
          from_email: form.email,
          to_email: 'aibuildscompany@gmail.com', 
          message: form.message,
        },
        'waZPbDWvF0TP4Cukc' 
      );
      alert('Thank you. Your message has been sent successfully.');
      setForm({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We'd love to hear from you. Fill out the form below to get in touch.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="flex-shrink-0">
                <FaMapMarkerAlt className="h-8 w-8 text-gray-600" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Address
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Raipur, Chhattisgarh, 492001
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex-shrink-0">
                <FaPhone className="h-8 w-8 text-gray-600" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Phone
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  +91 7000 82 6799
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex-shrink-0">
                <FaEnvelope className="h-8 w-8 text-gray-600" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Email
                </h3>
                <p className="mt-2 text-base text-gray-600">
                aibuildscompany@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                ></textarea>
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full py-3 px-6 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {loading ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
