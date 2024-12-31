"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { navLinks } from '@/constant/constant';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='lg:hidden'>
      {/* Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className='text-white focus:outline-none bg-blue-700 p-2 rounded-md'
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      {/* Overlay */}
      <div
        onClick={toggleMenu}
        className={`fixed inset-0 bg-black bg-opacity-50 z-[999] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      ></div>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[75%] bg-blue-600 p-6 z-[1000] transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='flex flex-col items-start space-y-6'>
          {/* Navigation Links */}
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className='text-white text-lg font-semibold hover:text-gray-200 transition duration-200'
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              {link.label}
            </Link>
          ))}

          {/* Sign Up Button */}
          <button className='mt-6 px-8 py-2 text-white font-semibold text-base bg-pink-700 hover:bg-pink-900 transition-all duration-200 rounded-lg'>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;

