"use client"

import React, { useEffect, useRef } from 'react';

const TypingAnimation: React.FC = () => {
  const dynamicTextRef = useRef<HTMLDivElement>(null);
  const words = ["Frontend Developer", "Backend Developer", "Ui/Ux Designer", "Software Developer", "Content Creator"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typeAnimation = () => {
    if (!dynamicTextRef.current) return;

    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicTextRef.current.textContent = currentChar;
    dynamicTextRef.current.classList.add("before:animate-none");

    if (!isDeleting && charIndex < currentWord.length) {
      // If condition is true, type the next character
      charIndex++;
      setTimeout(typeAnimation, 200);
    } else if (isDeleting && charIndex > 0) {
      // If condition is true, remove the previous character
      charIndex--;
      setTimeout(typeAnimation, 100);
    } else {
      // If word is deleted then switch to next word
      isDeleting = !isDeleting;
      dynamicTextRef.current.classList.remove("before:animate-none");
      wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
      setTimeout(typeAnimation, 1200);
    }
  };

  useEffect(() => {
    const animationTimeout = setTimeout(typeAnimation, 1200);

    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <span ref={dynamicTextRef} className='typing font-secondary text-primary relative before:content-[""] before:animate-blink before:bg-foreground/80 before:absolute before:-translate-y-[45%] before:h-7 before:w-1 before:top-1/2 before:bottom-1/2 before:-right-2'></span>
  );
};

export default TypingAnimation;