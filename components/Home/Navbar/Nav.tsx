"use client"; // This directive must be the first line in your component file
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/constant/constant'; // Assuming you have navLinks that have the id and href

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);

  // Scroll event handler
  const handleScroll = () => {
    if (window.scrollY >= 90) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run once on mount

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed w-full transition-all duration-200 h-[15vh] z-[1000] ${navBg ? 'bg-blue-700' : 'bg-indigo-950'}`}>
      <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
        <Image src="/images/logo.png" alt="LOGO" width={120} height={150} />
        <div className='hidden lg:flex items-center space-x-10'>
          {navLinks.map((link) => (
            <Link key={link.id} href={`#${link.id}`}>
              <p className='nav__link'>{link.label}</p>
            </Link>
          ))}
          {/* Sign Up button placed alongside the links */}
          <button className='md:px-10 md:py-2 px-8 py-1.5 text-white font-semibold text-base bg-pink-700 hover:bg-pink-900 transition-all duration-200 rounded-lg'>
            Sign Up
          </button>
        </div>
        <div className='lg:hidden'>
          <button onClick={toggleMenu} className='text-white focus:outline-none'>
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='lg:hidden bg-blue-600 mobile-menu'>
          <div className='flex flex-col items-center'>
            {navLinks.map((link) => (
              <Link key={link.id} href={`#${link.id}`} className='py-2 text-white'>
                {link.label}
              </Link>
            ))}
            {/* Sign Up button in mobile view */}
            <button className='md:px-10 md:py-2 px-8 py-1.5 text-white font-semibold text-base bg-pink-700 hover:bg-pink-900 transition-all duration-200 rounded-lg'>
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
