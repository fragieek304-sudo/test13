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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#0a0a0a] border border-gray-800 rounded-2xl shadow-2xl max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-800 bg-[#0a0a0a] rounded-t-2xl z-10">
          <h2 className="text-xl font-bold text-white">Privacy Policy</h2>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto text-gray-300 text-sm leading-relaxed space-y-6">
          <div>
            <p className="font-medium text-brand-green mb-2">Last updated: 02/12/25</p>
            <p>This Privacy Policy explains how I handle your personal data when you submit your information through my form.</p>
          </div>

          <section>
            <h3 className="text-white font-bold text-base mb-2">1. Data Controller</h3>
            <p>The person responsible for processing your data is:</p>
            <p className="font-semibold text-white mt-1">Francesco Giacchini</p>
            <p>Email: <a href="mailto:needlscan@gmail.com" className="text-brand-green hover:underline">needlscan@gmail.com</a></p>
            <p className="mt-1">I run this project personally and independently.</p>
          </section>

          <section>
            <h3 className="text-white font-bold text-base mb-2">2. What Data I Collect</h3>
            <p>When you submit the form, I collect:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Your email address</li>
              <li>The information you provide in the form</li>
            </ul>
            <p className="mt-2">I do not collect any additional data.</p>
          </section>

          <section>
            <h3 className="text-white font-bold text-base mb-2">3. Purpose of Processing</h3>
            <p>I use your data only to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Send you a single personalized email response based on your request.</li>
            </ul>
            <p className="mt-2">I do not send newsletters, marketing emails, or ongoing communications.</p>
          </section>

          <section>
            <h3 className="text-white font-bold text-base mb-2">4. Legal Basis</h3>
            <p>The legal basis for processing your data is your explicit consent, which you give when you submit the form and accept this Privacy Policy.</p>
          </section>

          <section>
            <h3 className="text-white font-bold text-base mb-2">5. Data Retention</h3>
            <p>Your data is stored temporarily:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>The email and form response are saved in a Google Sheet</li>
              <li>The file is deleted/reset every 24 hours</li>
            </ul>
            <p className="mt-2">After that, all personal data is removed.</p>
          </section>

          <section>
            <h3 className="text-white font-bold text-base mb-2">6. Services Used</h3>
            <p>To handle and send your message, I use:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>N8n (automation workflow)</li>
              <li>Google Sheets (temporary storage)</li>
            </ul>
            <p className="mt-2">These tools process your data only for technical reasons.</p>
            <p>I do not share or sell your data to anyone.</p>
          </section>

          <section>
            <h3 className="text-white font-bold text-base mb-2">7. Affiliate Links</h3>
            <p>The email you receive may contain affiliate links.</p>
            <p>If you make a purchase through one of these links, I may earn a commission at no additional cost to you.</p>
          </section>

          <section>
            <h3 className="text-white font-bold text-base mb-2">8. Your Data Rights</h3>
            <p>Under the GDPR, you can:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Request access to your data</li>
              <li>Ask for correction or deletion</li>
              <li>Withdraw your consent</li>
              <li>Request limits on how your data is used</li>
              <li>File a complaint with your Data Protection Authority</li>
            </ul>
            <p className="mt-2">To exercise these rights, email me at <a href="mailto:needlscan@gmail.com" className="text-brand-green hover:underline">needlscan@gmail.com</a>.</p>
          </section>

          <section>
            <h3 className="text-white font-bold text-base mb-2">9. Data Security</h3>
            <p>I take reasonable technical measures to keep your data safe during the short time it is stored.</p>
            <p>Since the data is deleted daily, long-term risks are minimized.</p>
          </section>

          <section>
            <h3 className="text-white font-bold text-base mb-2">10. Changes to This Privacy Policy</h3>
            <p>If I modify this Privacy Policy, I will update the date at the top of this page.</p>
          </section>

          <section className="pt-4 border-t border-gray-800">
            <h3 className="text-white font-bold text-base mb-2">Contact</h3>
            <p>For any questions about this Privacy Policy or your data, you can contact me at:</p>
            <p className="font-semibold text-white mt-2">Francesco Giacchini</p>
            <p>Email: <a href="mailto:needlscan@gmail.com" className="text-brand-green hover:underline">needlscan@gmail.com</a></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;