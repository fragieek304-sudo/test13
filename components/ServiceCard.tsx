import React from 'react';
import { ServiceCardProps } from '../types';
import { ArrowUpRight } from 'lucide-react';

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  type, 
  title, 
  subtitle, 
  imageUrl, 
  icon,
  className = '',
  onClick
}) => {
  
  // Base styling for the dark aesthetic
  const baseWrapper = `relative overflow-hidden rounded-2xl transition-all duration-300 group cursor-pointer h-full border border-white/10 hover:border-brand-green/50 bg-[#0a0a0a] hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] ${className}`;

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  if (type === 'image') {
    return (
      <div onClick={handleClick} className={`${baseWrapper} flex flex-col justify-end min-h-[320px]`}>
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700 ease-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        <div className="relative z-10 p-5 space-y-1">
          <h3 className="text-2xl font-bold text-white leading-tight">{title}</h3>
        </div>
      </div>
    );
  }

  // TYPE: ICON (The Main Style now)
  // Significantly tighter padding for mobile
  return (
      <div onClick={handleClick} className={`${baseWrapper} flex flex-col items-center justify-center p-4 md:p-8 text-center group`}>
        
        {/* Subtle Background Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:14px_14px]"></div>
        
        {/* Hover decorative background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Icon Container - Scaled down for mobile */}
        <div className="relative z-10 mb-4 md:mb-8 w-16 h-16 md:w-24 md:h-24 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-brand-green group-hover:scale-105 transition-all duration-300 shadow-2xl group-hover:shadow-[0_0_25px_rgba(34,197,94,0.25)]">
           <div className="text-gray-300 group-hover:text-brand-green transition-colors duration-300 transform group-hover:rotate-3 scale-90 md:scale-100">
             {/* The icon itself is passed as a prop, its size is controlled via CSS classes for responsiveness */}
             {type === 'icon' && React.isValidElement(icon) 
                ? React.cloneElement(icon as React.ReactElement<any>, { className: "w-7 h-7 md:w-10 md:h-10" }) 
                : <div className="w-7 h-7" />
             }
           </div>
        </div>
        
        {/* Text Content */}
        <h3 className="relative z-10 text-lg md:text-2xl font-bold text-white mb-1 md:mb-2 group-hover:text-brand-green transition-colors leading-tight">{title}</h3>
        {subtitle && (
          <p className="relative z-10 text-gray-500 text-[10px] md:text-sm font-medium tracking-wide border-b border-transparent group-hover:border-brand-green/30 pb-0.5 transition-colors">
            {subtitle}
          </p>
        )}
        
        {/* Corner Arrow - Smaller on mobile */}
        <div className="absolute bottom-3 right-3 md:bottom-5 md:right-5 opacity-0 group-hover:opacity-100 -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 delay-75">
           <div className="bg-brand-green/10 p-1.5 md:p-2 rounded-full border border-brand-green/20">
             <ArrowUpRight className="text-brand-green w-3 h-3 md:w-4 md:h-4" />
           </div>
        </div>
      </div>
  );
};

export default ServiceCard;