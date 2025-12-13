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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#0a0a0a] border border-gray-800 rounded-2xl shadow-2xl max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-800 bg-[#0a0a0a] rounded-t-2xl z-10">
          <h2 className="text-xl font-bold text-white">Terms & Conditions</h2>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto text-gray-300 text-sm leading-relaxed space-y-6">
          <div>
            <p className="font-medium text-brand-green mb-2">Last updated: 09/12/25</p>
            <p>These Terms & Conditions govern the use of this website and the services I personally provide through this platform. By using the form or subscribing to the newsletter, you agree to these Terms.</p>
          </div>

          <section>
            <h3 className="text-white font-bold text-base mb-2">1. About This Service</h3>
            <p>This project is run personally and independently by Francesco Giacchini.</p>
            <p>The primary function of this website is to allow you to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Submit a form and receive a single personalized email response, or</li>
              <li>Subscribe to an optional email newsletter (only if you actively choose to do so)</li>
            </ul>
            <p className="mt-2">No ongoing emails are sent unless you explicitly request them.</p>
          </section>

          <section>
            <h3 className="text-white font-bold text-base mb-2">2. Use of the Service</h3>
            <p>By using this website, you confirm that:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>You will provide accurate and truthful information</li>
              <li>You are at least 16 years old (or have parental consent if required by law)</li>
              <li>You understand that submitting the form results in one email response only, unless you also subscribe to the newsletter</li>
            </ul>
            <p className="mt-2">I may refuse or discontinue the service if necessary.</p>
          </section>

          <section>
            <h3 className="text-white font-bold text-base mb-2">3. Newsletter Subscription</h3>
            <p>You will only receive newsletter emails or news updates if:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>You manually subscribe by checking the appropriate box, and</li>
              <li>You consent to receive email communications</li>
            </ul>
            <p className="mt-2">If you do not select the newsletter option, you will not receive any recurring emails.</p>
            
            <p className="font-semibold text-white mt-4 mb-1">Unsubscribe</p>
            <p>You can unsubscribe at any time by sending an email to:</p>
            <p><a href="mailto:needlscan@gmail.com" className="text-brand-green hover:underline">needlscan@gmail.com</a></p>
            <p>with the message: “Unsubscribe”</p>
            <p className="mt-1">Once processed, you will no longer receive any emails.</p>
          </section>

          <section>
            <h3 className="text-white font-bold text-base mb-2">4. Recommendations and Information</h3>
            <p>Any suggestions, recommendations, or informational content provided through the single email reply or newsletter:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Are based on personal judgment and publicly available information</li>
              <li>Do not constitute professional, financial, or legal advice</li>
              <li>Should be evaluated independently by you</li>
            </ul>
            <p className="mt-2">You use the provided information at your own discretion.</p>
          </section>

          <section>
            <h3 className="text-white font-bold text-base mb-2">5. Limitation of Liability</h3>
            <p>To the fullest extent permitted by law, I am not responsible for:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Any decisions you make based on the information provided</li>
              <li>Any interactions you have with external websites, services, or third parties</li>
              <li>Any damages or losses resulting from the use of this service or external content</li>
            </ul>
            <p className="mt-2">Your use of this service is entirely at your own risk.</p>
          </section>

          <section>
            <h3 className="text-white font-bold text-base mb-2">6. Data Handling</h3>
            <p>Your personal data is handled according to the Privacy Policy, which you must read and accept before submitting any form or subscribing to the newsletter.</p>
            <p className="mt-2 font-semibold text-white">Key points:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>For form submissions: your data is used only to send one personalized email and is deleted within 3 days.</li>
              <li>For newsletter subscribers: your data is stored only for email delivery purposes until you unsubscribe.</li>
              <li>You can withdraw consent at any time by emailing <a href="mailto:needlscan@gmail.com" className="text-brand-green hover:underline">needlscan@gmail.com</a> with the word “Unsubscribe”.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-white font-bold text-base mb-2">7. Intellectual Property</h3>
            <p>All content on this website is owned by me unless stated otherwise.</p>
            <p>You may not reproduce or redistribute this content without permission.</p>
          </section>

          <section>
            <h3 className="text-white font-bold text-base mb-2">8. Changes to These Terms</h3>
            <p>I may update these Terms occasionally.</p>
            <p>The updated version will always be available on this page, with the modification date shown above.</p>
            <p className="mt-1">Your continued use of the site means you accept the updated Terms.</p>
          </section>

          <section className="pt-4 border-t border-gray-800">
            <h3 className="text-white font-bold text-base mb-2">9. Contact</h3>
            <p>For questions about these Terms & Conditions, you can contact me at:</p>
            <p className="font-semibold text-white mt-2">Francesco Giacchini</p>
            <p>Email: <a href="mailto:needlscan@gmail.com" className="text-brand-green hover:underline">needlscan@gmail.com</a></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;