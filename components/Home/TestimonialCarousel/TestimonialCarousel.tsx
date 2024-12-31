"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '@/data/data'; // Ensure this path is correct

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-16 p-4 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">What Our Students Say</h2>
      <div className="relative">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex-shrink-0 w-full p-4">
              <div className="bg-gray-800 rounded-lg shadow-md p-6 transition-transform duration-300 hover:shadow-lg h-64">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4 border-2 border-gray-700" />
                <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                <p className="text-gray-400">{testimonial.role}</p>
                <p className="mt-2 text-gray-300">{testimonial.content}</p>
                <div className="flex mt-2">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star key={index} className="text-yellow-500 w-4 h-4" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
          <ChevronLeft size={20} />
        </button>
        <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;