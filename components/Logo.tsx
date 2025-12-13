import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="NeedlScan Logo"
      width="40"
      height="40"
    >
      {/* Background Green Square - Brand Green #22c55e */}
      <rect width="100" height="100" fill="#22c55e" />
      
      {/* Black Arrow Shape - Brand Dark #050505 */}
      <path 
        d="M21 58 L78 20 L48 78 L47 50 Z" 
        fill="#050505" 
        stroke="#050505"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Logo;