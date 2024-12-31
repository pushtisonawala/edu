import React from 'react';
import Image from 'next/image';
import { coursesData } from '@/data/data'; // Ensure this path is correct
import { FaStar, FaUsers} from 'react-icons/fa'; // Import star, users, and dollar icons
import { MdOutlineClass } from 'react-icons/md'; // Import class icon

const Course = () => {
  return (
    <div className='pt-16 pb-12 relative bg-gray-200'>
      <Image 
        src="/images/cb.png" // Ensure this path is correct
        alt="image" 
        width={800} 
        height={800} 
        className="absolute top-[30%] animate-bounce" 
      />
      <div className='w-[80%] pt-8 pb-8 mx-auto'>
        <h1 className='text-4xl md:text-5xl text-gray-900 font-bold text-center'>Popular Courses</h1>
        <div className='md:mt-16 mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
          {coursesData.map((course) => {
            return (
              <div 
                key={course.id} 
                className='bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gray-100 max-w-lg mx-auto flex flex-col items-center'
              >
                <Image 
                  src={course.image} // Ensure this path is correct
                  alt={course.title} 
                  width={300} 
                  height={200} 
                  className='rounded-md mb-4'
                />
                <h2 className='text-xl font-bold text-center'>{course.title}</h2>
                
                {/* Star Rating */}
                <div className='flex items-center mt-1'>
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className={`text-yellow-500 ${index < course.reviewNumber ? 'text-yellow-500' : 'text-gray-300'}`} />
                  ))}
                  <span className='ml-2 text-gray-600'>({course.reviewNumber})</span>
                </div>

                {/* Price Display */}
                <div className='flex items-center mt-2'>
                  
                  <span className='text-lg font-bold text-gray-800'>${course.price}</span>
                </div>

                <hr className='my-2 w-full border-gray-300' />

                {/* Lessons and Students */}
                <div className='flex justify-between w-full text-gray-600'>
                  <div className='flex items-center'>
                    <MdOutlineClass className='mr-1' />
                    <span>{course.lessons} Lessons</span>
                  </div>
                  <div className='flex items-center'>
                    <FaUsers className='mr-1' />
                    <span>{course.students} Students</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Course;