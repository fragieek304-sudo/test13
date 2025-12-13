import React, { useEffect, useState } from 'react';
import { X, ChevronDown, HelpCircle } from 'lucide-react';

interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

const FAQ_DATA = [
  {
    q: "What is NeedlScan?",
    a: "NeedlScan acts as a filter between you and freelance marketplaces. We analyze your need and recommend the best pre-verified options, saving you hours of searching."
  },
  {
    q: "How does it work?",
    a: "1) Describe your project.\n2) Our engine scans hundreds of offers.\n3) You receive a curated selection of the best matches."
  },
  {
    q: "Is it a marketplace?",
    a: "No. We don't host freelancers. We are a search tool that redirects you to the best existing offers on major platforms."
  },
  {
    q: "Why use it?",
    a: "To save time and avoid bad hires. Large portals are chaotic; we curate the best options for you for free."
  },
  {
    q: "Is it free?",
    a: "Yes, completely free for you. We may earn a small affiliate commission if you purchase a service we recommend."
  },
  {
    q: "How do you guarantee quality?",
    a: "We scan over 670 verified freelancers, checking reviews, reliability, and value for money before recommending them."
  },
  {
    q: "Can I set a budget?",
    a: "Yes. You indicate your budget, and we find the best options that fit within your range."
  },
  {
    q: "What services do you cover?",
    a: "12 macro-categories including Design, Marketing, Tech, AI, Writing, Video, and more."
  },
  {
    q: "How fast is it?",
    a: "You get results in minutes, often around 60 seconds."
  }
];

interface FAQItemProps {
  item: { q: string; a: string };
  isOpen: boolean;
  toggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ item, isOpen, toggle }) => {
  return (
    <div className="border-b border-white/5 last:border-none">
      <button 
        onClick={toggle}
        className={`w-full py-3 px-1 flex items-center justify-between text-left transition-colors duration-200 ${isOpen ? 'text-brand-green' : 'text-gray-200 hover:text-white'}`}
      >
        <span className="font-semibold text-xs md:text-sm pr-4 leading-snug">{item.q}</span>
        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center border border-white/10 transition-all duration-300 ${isOpen ? 'bg-brand-green/10 border-brand-green/50 rotate-180' : 'bg-white/5'}`}>
           <ChevronDown 
             className={`transition-colors duration-300 ${isOpen ? 'text-brand-green' : 'text-gray-400'}`} 
             size={14} 
           />
        </div>
      </button>
      <div 
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <div className="pb-3 px-1 text-gray-400 leading-relaxed text-xs">
            {item.a.split('\n').map((line, i) => (
               <p key={i} className={i > 0 ? 'mt-1.5' : ''}>
                 {line}
               </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQModal: React.FC<FAQModalProps> = ({ isOpen, onClose, onContactClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setOpenIndex(null);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center md:items-center px-4 pb-6 md:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Floating Card Container */}
      <div 
        className="relative w-full max-w-lg bg-[#121212] border border-white/10 rounded-3xl shadow-2xl max-h-[70vh] md:max-h-[85vh] flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* iOS-style Drag Handle (Visual only) */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-1 bg-white/20 rounded-full md:hidden z-20"></div>

        {/* Header */}
        <div className="flex items-center justify-between pt-8 pb-4 px-6 md:pt-6 md:pb-6 border-b border-white/5 bg-[#121212] z-10 shrink-0">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-brand-green/10 rounded-lg text-brand-green">
                <HelpCircle size={16} />
            </div>
            <h2 className="text-lg font-bold text-white">FAQ</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors bg-white/5"
          >
            <X size={18} />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 overflow-y-auto custom-scrollbar pb-8">
          <div className="space-y-0.5">
             {FAQ_DATA.map((item, index) => (
                <FAQItem 
                   key={index} 
                   item={item} 
                   isOpen={openIndex === index} 
                   toggle={() => toggleItem(index)} 
                />
             ))}
          </div>

          <div className="mt-6 pt-6 border-t border-white/5 text-center">
            <p className="text-gray-500 text-xs">
                Need more help? 
                <button 
                  onClick={() => { onClose(); onContactClick(); }}
                  className="text-brand-green hover:underline font-medium ml-1"
                >
                  Contact Support
                </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQModal;