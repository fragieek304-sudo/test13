import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  Code2, 
  Terminal, 
  Cpu, 
  Globe, 
  ShoppingCart, 
  Smartphone, 
  ShieldCheck, 
  Server, 
  Wrench, 
  ArrowRight,
  Zap,
  Bug,
  Lock,
  Database
} from 'lucide-react';

interface ProgrammingTechPageProps {
  onBack: () => void;
}

const ProgrammingTechPage: React.FC<ProgrammingTechPageProps> = ({ onBack }) => {
  
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
        
        {/* Background: Circuit Pattern SVG */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M10,10 L90,10 L90,90" fill="none" stroke="#22c55e" strokeWidth="1" strokeLinejoin="round"/>
                    <circle cx="10" cy="10" r="2" fill="#22c55e"/>
                    <path d="M50,50 L50,10" fill="none" stroke="#22c55e" strokeWidth="1"/>
                </pattern>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit)" />
            </svg>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <button 
            onClick={onBack}
            className="mb-6 md:mb-8 inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-all text-[10px] md:text-xs font-mono uppercase tracking-widest group"
          >
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
            cd .. /categories
          </button>

          <div className="mb-3 md:mb-4 px-2 py-0.5 md:px-3 md:py-1 bg-brand-green/10 border border-brand-green/20 rounded text-brand-green font-mono text-[10px] md:text-xs">
            Status: Operational
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 md:mb-6 leading-tight">
            Codice Robusto. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-emerald-400 to-cyan-500">
              Scalabile.
            </span>
          </h1>
          
          <p className="text-sm md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed font-light px-2">
            Sviluppatori front-end, back-end, e-commerce e User Testing.
            <span className="text-white block mt-1 md:mt-2 font-medium">Costruisci senza compromessi.</span>
          </p>

          <button 
            onClick={() => handleMatchClick('general_tech')}
            className="w-full md:w-auto inline-flex justify-center items-center gap-3 px-6 py-3.5 md:px-8 md:py-4 bg-brand-green text-black font-bold text-base md:text-lg rounded-sm hover:bg-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-xl group font-mono"
          >
            {`> Trova Tech Specialist`}
            <Terminal size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* 2. VANTAGGI (Cards Style: Compact Rows) */}
      <section className="px-5 md:px-8 lg:px-16 py-8 md:py-12 border-y border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          
          {/* Card 1 */}
          <div className="group p-5 md:p-8 bg-[#0f0f0f] border border-white/10 hover:border-brand-green transition-all duration-300 relative rounded flex md:block items-start gap-4">
             <div className="shrink-0 mb-0 md:mb-6 inline-block p-2 md:p-3 bg-white/5 rounded text-brand-green group-hover:bg-brand-green group-hover:text-black transition-colors">
               <Code2 size={20} className="md:w-7 md:h-7" strokeWidth={1.5} />
             </div>
             <div>
                <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-3 font-mono">Moderno</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                Framework aggiornati (React, Next.js, Python) per efficienza.
                </p>
             </div>
          </div>

          {/* Card 2 */}
          <div className="group p-5 md:p-8 bg-[#0f0f0f] border border-white/10 hover:border-brand-green transition-all duration-300 relative rounded flex md:block items-start gap-4">
             <div className="shrink-0 mb-0 md:mb-6 inline-block p-2 md:p-3 bg-white/5 rounded text-brand-green group-hover:bg-brand-green group-hover:text-black transition-colors">
               <Bug size={20} className="md:w-7 md:h-7" strokeWidth={1.5} />
             </div>
             <div>
                <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-3 font-mono">Qualità</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                Esperti QA per software stabile e privo di bug critici.
                </p>
             </div>
          </div>

          {/* Card 3 */}
          <div className="group p-5 md:p-8 bg-[#0f0f0f] border border-white/10 hover:border-brand-green transition-all duration-300 relative rounded flex md:block items-start gap-4">
             <div className="shrink-0 mb-0 md:mb-6 inline-block p-2 md:p-3 bg-white/5 rounded text-brand-green group-hover:bg-brand-green group-hover:text-black transition-colors">
               <Server size={20} className="md:w-7 md:h-7" strokeWidth={1.5} />
             </div>
             <div>
                <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-3 font-mono">Scalabilità</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                Architetture solide per gestire la crescita futura del traffico.
                </p>
             </div>
          </div>

        </div>
      </section>

      {/* 3. AREE DI APPLICAZIONE (Grid: Stack List on Mobile) */}
      <section className="px-5 md:px-8 lg:px-16 py-12 md:py-20 relative bg-[#050505]">
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16 pb-4 md:pb-6 border-b border-white/10">
            <div>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">Stack Tecnologico</h2>
                <p className="text-gray-400 text-[10px] md:text-sm font-mono">Select_Module('production');</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            
            {/* Reusable Tech Card */}
            {[
                { id: 'web_frontend_dev', title: 'Web & Front-End', icon: <Globe />, desc: 'Siti Web, Landing, React/Vue.', code: '<Frontend />' },
                { id: 'ecommerce_cms', title: 'E-commerce & CMS', icon: <ShoppingCart />, desc: 'Shopify, WP, Magento.', code: 'Cart.init()' },
                { id: 'software_app_dev', title: 'Software & App', icon: <Smartphone />, desc: 'iOS, Android, SaaS.', code: 'App.build()' },
                { id: 'cybersecurity_security', title: 'Cybersecurity', icon: <ShieldCheck />, desc: 'Pen Testing, Audit, Protezione.', code: 'Auth.secure()' },
                { id: 'backend_api_cloud', title: 'Backend, API & Cloud', icon: <Database />, desc: 'Node, Python, AWS, Docker.', code: 'Server.connect()' },
                { id: 'maintenance_optimization', title: 'Manutenzione', icon: <Wrench />, desc: 'Speed, Debugging, Updates.', code: 'System.update()' },
            ].map((item, idx) => (
                <div 
                    key={idx}
                    onClick={() => handleMatchClick(item.id)}
                    className="group relative bg-[#0f0f0f] border border-white/10 hover:border-brand-green cursor-pointer transition-all duration-200 rounded overflow-hidden flex flex-row md:flex-col h-auto md:h-auto items-center md:items-stretch"
                >
                    {/* Header bar (Desktop only or tiny on mobile side) */}
                    <div className="hidden md:flex h-6 bg-white/5 border-b border-white/5 items-center px-3 gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                    </div>

                    {/* Mobile Left Border */}
                    <div className="md:hidden w-1 self-stretch bg-white/5 group-hover:bg-brand-green transition-colors"></div>

                    <div className="p-4 md:p-6 flex-1 w-full">
                        <div className="flex justify-between items-center md:items-start mb-0 md:mb-4 gap-4 md:gap-0">
                             <div className="text-gray-400 group-hover:text-brand-green transition-colors shrink-0">
                                {React.cloneElement(item.icon as React.ReactElement<any>, { size: 20, strokeWidth: 1.5 })}
                             </div>
                             
                             {/* Mobile Title Layout */}
                             <div className="md:hidden flex-1">
                                <h3 className="text-sm font-bold text-white group-hover:text-brand-green transition-colors font-mono">{item.title}</h3>
                                <p className="text-gray-500 text-[10px] line-clamp-1">{item.desc}</p>
                             </div>

                             <span className="font-mono text-[10px] text-gray-600 group-hover:text-brand-green/70 transition-colors bg-black px-2 py-0.5 rounded border border-white/5 shrink-0 hidden md:block">
                                {item.code}
                             </span>

                             <div className="md:hidden text-gray-600 group-hover:text-brand-green">
                                <ArrowRight size={14} />
                             </div>
                        </div>
                        
                        {/* Desktop Description */}
                        <div className="hidden md:block">
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-green transition-colors font-mono">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                            <div className="flex items-center text-[10px] text-brand-green font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                Execute <ArrowRight size={12} className="ml-1" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}

          </div>
        </div>
      </section>

      {/* 4. IMPATTO SUL BUSINESS */}
      <section className="py-16 md:py-24 bg-[#080808] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            
            <div className="order-2 md:order-1 relative flex justify-center">
                <div className="relative w-40 h-40 md:w-64 md:h-64 bg-[#111] rounded-full border border-white/10 flex items-center justify-center p-4">
                    <div className="absolute inset-0 rounded-full border-t-4 border-r-4 border-brand-green/30 rotate-[-45deg]"></div>
                    <div className="text-center z-10">
                        <Zap size={24} className="text-brand-green mx-auto mb-1 md:mb-2 fill-brand-green/20" />
                        <div className="text-2xl md:text-4xl font-black text-white font-mono">99.9%</div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Uptime</div>
                    </div>
                </div>
            </div>

            <div className="order-1 md:order-2 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Tecnologia come <br/>
                    <span className="text-brand-green font-mono">Vantaggio</span>
                </h2>
                
                <div className="space-y-4 md:space-y-8 inline-block text-left">
                    <div className="flex gap-4 group">
                        <div className="mt-1 min-w-[20px] text-gray-500 group-hover:text-brand-green transition-colors"><Zap size={20} /></div>
                        <div>
                            <h4 className="text-white font-bold text-sm md:text-lg mb-1">Velocità</h4>
                            <p className="text-gray-400 text-xs md:text-sm">Ottimizza il caricamento per SEO e conversioni.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 group">
                        <div className="mt-1 min-w-[20px] text-gray-500 group-hover:text-brand-green transition-colors"><Lock size={20} /></div>
                        <div>
                            <h4 className="text-white font-bold text-sm md:text-lg mb-1">Sicurezza</h4>
                            <p className="text-gray-400 text-xs md:text-sm">Proteggi dati clienti con soluzioni robuste.</p>
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
             Smetti di improvvisare. <br/>
             <span className="text-gray-500">Costruisci solide fondamenta.</span>
           </h2>
           
           <button 
             onClick={() => handleMatchClick('footer_cta_tech')}
             className="w-full md:w-auto inline-flex justify-center items-center gap-3 px-8 py-4 md:px-12 md:py-5 bg-brand-green text-black font-bold text-lg rounded-sm hover:bg-green-400 transition-all hover:-translate-y-1 shadow-[0_0_30px_rgba(34,197,94,0.4)] font-mono"
           >
             {`> Inizia il Match`}
             <Cpu size={18} />
           </button>
        </div>
      </section>

    </div>
  );
};

export default ProgrammingTechPage;