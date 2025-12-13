import React, { useEffect, useState } from 'react';
import { X, ChevronDown, HelpCircle } from 'lucide-react';

interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

const FAQ_DATA = [
  {
    q: "What exactly is NeedlScan?",
    a: "NeedlScan is an intelligent search and selection service that acts as a filter between you and the wide range of freelance services available online. Instead of having you navigate large generalist marketplaces, NeedlScan analyzes your need and recommends only the most relevant and high-quality options already present on those platforms."
  },
  {
    q: "How does it work?",
    a: "It works in three simple steps:\n1) Describe your project or need on the platform.\n2) The intelligent matching engine scans and analyzes hundreds of existing, pre-selected offers online.\n3) You receive a curated and explained selection of the freelancers or services most suitable for you, based on relevance, quality, and budget."
  },
  {
    q: "Is NeedlScan a new freelance marketplace?",
    a: "No, the service is not a marketplace. We do not host or manage freelancers directly. The platform is a search and filtering tool that helps you navigate the existing offer, saving you time and confusion."
  },
  {
    q: "Why should I use NeedlScan instead of searching directly?",
    a: "Because the platform is designed and built for the purpose of minimizing the time required during this phase. Large portals can be overwhelming, with duplicate, generic, or uncertain quality offers. NeedlScan does the work of filtering, comparison, and final redirection for you, delivering only the most promising choices. All of this is completely free."
  },
  {
    q: "Is the service really free?",
    a: "Yes, using NeedlScan is completely free for users looking for a freelancer. When you purchase a suggested service and the order is delivered and approved, we may receive small affiliate commissions. For you, there are no extra costs."
  },
  {
    q: "How do you guarantee the quality of the recommendations?",
    a: "The scanning engine selects and filters offers using over 670 pre-selected and verified freelancers, having taken into consideration factors such as specific relevance, verified reviews, value for money, and seller reliability. The main goal is precision, not quantity."
  },
  {
    q: "Can I specify a budget?",
    a: "Absolutely yes. During the phase of describing your need, you can (and it is required to) indicate your budget. The system will take it into account to propose options that align with your resources, helping you avoid wasting time with offers outside your range."
  },
  {
    q: "Do you cover all types of freelance services?",
    a: "The goal has been to cover a wide range of digital and professional services, including 12 macro-categories with well 108 sub-categories, ranging from web design and copywriting to programming, graphics, marketing, AI, music, video, finance, and much more."
  },
  {
    q: "How long does it take to get the results?",
    a: "The scanning process is fast. In a few minutes, often in about 60 seconds, you will receive your personalized selection. The time you save is what you would normally spend in hours of scrolling, comparisons, and manual evaluations."
  },
  {
    q: "What is the platform's ultimate goal?",
    a: "The vision for this service is to become the trusted tool for anyone who needs to choose a freelance service in the vast digital world, thus being the reference \"intelligent filter\" that transforms a chaotic and risky process into a simple, safe, and informed choice."
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
        className={`w-full py-5 px-3 flex items-center justify-between text-left transition-colors duration-300 group ${isOpen ? 'text-brand-green' : 'text-gray-200 hover:text-white'}`}
      >
        <span className="font-semibold text-base md:text-lg pr-4 leading-tight">{item.q}</span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border border-white/10 transition-all duration-300 ${isOpen ? 'bg-brand-green/10 border-brand-green/50 rotate-180' : 'bg-white/5 group-hover:bg-white/10'}`}>
           <ChevronDown 
             className={`transition-colors duration-300 ${isOpen ? 'text-brand-green' : 'text-gray-400'}`} 
             size={18} 
           />
        </div>
      </button>
      <div 
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <div className="pb-6 px-3 text-gray-400 leading-relaxed text-sm md:text-base">
            {item.a.split('\n').map((line, i) => (
               <p key={i} className={i > 0 ? 'mt-2 pl-4 border-l-2 border-brand-green/20' : ''}>
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
      setOpenIndex(null); // Reset state on close
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-3xl bg-[#0a0a0a] border border-gray-800 rounded-2xl shadow-2xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 md:p-8 border-b border-gray-800 bg-[#0a0a0a] rounded-t-2xl z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-brand-green/10 rounded-xl text-brand-green">
                <HelpCircle size={24} />
            </div>
            <div>
                <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
                <p className="text-gray-500 text-sm">Everything you need to know about NeedlScan</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-4 md:p-8 overflow-y-auto custom-scrollbar">
          <div className="space-y-1">
             {FAQ_DATA.map((item, index) => (
                <FAQItem 
                   key={index} 
                   item={item} 
                   isOpen={openIndex === index} 
                   toggle={() => toggleItem(index)} 
                />
             ))}
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-gray-500 text-sm">
                Still have questions? 
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