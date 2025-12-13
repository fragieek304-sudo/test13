import React, { useState, useEffect } from 'react';
import { User as UserIcon, LogOut } from 'lucide-react';
import Logo from './Logo';
import { User } from '../types';

interface NavbarProps {
  onNavigate?: (page: 'home' | 'login' | 'signup') => void;
  user?: User | null;
  onLogout?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, user, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Trigger earlier
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (onNavigate) {
        const element = document.getElementById(id);
        if (element) {
          const navbarHeight = 60; // Adjusted for mobile header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 w-full px-6 md:px-8 lg:px-16 flex justify-between items-center transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-dark/95 backdrop-blur-md border-b border-white/5 py-3 md:py-4 shadow-lg' 
          : 'bg-transparent py-5 md:py-6'
      }`}
    >
      <div className="flex items-center gap-12">
        <div 
          className="flex items-center gap-2 md:gap-3 group cursor-pointer"
          onClick={(e) => scrollToSection(e, 'hero')}
        >
          {/* Logo Component - Smaller on mobile */}
          <Logo className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl shadow-[0_0_10px_rgba(34,197,94,0.3)] transition-transform group-hover:scale-105" />
          
          <span className="text-lg md:text-2xl font-bold tracking-tight text-white">NeedlScan</span>
        </div>
        
        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#services" 
            onClick={(e) => scrollToSection(e, 'services')} 
            className="text-sm font-medium text-gray-300 hover:text-brand-green transition-colors"
          >
            Categories
          </a>
          <a 
            href="#join" 
            onClick={(e) => scrollToSection(e, 'join')} 
            className="text-sm font-medium text-gray-300 hover:text-brand-green transition-colors"
          >
            Join
          </a>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        {user ? (
          <div className="group flex items-center gap-2 pl-1 pr-1.5 py-1 rounded-full bg-white/5 border border-white/10 hover:border-brand-green/30 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
             
             {/* Avatar Section */}
             <div className="relative">
                <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-gradient-to-tr from-brand-green to-emerald-400 flex items-center justify-center text-black text-xs md:text-base font-bold shadow-[0_0_10px_rgba(34,197,94,0.2)]">
                   {user.name ? user.name[0].toUpperCase() : <UserIcon size={14} className="md:w-[18px] md:h-[18px]" />}
                </div>
                {/* Online Indicator */}
                <div className="absolute bottom-0 right-0 w-2 h-2 md:w-2.5 md:h-2.5 bg-brand-green border-2 border-[#0a0a0a] rounded-full"></div>
             </div>

             {/* User Text Info */}
             <div className="hidden md:flex flex-col items-start mr-2">
                <span className="text-sm font-bold text-white leading-tight">{user.name}</span>
                <span className="text-[10px] text-gray-400 group-hover:text-brand-green/80 transition-colors leading-tight max-w-[120px] truncate">
                  {user.email}
                </span>
             </div>

             {/* Vertical Separator */}
             <div className="h-4 w-[1px] bg-white/10 hidden md:block mx-1"></div>

             {/* Logout Button */}
             <button 
                onClick={onLogout}
                className="p-1 md:p-1.5 rounded-full text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                title="Log Out"
             >
                <LogOut size={14} className="md:w-4 md:h-4" />
             </button>
          </div>
        ) : (
          <>
            <button 
              onClick={() => onNavigate && onNavigate('login')}
              className="hidden md:block px-6 py-2 text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors text-sm font-medium"
            >
              Log In
            </button>
            <button 
              onClick={() => onNavigate && onNavigate('signup')}
              className="hidden md:block px-6 py-2 bg-brand-green text-black rounded-full hover:bg-green-400 transition-colors font-bold text-sm shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)]"
            >
              Sign Up
            </button>
            
            {/* Mobile Actions - Compact & iPhone style */}
            <div className="md:hidden flex items-center gap-2">
                <button 
                  onClick={() => onNavigate && onNavigate('login')}
                  className="px-3 py-2 text-xs text-white/90 font-medium"
                >
                  Log In
                </button>
                <button 
                  onClick={() => onNavigate && onNavigate('signup')}
                  className="px-4 py-2 bg-brand-green text-black text-xs font-bold rounded-full shadow-lg shadow-brand-green/20"
                >
                  Sign Up
                </button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;