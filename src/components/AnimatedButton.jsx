import React, { useState } from 'react';

function AnimatedButton({ children }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`relative  text-black px-4 py-2 rounded-md overflow-hidden transition-colors duration-300 ${
        isHovered ? 'text-white' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <span
        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 origin-bottom rounded-full bg-black transition-all duration-300 ${
          isHovered ? 'scale-[100]' : 'scale-[0.01]'
        }`}
      />
    </button>
  );
}

export default AnimatedButton;
