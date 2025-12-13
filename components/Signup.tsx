import React, { useState } from 'react';
import { Mail, Lock, User, ArrowLeft, Eye, EyeOff, Loader2 } from 'lucide-react';
import Logo from './Logo';
import { signupUser } from '../lib/auth';
import { User as UserType } from '../types';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import TermsModal from './TermsModal';

interface SignupProps {
  onNavigate: (page: 'home' | 'login' | 'signup') => void;
  onLoginSuccess: (user: UserType) => void;
}

const Signup: React.FC<SignupProps> = ({ onNavigate, onLoginSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [newsletter, setNewsletter] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password.length < 8) {
        setError("Password must be at least 8 characters long");
        return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Pass the newsletter boolean to the signup function
      const user = await signupUser(formData.name, formData.email, formData.password, newsletter);
      onLoginSuccess(user);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-brand-dark flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-brand-green/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-brand-green/5 rounded-full blur-[80px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
      </div>

      {/* Back Button - Smaller on mobile */}
      <button 
        onClick={() => onNavigate('home')}
        className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors group z-20"
      >
        <div className="p-1.5 md:p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-brand-green/50 transition-colors">
          <ArrowLeft size={16} className="md:w-5 md:h-5" />
        </div>
        <span className="font-medium text-xs md:text-sm hidden md:inline">Back to Home</span>
      </button>

      {/* Main Card */}
      <div className="w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-10 shadow-2xl relative z-10 animate-in fade-in zoom-in-95 duration-500">
        <div className="text-center mb-5 md:mb-8">
          <div className="mb-4 md:mb-6 flex justify-center">
            <Logo className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl shadow-[0_0_25px_rgba(34,197,94,0.4)] transition-transform hover:scale-105 duration-300" />
          </div>
          <h2 className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2">Create Account</h2>
          <p className="text-gray-400 text-xs md:text-sm">Join NeedlScan and start your journey.</p>
        </div>

        {error && (
            <div className="mb-4 p-2.5 md:p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-xs md:text-sm text-center">
                {error}
            </div>
        )}

        <form className="space-y-3 md:space-y-4" onSubmit={handleSubmit}>
          
          <div className="space-y-1">
            <label className="text-[10px] md:text-xs font-semibold text-gray-300 ml-1 uppercase tracking-wider">Full Name</label>
            <div className="relative group">
              <User className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-brand-green transition-colors" size={18} />
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="John Doe" 
                className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3 pl-10 md:pl-12 pr-4 text-sm outline-none focus:border-brand-green/50 focus:bg-white/10 focus:ring-1 focus:ring-brand-green/50 transition-all placeholder:text-gray-600"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] md:text-xs font-semibold text-gray-300 ml-1 uppercase tracking-wider">Email</label>
            <div className="relative group">
              <Mail className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-brand-green transition-colors" size={18} />
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="name@example.com" 
                className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3 pl-10 md:pl-12 pr-4 text-sm outline-none focus:border-brand-green/50 focus:bg-white/10 focus:ring-1 focus:ring-brand-green/50 transition-all placeholder:text-gray-600"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] md:text-xs font-semibold text-gray-300 ml-1 uppercase tracking-wider">Password</label>
            <div className="relative group">
              <Lock className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-brand-green transition-colors" size={18} />
              <input 
                type={showPassword ? "text" : "password"} 
                required
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                placeholder="Create a password" 
                className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3 pl-10 md:pl-12 pr-10 md:pr-12 text-sm outline-none focus:border-brand-green/50 focus:bg-white/10 focus:ring-1 focus:ring-brand-green/50 transition-all placeholder:text-gray-600"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors focus:outline-none p-1"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <p className="text-[10px] text-gray-500 ml-1">Must be at least 8 characters</p>
          </div>

          {/* Newsletter Checkbox */}
          <div className="flex items-start gap-3 mt-2">
            <div className="relative flex items-center">
              <input
                type="checkbox"
                id="newsletter"
                checked={newsletter}
                onChange={(e) => setNewsletter(e.target.checked)}
                className="peer h-4 w-4 md:h-5 md:w-5 cursor-pointer appearance-none rounded border border-gray-600 bg-white/5 transition-all checked:border-brand-green checked:bg-brand-green hover:border-brand-green/50 focus:ring-2 focus:ring-brand-green/30 focus:ring-offset-0"
              />
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 md:h-3.5 md:w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <label htmlFor="newsletter" className="cursor-pointer select-none text-xs md:text-sm text-gray-400 hover:text-gray-300">
              Subscribe to our newsletter for updates
            </label>
          </div>

          <div className="pt-1 md:pt-2">
            <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-brand-green text-black font-bold py-3 md:py-3.5 rounded-xl hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm md:text-base"
            >
              {isLoading ? <Loader2 className="animate-spin" size={18} /> : 'Create Account'}
            </button>
          </div>
        </form>

        <p className="text-[10px] text-center text-gray-500 mt-4 md:mt-6 leading-relaxed">
          By clicking "Create Account", you agree to our 
          <button 
            type="button"
            onClick={() => setIsTermsOpen(true)}
            className="text-gray-300 hover:text-brand-green ml-1 transition-colors underline"
          >
            Terms of Service
          </button> and 
          <button 
            type="button"
            onClick={() => setIsPrivacyOpen(true)}
            className="text-gray-300 hover:text-brand-green ml-1 transition-colors underline"
          >
            Privacy Policy
          </button>.
        </p>

        <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/10 text-center">
          <p className="text-gray-400 text-xs md:text-sm">
            Already have an account?{' '}
            <button 
              onClick={() => onNavigate('login')}
              className="text-brand-green font-bold hover:text-green-400 hover:underline transition-colors"
            >
              Log in
            </button>
          </p>
        </div>
      </div>

      <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </div>
  );
};

export default Signup;