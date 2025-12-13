import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
          <h2 className="text-lg font-bold text-white">Terms & Conditions</h2>
          <button 
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors bg-white/5"
          >
            <X size={18} />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 overflow-y-auto custom-scrollbar text-gray-300 text-xs leading-relaxed space-y-5">
          <div>
            <p className="font-medium text-brand-green mb-2">Last updated: 09/12/25</p>
            <p>By using the form or subscribing, you agree to these Terms.</p>
          </div>

          <section>
            <h3 className="text-white font-bold text-sm mb-1">1. About This Service</h3>
            <p>Run independently by Francesco Giacchini. It provides a single personalized email response or an optional newsletter.</p>
          </section>

          <section>
            <h3 className="text-white font-bold text-sm mb-1">2. Use of the Service</h3>
            <p>You confirm you are at least 16 years old and provide accurate information.</p>
          </section>

          <section>
            <h3 className="text-white font-bold text-sm mb-1">3. Newsletter</h3>
            <p>Sent only if explicitly requested. You can unsubscribe anytime by emailing "Unsubscribe".</p>
          </section>

          <section>
            <h3 className="text-white font-bold text-sm mb-1">4. Recommendations</h3>
            <p>Information provided is based on personal judgment and is not professional advice. Use at your own discretion.</p>
          </section>

          <section>
            <h3 className="text-white font-bold text-sm mb-1">5. Liability</h3>
            <p>I am not responsible for decisions made based on this information or interactions with third parties.</p>
          </section>

          <section>
            <h3 className="text-white font-bold text-sm mb-1">6. Data Handling</h3>
            <p>See Privacy Policy. Data is deleted daily (for forms) or stored until unsubscribe (for newsletter).</p>
          </section>

          <section className="pt-4 border-t border-white/5">
            <h3 className="text-white font-bold text-sm mb-1">Contact</h3>
            <p className="font-semibold text-white">Francesco Giacchini</p>
            <p>Email: <a href="mailto:needlscan@gmail.com" className="text-brand-green hover:underline">needlscan@gmail.com</a></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;