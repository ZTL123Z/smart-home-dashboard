import React from 'react';
import './CircleBackground.css';

const CircleBackground = ({ 
  size = '100%', 
  color = '#a0c4ff', 
  dashArray = '5,5',
  children 
}) => {
  return (
    <div className="circle-background" style={{ width: size, height: size }}>
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          fill="rgba(240, 248, 255, 0.3)" 
          stroke={color} 
          strokeWidth="1" 
          strokeDasharray={dashArray} 
        />
      </svg>
      <div className="circle-content">
        {children}
      </div>
    </div>
  );
};

export default CircleBackground; 