import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { SERVICE_CATEGORIES } from '../constants';
import { ServiceCardProps } from '../types';

interface ServiceGridProps {
  onCategoryClick?: (categoryTitle: string) => void;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ onCategoryClick }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjusted scroll amount
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount 
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="relative py-8 md:py-16 bg-brand-dark overflow-hidden group/section">
      {/* Header Section */}
      <div className="px-6 md:px-8 lg:px-16 flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1 md:mb-2 text-brand-green font-medium">
            <Sparkles size={14} className="md:w-4 md:h-4" />
            <span className="text-[10px] md:text-sm tracking-wider uppercase">Discover Opportunities</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Featured Categories</h2>
          <p className="text-gray-400 mt-1 md:mt-2 max-w-lg text-xs md:text-base">Swipe to find the perfect service for your next project.</p>
        </div>

        {/* Navigation Controls - Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full border border-gray-700 bg-gray-800/50 text-white flex items-center justify-center hover:bg-brand-green hover:border-brand-green hover:text-black transition-all active:scale-95"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full border border-gray-700 bg-gray-800/50 text-white flex items-center justify-center hover:bg-brand-green hover:border-brand-green hover:text-black transition-all active:scale-95"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      {/* Slider Container */}
      <div className="relative w-full">
        {/* Gradient Masks for fade effect - Thinner on mobile */}
        <div className="absolute left-0 top-0 bottom-0 w-4 md:w-24 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-4 md:w-24 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none"></div>

        {/* Scrollable Area */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-3 md:gap-6 px-6 md:px-8 lg:px-16 pb-6 md:pb-12 snap-x snap-mandatory no-scrollbar"
          style={{ scrollBehavior: 'smooth' }}
        >
          {SERVICE_CATEGORIES.map((category, index) => (
            <div 
              key={index} 
              className="min-w-[220px] md:min-w-[320px] h-[260px] md:h-[360px] snap-center select-none"
            >
              <ServiceCard
                type={category.type as ServiceCardProps['type']}
                title={category.title}
                subtitle={category.subtitle}
                imageUrl={category.imageUrl}
                avatarUrl={category.avatarUrl}
                authorName={category.authorName}
                icon={category.icon}
                logo={category.logo}
                className="h-full shadow-md hover:shadow-2xl hover:shadow-brand-green/10"
                onClick={() => onCategoryClick && onCategoryClick(category.title)}
              />
            </div>
          ))}
          
          {/* Spacer for right padding */}
          <div className="min-w-[1px] h-full"></div>
        </div>
      </div>

      {/* Progress Line Visual (Optional decoration) */}
      <div className="px-6 md:px-8 lg:px-16 mt-[-10px] md:mt-[-20px]">
        <div className="w-full h-[1px] bg-gray-800">
           <div className="w-1/3 md:w-32 h-full bg-brand-green/50"></div>
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;