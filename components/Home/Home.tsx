import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Course from './Course/Course';
import Article from './Article/Article';
import TestimonialCarousel from './TestimonialCarousel/TestimonialCarousel';
import Footer from './footer/footer';

const Home = () => {
  return (
    <div>
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="course">
        <Course />
      </div>
      <div id="testimonial">
        <TestimonialCarousel />
      </div>
      <div id="article">
        <Article />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
