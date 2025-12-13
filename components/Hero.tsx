import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full pt-28 md:pt-48 lg:pt-60 pb-12 md:pb-24 px-6 md:px-8 lg:px-16 overflow-hidden">
      {/* Abstract Background Elements - Adjusted for mobile opacity */}
      <div className="absolute top-20 right-[10%] w-32 h-32 bg-brand-green rounded-full blur-[60px] opacity-15 md:opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-[20%] w-64 h-64 bg-brand-green rounded-full blur-[80px] opacity-10"></div>
      
      {/* Visual Spheres - Hidden on mobile/tablet to clean up view, visible on desktop */}
      <div className="hidden lg:block absolute right-[15%] top-1/4 w-24 h-24 bg-brand-green rounded-full shadow-[0_0_40px_rgba(34,197,94,0.6)] z-10"></div>
      <div className="hidden lg:block absolute right-[25%] top-1/2 w-16 h-16 bg-brand-green rounded-full shadow-[0_0_30px_rgba(34,197,94,0.5)] z-0 opacity-80"></div>
      <div className="hidden lg:block absolute right-[10%] bottom-1/4 w-10 h-10 bg-brand-green rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)] z-0 opacity-60"></div>

      {/* Dotted Pattern Bottom Left */}
      <div className="absolute bottom-0 left-0 w-full md:w-64 h-32 md:h-48 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:16px_16px] opacity-10 md:opacity-20 mask-image-gradient pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto md:mx-0 text-center md:text-left">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-6 md:mb-8">
          The <span className="text-brand-green">smart</span> way to cut digital noise and focus on what really matters.
        </h1>
        
        <p className="text-gray-400 text-sm sm:text-lg md:text-xl max-w-xl mb-8 md:mb-10 leading-relaxed mx-auto md:mx-0 px-2 md:px-0">
          In Just 30 seconds, <span className="text-brand-green font-medium">NeedlScan</span> understands your needs and finds the right match.
        </p>

        <a 
          href="https://tally.so/r/mOMp77"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full md:w-auto px-8 py-4 md:px-12 md:py-4 bg-gradient-to-r from-brand-green to-lime-500 text-black font-bold text-base md:text-lg rounded-2xl md:rounded-full hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all transform hover:-translate-y-1 active:translate-y-0 text-center shadow-lg"
        >
          Start Now
        </a>
      </div>
    </section>
  );
};

export default Hero;