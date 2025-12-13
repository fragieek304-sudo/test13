import React, { useState, useEffect } from 'react';
import { X, Send, MessageSquare, User, Mail, HelpCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { sendSupportMessage } from '../lib/auth';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Reset state after close animation would finish
      setTimeout(() => {
        setIsSuccess(false);
        setIsLoading(false);
        setError(null);
        setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
      }, 300);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Minimum loading time for better UX
      await Promise.all([
        sendSupportMessage(formData.name, formData.email, formData.subject, formData.message),
        new Promise(resolve => setTimeout(resolve, 1500))
      ]);

      setIsSuccess(true);

      // Close modal after showing success message briefly
      setTimeout(() => {
          onClose();
      }, 2500);

    } catch (err) {
      console.error(err);
      setError("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-lg bg-[#0a0a0a] border border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-green/5 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-800 bg-[#0a0a0a]/80 backdrop-blur-sm z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-brand-green/10 rounded-xl text-brand-green">
                <MessageSquare size={20} />
            </div>
            <div>
                <h2 className="text-lg md:text-xl font-bold text-white">Customer Support</h2>
                <p className="text-gray-500 text-xs">We are here to help you</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-5 md:p-8 z-10 overflow-y-auto custom-scrollbar">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-10 animate-in zoom-in duration-300">
                <div className="w-16 h-16 bg-brand-green/20 rounded-full flex items-center justify-center mb-4 text-brand-green">
                    <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400 text-center max-w-xs">
                    Thank you for contacting us. We will get back to you at <strong>{formData.email}</strong> shortly.
                </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm text-center">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-400 ml-1 uppercase tracking-wider">Name</label>
                        <div className="relative group">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-brand-green transition-colors" size={16} />
                            <input 
                                type="text" 
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                placeholder="Your Name" 
                                className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3 pl-10 pr-4 text-sm outline-none focus:border-brand-green/50 focus:bg-white/10 focus:ring-1 focus:ring-brand-green/50 transition-all placeholder:text-gray-600"
                            />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-400 ml-1 uppercase tracking-wider">Email</label>
                        <div className="relative group">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-brand-green transition-colors" size={16} />
                            <input 
                                type="email" 
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                placeholder="you@example.com" 
                                className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3 pl-10 pr-4 text-sm outline-none focus:border-brand-green/50 focus:bg-white/10 focus:ring-1 focus:ring-brand-green/50 transition-all placeholder:text-gray-600"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-400 ml-1 uppercase tracking-wider">Subject</label>
                    <div className="relative group">
                        <HelpCircle className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-brand-green transition-colors" size={16} />
                        <select 
                            value={formData.subject}
                            onChange={(e) => setFormData({...formData, subject: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3 pl-10 pr-4 text-sm outline-none focus:border-brand-green/50 focus:bg-white/10 focus:ring-1 focus:ring-brand-green/50 transition-all appearance-none cursor-pointer"
                        >
                            <option value="General Inquiry" className="bg-[#0a0a0a]">General Inquiry</option>
                            <option value="Technical Support" className="bg-[#0a0a0a]">Technical Support</option>
                            <option value="Feedback" className="bg-[#0a0a0a]">Feedback</option>
                            <option value="Partnership" className="bg-[#0a0a0a]">Partnership</option>
                            <option value="Other" className="bg-[#0a0a0a]">Other</option>
                        </select>
                         <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-400 ml-1 uppercase tracking-wider">Message</label>
                    <textarea 
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="How can we help you today?" 
                        rows={3}
                        className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3 px-4 text-sm outline-none focus:border-brand-green/50 focus:bg-white/10 focus:ring-1 focus:ring-brand-green/50 transition-all placeholder:text-gray-600 resize-none"
                    />
                </div>

                <div className="pt-2">
                    <button 
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-brand-green text-black font-bold py-3.5 rounded-xl hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isLoading ? (
                            <Loader2 className="animate-spin" size={18} />
                        ) : (
                            <>
                                <span>Send Message</span>
                                <Send size={18} />
                            </>
                        )}
                    </button>
                    <p className="text-[10px] text-gray-500 text-center mt-3 leading-tight">
                        By contacting us, you agree to our <span className="hover:text-gray-300 cursor-pointer underline">Terms</span> and <span className="hover:text-gray-300 cursor-pointer underline">Privacy Policy</span>.
                    </p>
                </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SupportModal;