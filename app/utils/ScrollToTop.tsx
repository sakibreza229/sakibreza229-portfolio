import React, { useState, useEffect, MouseEvent } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Toggle visibility based on scroll position
  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  // Scroll to the top smoothly
  const scrollToTop = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => toggleVisibility();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed right-4 xl:right-6 ${isVisible ? 'bottom-10' : '-bottom-20'} 
      z-50 bg-primary text-white opacity-80 hover:opacity-100 text-xl p-2 rounded-xl 
      cursor-pointer transition-all ease-in-out duration-300 shadow-xl`}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
