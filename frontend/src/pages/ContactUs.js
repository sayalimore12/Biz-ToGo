
import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send data to backend or API
    alert('Message submitted! (Form logic placeholder)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
  <PageWrapper>
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Have questions or need help forming your LLC? We’d love to hear from you.
        </p>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p>support@yourllccompany.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p>+1 (800) 555-LLC1</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Office</h3>
              <p>123 Business Rd, Suite 100<br />New York, NY 10001</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Hours</h3>
              <p>Mon–Fri: 9am – 6pm EST</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </PageWrapper>
  );
};

export default ContactUs;
