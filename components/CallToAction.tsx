import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section id="join" className="px-6 md:px-8 lg:px-16 pb-12 md:pb-20 pt-12 md:pt-20">
      <div className="relative w-full rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 p-6 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between shadow-[0_0_50px_rgba(0,0,0,0.5)] group">
        
        {/* Subtle Background Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:24px_24px]"></div>

        {/* Background Decorative Neon Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
        
        {/* Animated accent line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-green/50 to-transparent opacity-50"></div>

        <div className="relative z-10 max-w-xl text-center md:text-left w-full">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4 md:mb-6">
            <Sparkles size={12} className="md:w-3 md:h-3" />
            <span>Join the revolution</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Ready to transform <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">your projects?</span>
          </h2>
          <p className="text-gray-400 mb-6 md:mb-8 max-w-md text-sm md:text-lg leading-relaxed mx-auto md:mx-0">
            Join thousands of professionals. Find the right person or start earning today with our AI-driven platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full md:w-auto justify-center md:justify-start">
            <button className="w-full sm:w-auto px-6 py-3.5 md:px-6 md:py-4 bg-brand-green text-black font-bold rounded-2xl md:rounded-xl hover:bg-green-400 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2 group/btn text-sm md:text-base">
              Find a Freelancer
              <ArrowRight size={18} className="md:w-[18px] md:h-[18px] group-hover/btn:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-6 py-3.5 md:px-6 md:py-4 bg-white/5 text-white font-bold rounded-2xl md:rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all hover:-translate-y-1 backdrop-blur-sm text-sm md:text-base">
              Become a Freelancer
            </button>
          </div>
        </div>

        {/* Visual Element (Right Side) - Hidden on Mobile */}
        <div className="relative z-10 mt-12 md:mt-0 hidden md:block">
           <div className="relative w-64 h-64">
              <div className="absolute inset-0 border border-brand-green/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-32 h-32 bg-brand-green/20 rounded-full backdrop-blur-md border border-brand-green/40 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                    <Sparkles size={48} className="text-brand-green" />
                 </div>
              </div>
              
              {/* Floating Orbiting Dots */}
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-white rounded-full -translate-x-1/2 -translate-y-1.5 shadow-[0_0_10px_white]"></div>
              <div className="absolute bottom-10 right-2 w-2 h-2 bg-brand-green rounded-full shadow-[0_0_10px_#22c55e]"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;