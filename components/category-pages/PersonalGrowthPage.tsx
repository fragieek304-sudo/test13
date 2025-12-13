import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  Sprout, 
  Dumbbell, 
  Brain, 
  Sparkles, 
  Gamepad2, 
  Award, 
  Heart, 
  Target, 
  ArrowRight,
  Activity,
  Zap,
  UserCheck,
  TrendingUp,
  Timer
} from 'lucide-react';

interface PersonalGrowthPageProps {
  onBack: () => void;
}

const PersonalGrowthPage: React.FC<PersonalGrowthPageProps> = ({ onBack }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMatchClick = (param: string) => {
    window.open(`https://tally.so/r/mOMp77?service=${param}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-brand-green selection:text-black pt-16 md:pt-20">
      
      {/* 1. HEADER PRINCIPALE: COMPACT */}
      <section className="relative px-5 md:px-8 lg:px-16 pt-6 pb-10 md:pt-20 md:pb-24 overflow-hidden">
        
        {/* Background Particles */}
        <div className="absolute top-20 left-[20%] w-2 h-2 bg-brand-green rounded-full opacity-50 animate-bounce delay-75"></div>
        <div className="absolute bottom-40 right-[15%] w-3 h-3 bg-white rounded-full opacity-20 animate-pulse"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <button 
            onClick={onBack}
            className="mb-6 md:mb-8 inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-all text-xs md:text-sm group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Torna alle Categorie
          </button>

          <div className="mb-3 md:mb-4 flex items-center gap-2 px-2.5 py-0.5 md:px-3 md:py-1 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green text-[10px] md:text-xs font-bold uppercase tracking-wider">
             <Activity size={12} className="animate-pulse" /> Performance Mode
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 md:mb-6 leading-tight">
            Raggiungi il Tuo <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-white">
              Potenziale.
            </span>
          </h1>
          
          <p className="text-sm md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed px-2">
            Accedi a coach di Fitness, esperti di Wellness e specialisti di performance mentale. 
            <span className="text-white block mt-1 md:mt-2 font-medium">Investi su te stesso con un piano su misura.</span>
          </p>

          <button 
            onClick={() => handleMatchClick('general_growth')}
            className="w-full md:w-auto inline-flex justify-center items-center gap-3 px-6 py-3.5 md:px-8 md:py-4 bg-brand-green text-black font-bold text-base md:text-lg rounded-xl md:rounded-full hover:bg-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-xl group border-2 border-transparent"
          >
            Trova il Tuo Coach
            <TrendingUp size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* 2. VANTAGGI (Horizontal Compact Rows on Mobile) */}
      <section className="px-5 md:px-8 lg:px-16 py-8 md:py-12 border-y border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          
          {/* Card 1 */}
          <div className="group p-5 md:p-8 rounded-xl md:rounded-3xl bg-[#0f0f0f] border border-white/10 hover:border-brand-green transition-all duration-300 relative overflow-hidden flex md:block items-start gap-4">
             <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-black transition-colors shadow-lg md:mb-6">
               <UserCheck size={20} className="md:w-6 md:h-6" strokeWidth={2} />
             </div>
             <div>
                <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-3">Piani Certificati</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                Match con trainer e coach in possesso di certificazioni riconosciute.
                </p>
             </div>
          </div>

          {/* Card 2 */}
          <div className="group p-5 md:p-8 rounded-xl md:rounded-3xl bg-[#0f0f0f] border border-white/10 hover:border-brand-green transition-all duration-300 relative overflow-hidden flex md:block items-start gap-4">
             <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-black transition-colors shadow-lg md:mb-6">
               <Sprout size={20} className="md:w-6 md:h-6" strokeWidth={2} />
             </div>
             <div>
                <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-3">Benessere Olistico</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                Approccio a 360°: fisica, mentale, estetica e strategica.
                </p>
             </div>
          </div>

          {/* Card 3 */}
          <div className="group p-5 md:p-8 rounded-xl md:rounded-3xl bg-[#0f0f0f] border border-white/10 hover:border-brand-green transition-all duration-300 relative overflow-hidden flex md:block items-start gap-4">
             <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-black transition-colors shadow-lg md:mb-6">
               <Zap size={20} className="md:w-6 md:h-6" strokeWidth={2} />
             </div>
             <div>
                <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-3">Obiettivi Reali</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                Roadmap chiare e misurabili, monitorando il progresso settimanale.
                </p>
             </div>
          </div>

        </div>
      </section>

      {/* 3. AREE DI APPLICAZIONE (Horizontal Rectangles on Mobile) */}
      <section className="px-5 md:px-8 lg:px-16 py-12 md:py-20 relative bg-[#050505]">
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-8 md:mb-16">
             <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">Scegli il Tuo Percorso</h2>
             <p className="text-gray-400 text-xs md:text-sm">Quattro pilastri per la tua evoluzione.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8">
            
            {/* 1. Fitness */}
            <div 
                onClick={() => handleMatchClick('fitness_training')}
                className="group relative bg-[#111] border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-8 hover:border-brand-green cursor-pointer transition-all duration-300 overflow-hidden h-auto md:min-h-[250px] flex flex-row md:flex-col items-center md:items-start justify-between"
            >
                <div className="relative z-10 flex md:block items-center gap-4 w-full">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-900 rounded-lg md:rounded-xl flex shrink-0 items-center justify-center text-white border border-white/10 md:mb-4 group-hover:border-brand-green group-hover:text-brand-green transition-colors">
                        <Dumbbell size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-base md:text-2xl font-bold text-white md:mb-2 group-hover:text-brand-green transition-colors">Fitness & Training</h3>
                        <p className="text-gray-400 text-[10px] md:text-sm md:max-w-sm line-clamp-1 md:line-clamp-none">Piani di allenamento, Sessioni video, Nutrizione.</p>
                    </div>
                    <div className="md:hidden text-gray-600 group-hover:text-brand-green">
                        <ArrowRight size={16} />
                    </div>
                </div>

                <div className="hidden md:flex items-center text-xs font-bold text-gray-500 uppercase tracking-widest mt-6 group-hover:text-brand-green transition-colors">
                    Inizia Allenamento <ArrowRight size={14} className="ml-2" />
                </div>
            </div>

            {/* 2. Wellness */}
            <div 
                onClick={() => handleMatchClick('wellness_mindfulness')}
                className="group relative bg-[#111] border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-8 hover:border-brand-green cursor-pointer transition-all duration-300 overflow-hidden h-auto md:min-h-[250px] flex flex-row md:flex-col items-center md:items-start justify-between"
            >
                <div className="relative z-10 flex md:block items-center gap-4 w-full">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-900 rounded-lg md:rounded-xl flex shrink-0 items-center justify-center text-white border border-white/10 md:mb-4 group-hover:border-white group-hover:text-white transition-colors">
                        <Brain size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-base md:text-2xl font-bold text-white md:mb-2 group-hover:text-brand-green transition-colors">Wellness & Mind</h3>
                        <p className="text-gray-400 text-[10px] md:text-sm md:max-w-sm line-clamp-1 md:line-clamp-none">Gestione stress, Mindfulness, Equilibrio.</p>
                    </div>
                    <div className="md:hidden text-gray-600 group-hover:text-brand-green">
                        <ArrowRight size={16} />
                    </div>
                </div>

                <div className="hidden md:flex items-center text-xs font-bold text-gray-500 uppercase tracking-widest mt-6 group-hover:text-brand-green transition-colors">
                    Ritrova Equilibrio <ArrowRight size={14} className="ml-2" />
                </div>
            </div>

            {/* 3. Styling */}
            <div 
                onClick={() => handleMatchClick('styling_beauty')}
                className="group relative bg-[#111] border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-8 hover:border-brand-green cursor-pointer transition-all duration-300 overflow-hidden h-auto md:min-h-[250px] flex flex-row md:flex-col items-center md:items-start justify-between"
            >
                <div className="relative z-10 flex md:block items-center gap-4 w-full">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-900 rounded-lg md:rounded-xl flex shrink-0 items-center justify-center text-white border border-white/10 md:mb-4 group-hover:border-brand-green group-hover:text-brand-green transition-colors">
                        <Sparkles size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-base md:text-2xl font-bold text-white md:mb-2 group-hover:text-brand-green transition-colors">Styling & Beauty</h3>
                        <p className="text-gray-400 text-[10px] md:text-sm md:max-w-sm line-clamp-1 md:line-clamp-none">Consulenza d'immagine, Guardaroba, Make-up.</p>
                    </div>
                    <div className="md:hidden text-gray-600 group-hover:text-brand-green">
                        <ArrowRight size={16} />
                    </div>
                </div>

                <div className="hidden md:flex items-center text-xs font-bold text-gray-500 uppercase tracking-widest mt-6 group-hover:text-brand-green transition-colors">
                    Migliora Immagine <ArrowRight size={14} className="ml-2" />
                </div>
            </div>

            {/* 4. Game Coaching */}
            <div 
                onClick={() => handleMatchClick('game_coaching')}
                className="group relative bg-[#111] border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-8 hover:border-brand-green cursor-pointer transition-all duration-300 overflow-hidden h-auto md:min-h-[250px] flex flex-row md:flex-col items-center md:items-start justify-between"
            >
                <div className="relative z-10 flex md:block items-center gap-4 w-full">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-900 rounded-lg md:rounded-xl flex shrink-0 items-center justify-center text-white border border-white/10 md:mb-4 group-hover:border-white group-hover:text-white transition-colors">
                        <Gamepad2 size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-base md:text-2xl font-bold text-white md:mb-2 group-hover:text-brand-green transition-colors">Game Coaching</h3>
                        <p className="text-gray-400 text-[10px] md:text-sm md:max-w-sm line-clamp-1 md:line-clamp-none">Mentoring Esports, Gameplay Analysis, Ranking.</p>
                    </div>
                    <div className="md:hidden text-gray-600 group-hover:text-brand-green">
                        <ArrowRight size={16} />
                    </div>
                </div>

                <div className="hidden md:flex items-center text-xs font-bold text-gray-500 uppercase tracking-widest mt-6 group-hover:text-brand-green transition-colors">
                    Level Up <ArrowRight size={14} className="ml-2" />
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. IMPATTO SUL BUSINESS */}
      <section className="py-16 md:py-24 bg-[#080808] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            
            <div className="order-2 md:order-1 relative flex justify-center">
                {/* Visual */}
                <div className="relative w-40 h-40 md:w-64 md:h-64">
                    <div className="absolute inset-0 border-[6px] md:border-[8px] border-brand-green/10 rounded-full"></div>
                    <div className="absolute inset-0 border-[6px] md:border-[8px] border-brand-green rounded-full border-l-transparent border-b-transparent rotate-45"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <TrendingUp size={32} className="text-white md:w-10 md:h-10" />
                    </div>
                </div>
            </div>

            <div className="order-1 md:order-2 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Investi su Te Stesso. <br/>
                    <span className="text-brand-green">Il Migliore ROI è il Tuo Successo.</span>
                </h2>
                
                <div className="space-y-4 md:space-y-8 text-left inline-block md:block">
                    <div className="flex gap-4 group">
                        <div className="mt-1 min-w-[20px] text-gray-500 group-hover:text-brand-green transition-colors"><Zap size={20} /></div>
                        <div>
                            <h4 className="text-white font-bold text-sm md:text-lg mb-1">Motivazione</h4>
                            <p className="text-gray-400 text-xs md:text-sm">Accountability necessaria per non mollare.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 group">
                        <div className="mt-1 min-w-[20px] text-gray-500 group-hover:text-brand-green transition-colors"><Timer size={20} /></div>
                        <div>
                            <h4 className="text-white font-bold text-sm md:text-lg mb-1">Efficienza</h4>
                            <p className="text-gray-400 text-xs md:text-sm">Ottimizza tempo, energia e produttività.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </section>

      {/* 5. CTA FINALE */}
      <section className="px-5 md:px-8 py-16 md:py-24 bg-brand-dark relative overflow-hidden text-center border-t border-white/5">
        <div className="relative z-10 max-w-4xl mx-auto">
           <h2 className="text-2xl md:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight">
             Smetti di sperare. <br/>
             <span className="text-gray-500">Inizia a pianificare.</span>
           </h2>
           
           <button 
             onClick={() => handleMatchClick('footer_cta_growth')}
             className="w-full md:w-auto inline-flex justify-center items-center gap-3 px-8 py-4 md:px-12 md:py-5 bg-brand-green text-black font-bold text-lg rounded-xl md:rounded-full hover:bg-green-400 transition-all hover:-translate-y-1 shadow-[0_0_30px_rgba(34,197,94,0.4)]"
           >
             Inizia il Match
             <Sprout size={20} />
           </button>
        </div>
      </section>

    </div>
  );
};

export default PersonalGrowthPage;