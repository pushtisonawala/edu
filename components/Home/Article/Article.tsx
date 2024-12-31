import React from 'react';
import { articleData } from '@/data/data'; // Ensure this path is correct

const ArticleSection = () => {
  return (
    <div className='w-[80%] mx-auto mt-16'>
      <h2 className='text-3xl font-bold text-gray-900 text-center mb-8'>Latest Articles</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {articleData.map((article) => (
          <div 
            key={article.id} 
            className='bg-white rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl'
          >
            <img 
              src={article.coverImage} 
              alt={article.title} 
              className='rounded-t-lg w-full h-48 object-cover'
            />
            <div className='p-4'>
              <div className='flex items-center mb-2'>
                <img 
                  src={article.userImage} 
                  alt={article.username} 
                  className='w-10 h-10 rounded-full mr-2'
                />
                <span className='font-semibold'>{article.username}</span>
              </div>
              <h3 className='text-xl font-semibold mb-2'>{article.title}</h3>
              <a 
                href="#" 
                className='text-blue-500 hover:underline'
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticleSection;