import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  Briefcase, 
  BarChart2, 
  TrendingUp, 
  Users, 
  Phone, 
  Search, 
  FileText, 
  Target, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  PieChart,
  Globe,
  Building2,
  LineChart
} from 'lucide-react';

interface BusinessPageProps {
  onBack: () => void;
}

const BusinessPage: React.FC<BusinessPageProps> = ({ onBack }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMatchClick = (param: string) => {
    window.open(`https://tally.so/r/mOMp77?service=${param}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-brand-green selection:text-black pt-16 md:pt-20">
      
      {/* 1. HEADER PRINCIPALE: STRATEGY & NETWORK THEME */}
      <section className="relative px-5 md:px-8 lg:px-16 pt-6 pb-10 md:pt-20 md:pb-24 overflow-hidden">
        
        {/* Background: Abstract Network Nodes */}
        <div className="absolute inset-0 opacity-[0.1] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#22c55e" strokeWidth="0.5"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <button 
            onClick={onBack}
            className="mb-6 md:mb-8 inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-sm bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-all text-xs md:text-sm group uppercase tracking-wider font-medium"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Torna alle Categorie
          </button>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 md:mb-6 leading-tight">
            Strategia Eseguita. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-emerald-400 to-green-600">
              Trasforma i Piani in Profitti.
            </span>
          </h1>
          
          <p className="text-sm md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed px-2">
            Trova specialisti per la Ricerca di Mercato, la Stesura di Business Plan, la Generazione di Lead e l'Ottimizzazione del tuo Reparto Vendite.
          </p>

          <button 
            onClick={() => handleMatchClick('general_business')}
            className="w-full md:w-auto inline-flex justify-center items-center gap-3 px-6 py-3.5 md:px-10 md:py-5 bg-brand-green text-black font-bold text-base md:text-lg rounded-sm hover:bg-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-xl group border-l-4 border-white/20"
          >
            Inizia la Tua Consulenza
            <TrendingUp size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* 2. VANTAGGI (Corporate Cards - Compact Mobile) */}
      <section className="px-5 md:px-8 lg:px-16 py-8 md:py-12 border-y border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          
          {/* Card 1 */}
          <div className="group p-5 md:p-8 bg-[#0f0f0f] border-t-2 border-t-white/10 hover:border-t-brand-green transition-all duration-300 relative flex md:block items-start gap-4">
             <div className="shrink-0 mb-0 md:mb-6 inline-block p-2 md:p-3 bg-white/5 rounded text-brand-green group-hover:bg-brand-green group-hover:text-black transition-colors">
               <BarChart2 size={20} className="md:w-7 md:h-7" strokeWidth={1.5} />
             </div>
             <div>
                <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-3">Dati Azionabili</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                Ricerca di Mercato mirata, trasformando i dati grezzi in piani d'azione concreti.
                </p>
             </div>
          </div>

          {/* Card 2 */}
          <div className="group p-5 md:p-8 bg-[#0f0f0f] border-t-2 border-t-white/10 hover:border-t-brand-green transition-all duration-300 relative flex md:block items-start gap-4">
             <div className="shrink-0 mb-0 md:mb-6 inline-block p-2 md:p-3 bg-white/5 rounded text-brand-green group-hover:bg-brand-green group-hover:text-black transition-colors">
               <Zap size={20} className="md:w-7 md:h-7" strokeWidth={1.5} />
             </div>
             <div>
                <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-3">Esecuzione Veloce</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                Generazione di lead qualificati e supporto Call Center per attivazione immediata.
                </p>
             </div>
          </div>

          {/* Card 3 */}
          <div className="group p-5 md:p-8 bg-[#0f0f0f] border-t-2 border-t-white/10 hover:border-t-brand-green transition-all duration-300 relative flex md:block items-start gap-4">
             <div className="shrink-0 mb-0 md:mb-6 inline-block p-2 md:p-3 bg-white/5 rounded text-brand-green group-hover:bg-brand-green group-hover:text-black transition-colors">
               <FileText size={20} className="md:w-7 md:h-7" strokeWidth={1.5} />
             </div>
             <div>
                <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-3">Pianificazione</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                Stesura di Business Plan, pitch deck e proiezioni finanziarie professionali.
                </p>
             </div>
          </div>

        </div>
      </section>

      {/* 3. AREE DI APPLICAZIONE (Grid: List Mobile) */}
      <section className="px-5 md:px-8 lg:px-16 py-12 md:py-20 relative bg-[#050505]">
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16 pb-4 md:pb-6 border-b border-white/10">
            <div>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">Divisioni Operative</h2>
                <p className="text-gray-400 text-[10px] md:text-sm">Seleziona il dipartimento da potenziare.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
            
            {/* Reusable Business Card */}
            {[
                { id: 'market_research', title: 'Market Research', icon: <PieChart />, desc: 'Analisi settore, Feasibility, Competitor Analysis.' },
                { id: 'business_plans', title: 'Business Plans', icon: <FileText />, desc: 'Piani strategici, Financials, Fundraising.' },
                { id: 'sales_optimization', title: 'Sales & Ottimizzazione', icon: <TrendingUp />, desc: 'Strategia vendita, Training, Funnel optimization.' },
                { id: 'leads_generation', title: 'Leads Generation', icon: <Target />, desc: 'B2B/B2C Leads, Qualificazione contatti, Outreach.' },
                { id: 'call_center_calling', title: 'Call Center & Calling', icon: <Phone />, desc: 'Inbound/Outbound, Customer Support, Cold Calling.' },
                { id: 'online_investigations', title: 'Online Investigations', icon: <Search />, desc: 'Due Diligence, Reputazione, Risk Analysis.' },
            ].map((item, idx) => (
                <div 
                    key={idx}
                    onClick={() => handleMatchClick(item.id)}
                    className="group relative bg-[#0a0a0a] border border-white/10 p-0 cursor-pointer transition-all duration-300 hover:border-brand-green/40 hover:shadow-[0_0_20px_rgba(34,197,94,0.1)] flex flex-row md:flex-col h-auto md:h-[240px] items-center md:items-stretch"
                >
                    {/* Header Strip - Hidden Mobile */}
                    <div className="hidden md:block h-1 w-full bg-white/5 group-hover:bg-brand-green transition-colors"></div>
                    
                    {/* Mobile Left Border */}
                    <div className="md:hidden w-1 self-stretch bg-white/5 group-hover:bg-brand-green transition-colors"></div>

                    <div className="p-4 md:p-8 flex-1 flex flex-row md:flex-col items-center md:items-start justify-between relative gap-4 md:gap-0 w-full">
                        {/* Background Number Watermark */}
                        <div className="absolute right-4 top-4 text-4xl font-black text-white/[0.03] pointer-events-none group-hover:text-brand-green/[0.05] transition-colors hidden md:block">
                            0{idx + 1}
                        </div>

                        <div className="p-2 md:p-3 bg-white/5 rounded-sm text-gray-300 group-hover:text-brand-green group-hover:bg-brand-green/10 transition-colors md:mb-6 shrink-0">
                            {React.cloneElement(item.icon as React.ReactElement<any>, { size: 20 })}
                        </div>

                        <div className="flex-1 md:flex-none">
                            <h3 className="text-sm md:text-xl font-bold text-white mb-1 md:mb-2 group-hover:text-brand-green transition-colors">{item.title}</h3>
                            <p className="text-gray-400 text-[10px] md:text-sm leading-relaxed line-clamp-2">{item.desc}</p>
                        </div>
                        
                        <ArrowRight size={16} className="md:hidden text-gray-600 group-hover:text-brand-green" />
                    </div>

                    {/* Action Footer - Desktop Only */}
                    <div className="hidden md:flex px-8 py-4 border-t border-white/5 justify-between items-center group-hover:bg-white/[0.02] transition-colors">
                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold group-hover:text-white">Avvia Match</span>
                        <ArrowRight size={16} className="text-gray-600 group-hover:text-brand-green transition-colors transform group-hover:translate-x-1" />
                    </div>
                </div>
            ))}

          </div>
        </div>
      </section>

      {/* 4. IMPATTO SUL BUSINESS (Strategy Board) */}
      <section className="py-16 md:py-24 bg-[#080808] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            
            <div className="order-2 md:order-1 relative">
                {/* 
                  NATURAL STATIC CHART IMAGE 
                  Optimized for natural proportions (no stretching)
                */}
                <div className="relative w-full aspect-square max-w-sm mx-auto bg-[#0a0a0a] border border-white/10 p-6 rounded-xl flex items-center justify-center">
                    <div className="absolute inset-6 grid grid-cols-4 grid-rows-4 gap-4 opacity-10 pointer-events-none">
                        {Array.from({length: 16}).map((_, i) => <div key={i} className="border border-white/20 rounded-[1px]"></div>)}
                    </div>
                    
                    <svg className="w-full h-full relative z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        
                        {/* Area */}
                        <path 
                            d="M10 85 L30 70 L50 60 L70 35 L90 15 V85 H10Z" 
                            fill="url(#chartGradient)" 
                        />

                        {/* Line */}
                        <path 
                            d="M10 85 L30 70 L50 60 L70 35 L90 15" 
                            stroke="#22c55e" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        />

                        {/* Dots */}
                        <circle cx="10" cy="85" r="2" fill="#050505" stroke="#22c55e" strokeWidth="1.5" />
                        <circle cx="30" cy="70" r="2" fill="#050505" stroke="#22c55e" strokeWidth="1.5" />
                        <circle cx="50" cy="60" r="2" fill="#050505" stroke="#22c55e" strokeWidth="1.5" />
                        <circle cx="70" cy="35" r="2" fill="#050505" stroke="#22c55e" strokeWidth="1.5" />
                        <circle cx="90" cy="15" r="2.5" fill="#22c55e" stroke="#22c55e" strokeWidth="1" />
                        
                        {/* Static Glow Ring around top point */}
                        <circle cx="90" cy="15" r="6" stroke="#22c55e" strokeOpacity="0.2" strokeWidth="1" />
                    </svg>

                    {/* Static Text Overlay */}
                    <div className="absolute top-6 left-6 bg-[#0a0a0a]/90 backdrop-blur border border-white/10 px-3 py-1.5 rounded text-xs font-mono text-brand-green shadow-lg">
                      +127% Growth
                    </div>
                </div>
            </div>

            <div className="order-1 md:order-2 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Lavora Sulla Crescita, <br/>
                    <span className="text-brand-green border-b-2 border-brand-green/20 pb-1">non Sulle Operazioni</span>
                </h2>
                
                <div className="space-y-4 md:space-y-8 inline-block text-left">
                    <div className="flex gap-4">
                        <div className="mt-1 min-w-[20px] text-brand-green"><Globe size={20} /></div>
                        <div>
                            <h4 className="text-white font-bold text-sm md:text-lg mb-1">Espansione Mirata</h4>
                            <p className="text-gray-400 text-xs md:text-sm">Identifica i mercati promettenti con dati certi.</p>
                        </div>
                    </div>
                    
                    <div className="flex gap-4">
                        <div className="mt-1 min-w-[20px] text-brand-green"><LineChart size={20} /></div>
                        <div>
                            <h4 className="text-white font-bold text-sm md:text-lg mb-1">Efficienza Commerciale</h4>
                            <p className="text-gray-400 text-xs md:text-sm">Migliora il tasso di chiusura e riduci i costi.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="mt-1 min-w-[20px] text-brand-green"><ShieldCheck size={20} /></div>
                        <div>
                            <h4 className="text-white font-bold text-sm md:text-lg mb-1">Sicurezza Strategica</h4>
                            <p className="text-gray-400 text-xs md:text-sm">Piani strutturati per decisioni cruciali.</p>
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
             Stop all'incertezza. <br/>
             <span className="text-gray-500">Inizia a crescere con strategia.</span>
           </h2>
           
           <button 
             onClick={() => handleMatchClick('footer_cta_business')}
             className="w-full md:w-auto inline-flex justify-center items-center gap-3 px-8 py-4 md:px-12 md:py-5 bg-brand-green text-black font-bold text-lg rounded-sm hover:bg-green-400 transition-all hover:-translate-y-1 shadow-[0_0_30px_rgba(34,197,94,0.4)]"
           >
             Inizia il Match
             <Briefcase size={20} />
           </button>

           <p className="mt-6 md:mt-8 text-[10px] text-gray-500 max-w-lg mx-auto">
             *NeedlScan connette le aziende con consulenti indipendenti.
           </p>
        </div>
      </section>

    </div>
  );
};

export default BusinessPage;