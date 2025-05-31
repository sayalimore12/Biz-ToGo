import React from 'react';
import banner from '../assets/images/banner.jpg'
import TestimonialSlider from '../components/TestimonialSlider';

const Home = () => {
  return(
   <div>
  <div className="relative isolate overflow-hidden bg-gray-900 min-h-screen w-full">
    <img
      src={banner}
      alt="Banner"
      className="absolute inset-0 -z-10 h-full w-full object-cover opacity-80"
    />

    <div className="relative z-10 flex items-center justify-center min-h-screen text-center text-white px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">Welcome to MySite</h1>
        <p className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
          Your tagline or message goes here.
        </p>
      </div>
    </div>
  </div>

  {/* Mission & Vision Section */}
  <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          Our Mission & Vision
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
          We are committed to excellence and innovation. Here's what drives us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {/* Mission */}
        <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md">
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-3">Our Mission</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Our mission is to empower individuals and organizations through technology. We strive
            to deliver scalable and accessible solutions that improve lives and build a better
            digital future.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md">
          <h3 className="text-xl sm:text-2xl font-semibold text-green-600 mb-3">Our Vision</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            We envision a world where technology bridges gaps and creates opportunities for all.
            Our goal is to be a global leader in digital transformation and innovation.
          </p>
        </div>
      </div>
    </div>
  </section>
  <div className="bg-gray-100 min-h-screen">
  <TestimonialSlider />
  </div>
</div>
  )
};

export default Home;