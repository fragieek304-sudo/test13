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
    if (label === 'FAQ') {
        e.preventDefault();
        setIsFAQOpen(true);
    } else if (label === 'Customer Support') {
        e.preventDefault();
        setIsSupportOpen(true);
    }
    // Add other link handlers here if needed
  };

  return (
    <footer className="bg-brand-dark border-t border-gray-900 px-4 md:px-8 lg:px-16 pt-10 md:pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4 md:mb-6">
            {/* Logo Component - Increased rounding */}
            <Logo className="w-8 h-8 rounded-xl" />
            <span className="text-xl font-bold text-white">NeedlScan</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
            The smart way to cut digital noise and focus on what really matters.
          </p>
        </div>

        {/* Links Columns */}
        <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
          {FOOTER_LINKS.map((section, idx) => (
            <div key={idx} className="col-span-1">
              <h4 className="text-white font-bold mb-4 md:mb-6 text-sm md:text-base">{section.title}</h4>
              <ul className="space-y-3 md:space-y-4">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a 
                      href={link.href} 
                      onClick={(e) => handleLinkClick(e, link.label)}
                      className="text-gray-400 hover:text-brand-green transition-colors text-xs md:text-sm cursor-pointer block"
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

      {/* Bottom Bar */}
      <div className="pt-6 md:pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
        <div className="flex gap-6 text-gray-500 order-2 md:order-1">
           <Facebook size={18} className="hover:text-white cursor-pointer" />
           <Twitter size={18} className="hover:text-white cursor-pointer" />
           <a 
             href="https://www.instagram.com/needlscan?igsh=MXI4eGRqbHI3eWY1Ng==" 
             target="_blank" 
             rel="noopener noreferrer"
             className="hover:text-white cursor-pointer transition-colors"
           >
             <Instagram size={18} />
           </a>
           <Linkedin size={18} className="hover:text-white cursor-pointer" />
        </div>
        <p className="text-gray-600 text-[10px] md:text-xs text-center md:text-right order-1 md:order-2 flex flex-wrap justify-center gap-1">
          <button 
            onClick={() => setIsTermsOpen(true)}
            className="hover:text-brand-green transition-colors underline decoration-gray-700 underline-offset-2 hover:decoration-brand-green"
          >
            Terms & Conditions
          </button>
          <span> - </span>
          <button 
            onClick={() => setIsPrivacyOpen(true)}
            className="hover:text-brand-green transition-colors underline decoration-gray-700 underline-offset-2 hover:decoration-brand-green"
          >
            Privacy Policy
          </button>
          <span className="w-full md:w-auto mt-1 md:mt-0"> - © 2025 NeedlScan</span>
        </p>
      </div>

      <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <FAQModal 
        isOpen={isFAQOpen} 
        onClose={() => setIsFAQOpen(false)} 
        onContactClick={() => setIsSupportOpen(true)}
      />
      <SupportModal isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />
    </footer>
  );
};

export default Footer;