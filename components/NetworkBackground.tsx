import React from 'react';

const NetworkBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
             <circle cx="2" cy="2" r="1" className="fill-pink-400" />
          </pattern>
        </defs>
        
        {/* Background Grid */}
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Connection Lines & Nodes - Artistic Representation */}
        <g className="stroke-lime-500 stroke-[1] fill-none">
          <path d="M100,100 Q 400,300 800,100" />
          <path d="M-50,400 Q 300,200 600,600" />
          <path d="M800,500 Q 500,800 200,600" />
          <path d="M900,200 Q 700,400 900,600" />
        </g>

        {/* Floating Nodes */}
        <circle cx="100" cy="100" r="6" className="fill-pink-400 animate-pulse" />
        <circle cx="800" cy="100" r="8" className="fill-lime-500 animate-bounce" style={{ animationDuration: '3s' }} />
        <circle cx="600" cy="600" r="5" className="fill-pink-300 animate-pulse" style={{ animationDuration: '4s' }} />
        <circle cx="200" cy="600" r="7" className="fill-lime-400 animate-bounce" style={{ animationDuration: '5s' }} />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
    </div>
  );
};

export default NetworkBackground;
