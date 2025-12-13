import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
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
          <h2 className="text-lg font-bold text-white">Privacy Policy</h2>
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
            <p className="font-medium text-brand-green mb-2">Last updated: 02/12/25</p>
            <p>This Privacy Policy explains how I handle your personal data when you submit your information through my form.</p>
          </div>

          <section>
            <h3 className="text-white font-bold text-sm mb-1">1. Data Controller</h3>
            <p>The person responsible for processing your data is:</p>
            <p className="font-semibold text-white mt-1">Francesco Giacchini</p>
            <p>Email: <a href="mailto:needlscan@gmail.com" className="text-brand-green hover:underline">needlscan@gmail.com</a></p>
          </section>

          <section>
            <h3 className="text-white font-bold text-sm mb-1">2. What Data I Collect</h3>
            <ul className="list-disc pl-4 mt-1 space-y-1 marker:text-gray-500">
              <li>Your email address</li>
              <li>The information you provide in the form</li>
            </ul>
          </section>

          <section>
            <h3 className="text-white font-bold text-sm mb-1">3. Purpose of Processing</h3>
            <p>I use your data only to send you a single personalized email response based on your request.</p>
          </section>

          <section>
            <h3 className="text-white font-bold text-sm mb-1">4. Legal Basis</h3>
            <p>The legal basis is your explicit consent given when submitting the form.</p>
          </section>

          <section>
            <h3 className="text-white font-bold text-sm mb-1">5. Data Retention</h3>
            <p>Data is deleted/reset every 24 hours from the temporary storage.</p>
          </section>

          <section>
            <h3 className="text-white font-bold text-sm mb-1">6. Services Used</h3>
            <p>N8n (automation) and Google Sheets (temporary storage).</p>
          </section>

          <section>
            <h3 className="text-white font-bold text-sm mb-1">7. Affiliate Links</h3>
            <p>Emails may contain affiliate links which generate a commission at no cost to you.</p>
          </section>

          <section>
            <h3 className="text-white font-bold text-sm mb-1">8. Your Data Rights</h3>
            <p>You can request access, correction, or deletion at any time by emailing me.</p>
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

export default PrivacyPolicyModal;