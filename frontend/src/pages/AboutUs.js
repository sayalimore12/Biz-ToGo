import React from 'react';
import PageWrapper from '../components/PageWrapper';

const AboutUs = () => {
  return (
    <PageWrapper>
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold sm:text-5xl text-gray-900">
            About Our Company
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Helping entrepreneurs start and grow their businesses with ease.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg">
              We believe starting a business should be simple and affordable. That’s why we’re dedicated to making LLC formation and compliance easier for entrepreneurs and small business owners. From paperwork to personalized support, we’re here at every step of your journey.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
            alt="Team working"
            className="w-full h-64 object-cover rounded-lg shadow"
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Founded by entrepreneurs, for entrepreneurs — our company started with one goal: to eliminate the legal and administrative roadblocks of starting a business. Over the years, we’ve helped thousands of founders form LLCs, stay compliant, and thrive. We’re not just a filing service — we’re your long-term partner in business success.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Transparency', desc: 'No hidden fees, no surprises. Just clear, honest service.' },
              { title: 'Simplicity', desc: 'We break down complex processes so you can focus on your business.' },
              { title: 'Support', desc: 'Real people, real help — whenever you need it.' },
              { title: 'Trust', desc: 'Your data and business are safe with us.' },
              { title: 'Innovation', desc: 'Always improving to serve you better.' },
              { title: 'Empowerment', desc: 'We give you the tools and knowledge to succeed.' },
            ].map((value, idx) => (
              <div key={idx} className="p-6 bg-gray-100 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-700">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional: Team Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-gray-600 mb-12">Small but mighty — a team of legal experts, business advisors, and customer champions.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: 'Jane Smith', role: 'Founder & CEO' },
              { name: 'Mike Johnson', role: 'Head of Legal' },
              { name: 'Anna Lee', role: 'Customer Success Lead' },
            ].map((person, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow">
                <div className="h-24 w-24 mx-auto bg-gray-200 rounded-full mb-4" />
                <h4 className="text-lg font-semibold">{person.name}</h4>
                <p className="text-gray-600">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  </PageWrapper>
  );
};

export default AboutUs;

  
