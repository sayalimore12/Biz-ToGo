import React from 'react';
import Slider from 'react-slick';

const testimonials = [
  {
    name: 'Jane Doe',
    title: 'CEO at Company',
    quote: 'This product changed my life!',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'John Smith',
    title: 'Developer',
    quote: 'Highly recommend to anyone looking for quality.',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    name: 'Alice Johnson',
    title: 'Designer',
    quote: 'Elegant and easy to use. Love it!',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      },
    },
  ],
};

const TestimonialSlider = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div key={index} className="p-6 bg-white shadow-md rounded-md text-center">
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 mx-auto rounded-full mb-4"
            />
            <p className="text-lg italic text-gray-700 mb-2">"{t.quote}"</p>
            <h3 className="text-xl font-semibold">{t.name}</h3>
            <p className="text-gray-500">{t.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
