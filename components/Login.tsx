import React, { useState } from 'react';
import { Mail, Lock, ArrowLeft, Eye, EyeOff, Loader2 } from 'lucide-react';
import Logo from './Logo';
import { loginUser } from '../lib/auth';
import { User } from '../types';

interface LoginProps {
  onNavigate: (page: 'home' | 'login' | 'signup') => void;
  onLoginSuccess: (user: User) => void;
}

const Login: React.FC<LoginProps> = ({ onNavigate, onLoginSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const user = await loginUser(formData.email, formData.password);
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
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-brand-green/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-brand-green/5 rounded-full blur-[80px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
      </div>

      {/* Back Button - Smaller on Mobile */}
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
          
          <h2 className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2">Welcome back</h2>
          <p className="text-gray-400 text-xs md:text-sm">Please enter your details to sign in.</p>
        </div>

        {error && (
            <div className="mb-4 p-2.5 md:p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-xs md:text-sm text-center">
                {error}
            </div>
        )}

        <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label className="text-[10px] md:text-xs font-semibold text-gray-300 ml-1 uppercase tracking-wider">Email</label>
            <div className="relative group">
              <Mail className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-brand-green transition-colors" size={18} />
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="Enter your email" 
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
                placeholder="••••••••" 
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
          </div>

          <div className="flex items-center justify-between text-xs sm:text-sm">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="w-3.5 h-3.5 md:w-4 md:h-4 rounded border-gray-600 bg-white/5 text-brand-green focus:ring-brand-green/50 focus:ring-offset-0 cursor-pointer accent-brand-green" />
              <span className="text-gray-400 group-hover:text-gray-300 transition-colors">Remember me</span>
            </label>
            <a href="#" className="text-brand-green hover:text-green-400 font-medium transition-colors">Forgot password?</a>
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className="w-full bg-brand-green text-black font-bold py-3 md:py-3.5 rounded-xl hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm md:text-base"
          >
            {isLoading ? <Loader2 className="animate-spin" size={18} /> : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 md:mt-8 text-center">
          <p className="text-gray-400 text-xs md:text-sm">
            Don't have an account?{' '}
            <button 
              onClick={() => onNavigate('signup')}
              className="text-brand-green font-bold hover:text-green-400 hover:underline transition-colors"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;