import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  TrendingUp, 
  BarChart3, 
  Target, 
  Megaphone, 
  Search, 
  Mail, 
  ShoppingCart, 
  PieChart, 
  ArrowRight,
  Zap,
  Globe,
  LineChart,
  Activity,
  MousePointerClick
} from 'lucide-react';

interface DigitalMarketingPageProps {
  onBack: () => void;
}

const DigitalMarketingPage: React.FC<DigitalMarketingPageProps> = ({ onBack }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMatchClick = (param: string) => {
    window.open(`https://tally.so/r/mOMp77?service=${param}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-brand-green selection:text-black pt-16 md:pt-20">
      
      {/* 1. HEADER PRINCIPALE: COMPACT MOBILE */}
      <section className="relative px-5 md:px-8 lg:px-16 pt-6 pb-10 md:pt-20 md:pb-24 overflow-hidden">
        
        {/* Background: Data Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] [background-size:40px_40px] md:[background-size:60px_60px] opacity-30 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <button 
            onClick={onBack}
            className="mb-6 md:mb-8 inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-all text-xs md:text-sm group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Torna alle Categorie
          </button>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 md:mb-6 leading-tight">
            Performance e Dati. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-emerald-400 to-teal-500">
              Marketing che Cresce.
            </span>
          </h1>
          
          <p className="text-sm md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed px-2">
            Smetti di navigare nel "rumore". Trova specialisti verificati in SEO, Social e Strategie.
            <span className="text-gray-200 block md:inline mt-1"> Solo risultati misurabili.</span>
          </p>

          <button 
            onClick={() => handleMatchClick('general_marketing')}
            className="w-full md:w-auto inline-flex justify-center items-center gap-3 px-6 py-3.5 md:px-8 md:py-4 bg-brand-green text-black font-bold text-base md:text-lg rounded-xl md:rounded-full hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-lg group"
          >
            Trova il Tuo Strategist
            <LineChart size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* 2. VANTAGGI (Cards Style: Compact Rows on Mobile) */}
      <section className="px-5 md:px-8 lg:px-16 py-8 md:py-12 border-y border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          
          {/* Card 1 */}
          <div className="group p-5 md:p-8 rounded-xl bg-[#0f0f0f] border border-white/10 hover:border-brand-green/50 transition-all duration-300 relative overflow-hidden flex md:block items-start gap-4">
            <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-zinc-900 rounded-lg md:rounded-xl flex items-center justify-center md:mb-4 text-brand-green border border-white/10 shadow-inner">
              <Target size={20} className="md:w-[22px] md:h-[22px]" />
            </div>
            <div>
                <h3 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2 group-hover:text-brand-green transition-colors">ROI-Centrico</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                Professionisti che lavorano con obiettivi chiari e KPI misurabili.
                </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group p-5 md:p-8 rounded-xl bg-[#0f0f0f] border border-white/10 hover:border-brand-green/50 transition-all duration-300 relative overflow-hidden flex md:block items-start gap-4">
            <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-zinc-900 rounded-lg md:rounded-xl flex items-center justify-center md:mb-4 text-brand-green border border-white/10 shadow-inner">
              <Globe size={20} className="md:w-[22px] md:h-[22px]" />
            </div>
            <div>
                <h3 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2 group-hover:text-brand-green transition-colors">Strategia Unificata</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                Esperti che integrano SEO, Social e Contenuti in un unico piano.
                </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group p-5 md:p-8 rounded-xl bg-[#0f0f0f] border border-white/10 hover:border-brand-green/50 transition-all duration-300 relative overflow-hidden flex md:block items-start gap-4">
            <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-zinc-900 rounded-lg md:rounded-xl flex items-center justify-center md:mb-4 text-brand-green border border-white/10 shadow-inner">
              <PieChart size={20} className="md:w-[22px] md:h-[22px]" />
            </div>
            <div>
                <h3 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2 group-hover:text-brand-green transition-colors">Analisi e Report</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                Report analitici dettagliati per ottimizzare costantemente le campagne.
                </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. AREE DI APPLICAZIONE (Compact List on Mobile) */}
      <section className="px-5 md:px-8 lg:px-16 py-12 md:py-20 relative bg-[#050505]">
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">Canali di Crescita</h2>
            <p className="text-gray-400 text-xs md:text-base">Seleziona il driver per il tuo business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            
            {/* Module Card Component - Optimized for Mobile List View */}
            {[
                { id: 'performance_advertising', title: 'Performance Ads', icon: <Megaphone />, desc: 'Google Ads, Social Ads, PPC', metric: '+ ROAS' },
                { id: 'seo_content_strategy', title: 'SEO & Content', icon: <Search />, desc: 'Audit, Keywords, Organic Growth', metric: 'Top 10' },
                { id: 'social_media_mgmt', title: 'Social Media', icon: <Zap />, desc: 'Strategy, Community, Viral', metric: '+ Reach' },
                { id: 'email_automation', title: 'Email & Automation', icon: <Mail />, desc: 'Funnels, CRM, Retention', metric: 'Open Rate' },
                { id: 'ecommerce_cro', title: 'E-commerce & CRO', icon: <ShoppingCart />, desc: 'Shopify, Conversion Rate, UX', metric: '+ Sales' },
                { id: 'analytics_bi', title: 'Analytics & BI', icon: <BarChart3 />, desc: 'GA4, Tracking, Dashboards', metric: 'Data' },
            ].map((item, idx) => (
                <div 
                    key={idx}
                    onClick={() => handleMatchClick(item.id)}
                    className="group relative bg-[#0f0f0f] border border-white/10 hover:border-brand-green/40 cursor-pointer transition-all duration-300 hover:bg-[#121212] overflow-hidden rounded-xl md:rounded-lg h-auto md:h-[200px] flex flex-row md:flex-col items-center md:items-stretch p-4 md:p-0"
                >
                    {/* Desktop Decoration */}
                    <div className="hidden md:block absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-brand-green/50 transition-all"></div>

                    <div className="md:p-6 w-full flex md:flex-col justify-between items-center md:items-start relative z-10 gap-4 md:gap-0">
                        
                        {/* Icon & Header (Mobile: Row, Desktop: Split) */}
                        <div className="flex md:w-full justify-between items-start shrink-0">
                            <div className="p-2 md:p-2.5 bg-white/5 rounded-lg text-gray-300 group-hover:text-brand-green group-hover:bg-brand-green/10 transition-all">
                                {React.cloneElement(item.icon as React.ReactElement<any>, { size: 20 })}
                            </div>
                            {/* Metric Badge - Hidden on very small screens if needed, or kept small */}
                            <div className="hidden md:block px-2 py-1 bg-brand-green/5 border border-brand-green/20 rounded text-[10px] font-mono text-brand-green group-hover:bg-brand-green group-hover:text-black transition-colors">
                                {item.metric}
                            </div>
                        </div>
                        
                        <div className="flex-1 md:flex-none md:mt-4 text-left">
                            <h3 className="text-sm md:text-lg font-bold text-white md:mb-1 group-hover:text-brand-green transition-colors">{item.title}</h3>
                            <p className="text-gray-500 text-[10px] md:text-xs leading-tight md:leading-relaxed line-clamp-1 md:line-clamp-2">{item.desc}</p>
                        </div>

                        {/* Mobile Arrow */}
                        <div className="md:hidden text-gray-600 group-hover:text-brand-green">
                            <ArrowRight size={16} />
                        </div>

                        {/* Desktop Hover Arrow */}
                        <div className="hidden md:block absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 text-brand-green">
                             <ArrowRight size={18} />
                        </div>
                    </div>
                </div>
            ))}

          </div>
        </div>
      </section>

      {/* 4. IMPATTO SUL BUSINESS */}
      <section className="py-16 md:py-20 bg-[#080808] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            
            <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Sfrutta il Potere dei Dati per <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Superare i Competitor</span>
                </h2>
                
                {/* Stats List - Compact on Mobile */}
                <div className="space-y-3 md:space-y-4 text-left mt-6 md:mt-8">
                    <div className="flex items-center justify-between p-3 md:p-4 bg-white/5 rounded border-l-4 border-brand-green">
                        <span className="text-white font-bold text-xs md:text-sm">Traffico Qualificato</span>
                        <span className="text-gray-500 text-[10px] md:text-xs">High Intent Visitors</span>
                    </div>
                    <div className="flex items-center justify-between p-3 md:p-4 bg-white/5 rounded border-l-4 border-brand-green/60">
                        <span className="text-white font-bold text-xs md:text-sm">Crescita Sostenibile</span>
                        <span className="text-gray-500 text--[10px] md:text-xs">SEO + Paid Mix</span>
                    </div>
                </div>
            </div>

            {/* Visual Abstract Graph - Smaller on Mobile */}
            <div className="flex-1 w-full flex justify-center mt-4 md:mt-0">
                <div className="relative w-48 h-48 md:w-full md:max-w-sm md:aspect-square bg-[#0f0f0f] rounded-full border border-white/5 p-6 md:p-8 flex items-center justify-center">
                    <div className="absolute inset-0 border border-white/5 rounded-full scale-75"></div>
                    <svg className="absolute inset-0 w-full h-full text-brand-green opacity-50 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]" viewBox="0 0 100 100">
                         <path d="M 20 80 Q 50 80 80 20" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                         <circle cx="80" cy="20" r="3" fill="currentColor" className="animate-pulse" />
                    </svg>
                    <div className="text-center z-10">
                        <div className="text-3xl md:text-5xl font-black text-white mb-1 md:mb-2">+300%</div>
                        <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">Growth Potential</div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 5. CTA FINALE */}
      <section className="px-5 md:px-8 py-16 md:py-24 bg-brand-dark relative overflow-hidden text-center">
        <div className="relative z-10 max-w-4xl mx-auto">
           <h2 className="text-2xl md:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight">
             Investi nel Marketing con la <br/>
             <span className="text-brand-green">Garanzia dei Risultati.</span>
           </h2>
           
           <button 
             onClick={() => handleMatchClick('footer_cta_marketing')}
             className="w-full md:w-auto inline-flex justify-center items-center gap-3 px-8 py-4 md:px-12 md:py-5 bg-brand-green text-black font-bold text-lg rounded-xl md:rounded-full hover:bg-green-400 transition-all hover:scale-105 shadow-[0_0_30px_rgba(34,197,94,0.4)]"
           >
             Inizia il Match
             <MousePointerClick size={20} />
           </button>
        </div>
      </section>

    </div>
  );
};

export default DigitalMarketingPage;