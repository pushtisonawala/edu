import React from 'react';
import { FaAward } from 'react-icons/fa'; // Import the FaAward icon

const About = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16'>
        <div>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center'>
              <FaAward className='h-6 w-6 text-white' />
            </div>
            <h1 className='text-xl text-black font-semibold'>Secured and Endorsed</h1>
          </div>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-6 font-bold md:leading-[2.5rem] lg:leading-[3rem] xl:leading-[3.5rem] text-gray-800'>
            Knowledge at
          </h1>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-4 font-bold md:leading-[2.5rem] lg:leading-[3rem] xl:leading-[3.5rem] text-gray-800'>
            Your Fingertips
            
          </h1>
        </div>
        <p className='mt-4 text-gray-600'>Discover a world of learning at your fingertips, where innovation meets education, offering you the tools to grow professionally and personally.
        </p>
        <div>
          {/* You can add more content here */}
        </div>
      </div>
    </div>
  );
};

export default About;