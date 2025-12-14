import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { FOOTER_LINKS } from '../constants';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import TermsModal from './TermsModal';
import FAQModal from './FAQModal';
import SupportModal from './SupportModal';
import Logo from './Logo';

const Footer: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isFAQOpen, setIsFAQOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent, label: string) => {
    if (label === 'FAQ' || label === 'Customer Support') {
        e.preventDefault();
        if (label === 'FAQ') setIsFAQOpen(true);
        if (label === 'Customer Support') setIsSupportOpen(true);
    }
  };

  return (
    <footer className="bg-brand-dark border-t border-gray-900 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        
        {/* Main Layout: Flex container to separate Brand (Left) from Links (Right) */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-8 mb-12 md:mb-16">
          
          {/* Brand Section - Fixed width or max-width for stability */}
          <div className="flex flex-col items-center md:items-start md:max-w-xs text-center md:text-left">
            <div className="flex items-center gap-3 mb-4 md:mb-5">
              <Logo className="w-10 h-10 rounded-xl" />
              <span className="text-2xl font-bold text-white tracking-tight leading-none pt-1">NeedlScan</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              The smart way to cut digital noise and focus on what really matters.
            </p>
          </div>

          {/* Links Section - Horizontal on mobile (3 columns) instead of vertical stack */}
          <div className="grid grid-cols-3 gap-4 sm:gap-10 md:gap-16 w-full md:w-auto text-center md:text-left">
            {FOOTER_LINKS.map((section, idx) => (
              <div key={idx} className="flex flex-col">
                <h4 className="text-white font-bold mb-4 md:mb-6 text-xs md:text-sm uppercase tracking-widest">{section.title}</h4>
                <ul className="space-y-3 md:space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a 
                        href={link.href} 
                        onClick={(e) => handleLinkClick(e, link.label)}
                        className="text-gray-400 hover:text-brand-green transition-colors text-xs md:text-sm font-medium hover:translate-x-1 duration-200 inline-block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Bar - Organized and Aligned */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Copyright & Legal */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-xs text-gray-500 font-medium order-2 md:order-1">
                <p>© 2025 NeedlScan. All rights reserved.</p>
                <div className="hidden md:block w-1 h-1 bg-gray-700 rounded-full"></div>
                <div className="flex gap-6">
                    <button onClick={() => setIsTermsOpen(true)} className="hover:text-brand-green transition-colors underline">Terms & Conditions</button>
                    <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-brand-green transition-colors underline">Privacy Policy</button>
                </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 text-gray-400 order-1 md:order-2">
               <div className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 hover:text-white cursor-pointer transition-all hover:scale-110">
                  <Facebook size={18} />
               </div>
               <div className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 hover:text-white cursor-pointer transition-all hover:scale-110">
                  <Twitter size={18} />
               </div>
               <a 
                 href="https://www.instagram.com/needlscan?igsh=MXI4eGRqbHI3eWY1Ng==" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 hover:text-white cursor-pointer transition-all hover:scale-110"
               >
                 <Instagram size={18} />
               </a>
               <div className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 hover:text-white cursor-pointer transition-all hover:scale-110">
                  <Linkedin size={18} />
               </div>
            </div>

        </div>

      </div>

      {/* Modals */}
      <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <FAQModal isOpen={isFAQOpen} onClose={() => setIsFAQOpen(false)} onContactClick={() => setIsSupportOpen(true)} />
      <SupportModal isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />
    </footer>
  );
};

export default Footer;