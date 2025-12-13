import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  PenTool, 
  Layout, 
  Palette, 
  Layers, 
  Box, 
  Wand2, 
  Smartphone, 
  Type, 
  MousePointer2, 
  Move3d,
  ArrowRight,
  Target,
  Share2,
  History
} from 'lucide-react';

interface GraphicsDesignPageProps {
  onBack: () => void;
}

const GraphicsDesignPage: React.FC<GraphicsDesignPageProps> = ({ onBack }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMatchClick = (param: string) => {
    window.open(`https://tally.so/r/mOMp77?service=${param}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-brand-green selection:text-black pt-20">
      
      {/* 1. HEADER PRINCIPALE: VECTOR & GRID THEME */}
      <section className="relative px-4 md:px-8 lg:px-16 pt-10 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        
        {/* Background Grid - Blueprint Style */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none"></div>

        {/* Decorative Bezier Curves */}
        <svg className="absolute top-0 right-0 w-[800px] h-[800px] opacity-10 pointer-events-none stroke-brand-green fill-none" viewBox="0 0 100 100">
           <path d="M0 100 Q 50 0 100 100" strokeWidth="0.5" />
           <path d="M10 100 Q 60 10 100 90" strokeWidth="0.5" />
           <circle cx="50" cy="50" r="1" fill="#22c55e" />
           <line x1="50" y1="50" x2="80" y2="20" stroke="#22c55e" strokeWidth="0.2" strokeDasharray="2 2" />
        </svg>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <button 
            onClick={onBack}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-all text-sm group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Torna alle Categorie
          </button>

          {/* Floating UI Elements Decorative */}
          <div className="hidden md:block absolute left-[10%] top-[20%] p-2 rounded bg-[#1a1a1a] border border-white/10 rotate-[-12deg] shadow-xl opacity-60 animate-pulse">
             <PenTool size={20} className="text-brand-green" />
          </div>
          <div className="hidden md:block absolute right-[15%] bottom-[30%] p-2 rounded bg-[#1a1a1a] border border-white/10 rotate-[12deg] shadow-xl opacity-60">
             <Layout size={20} className="text-blue-400" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Design che Funziona. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-teal-400">
              Comunicazione che Converte.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Accedi a una rete di designer verificati: da specialisti UX/UI e Landing Page a maestri di Illustrazione.
            <span className="text-gray-200"> Il tuo brand, senza errori di comunicazione.</span>
          </p>

          <button 
            onClick={() => handleMatchClick('general_graphics')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-green text-black font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-xl group"
          >
            Inizia il Tuo Design Match in 30 Secondi
            <MousePointer2 size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* 2. VANTAGGI (Cards Style: Tool Palettes) */}
      <section className="px-4 md:px-8 lg:px-16 py-12 border-y border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="group p-8 rounded-xl bg-[#0f0f0f] border border-white/10 hover:border-brand-green/50 transition-all duration-300 relative">
            <div className="w-10 h-10 bg-brand-dark rounded flex items-center justify-center mb-4 text-brand-green border border-white/10 shadow-inner">
              <Layers size={22} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-green transition-colors">Coerenza Totale</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Troviamo designer che eccellono nel mantenere la tua Brand Identity intatta su tutti i supporti, dal pixel al formato stampa.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group p-8 rounded-xl bg-[#0f0f0f] border border-white/10 hover:border-brand-green/50 transition-all duration-300 relative">
            <div className="w-10 h-10 bg-brand-dark rounded flex items-center justify-center mb-4 text-brand-green border border-white/10 shadow-inner">
              <Layout size={22} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-green transition-colors">UX/UI Verificata</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Match con specialisti che combinano estetica e funzionalità, garantendo esperienze utente efficaci e conversioni.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group p-8 rounded-xl bg-[#0f0f0f] border border-white/10 hover:border-brand-green/50 transition-all duration-300 relative">
            <div className="w-10 h-10 bg-brand-dark rounded flex items-center justify-center mb-4 text-brand-green border border-white/10 shadow-inner">
              <PenTool size={22} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-green transition-colors">Consegna Vettoriale</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Garanzia di ricevere i file in formati pronti all'uso (vettoriali e ad alta risoluzione) per qualsiasi esigenza.
            </p>
          </div>

        </div>
      </section>

      {/* 3. AREE DI APPLICAZIONE (The "Artboard" Grid) */}
      <section className="px-4 md:px-8 lg:px-16 py-20 relative bg-[#050505]">
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Cosa vuoi progettare oggi?</h2>
            <p className="text-gray-400">Seleziona la tua area di interesse.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Reusable Artboard Card Component */}
            {[
                { id: 'brand_identity', title: 'Brand Identity', icon: <Type />, desc: 'Logo, Biglietti da Visita, Font' },
                { id: 'digital_ux_ui', title: 'Digital & UX/UI', icon: <Smartphone />, desc: 'Website, App, Landing Page' },
                { id: 'marketing_social', title: 'Marketing & Social', icon: <Share2 />, desc: 'Post, Banner, Email Design' },
                { id: 'illustration_concept', title: 'Illustrazione', icon: <PenTool />, desc: 'Original Art, Storyboards, Pattern' },
                { id: 'publishing_packaging', title: 'Editoria & Packaging', icon: <Box />, desc: 'Copertine, Libri, Etichette' },
                { id: 'innovation_specialty', title: 'Design Innovativo', icon: <Wand2 />, desc: 'AI Art, Progetti Speciali' },
            ].map((item, idx) => (
                <div 
                    key={idx}
                    onClick={() => handleMatchClick(item.id)}
                    className="group relative bg-[#0f0f0f] h-[220px] border border-white/5 hover:bg-[#141414] cursor-pointer transition-all duration-200"
                >
                    {/* The "Selection Handles" Effect - Mimicking Design Software */}
                    <div className="absolute -top-1 -left-1 w-2 h-2 bg-brand-green opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-brand-green opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-brand-green opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-brand-green opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    {/* Outline on hover */}
                    <div className="absolute inset-0 border border-brand-green opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                    {/* Content */}
                    <div className="p-8 h-full flex flex-col items-start justify-center">
                        <div className="p-3 bg-white/5 rounded mb-5 text-gray-300 group-hover:text-brand-green group-hover:scale-110 transition-all duration-300">
                            {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28 })}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                        
                        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                            <ArrowRight className="text-brand-green" size={20} />
                        </div>
                    </div>
                </div>
            ))}

          </div>
        </div>
      </section>

      {/* 4. IMPATTO SUL BUSINESS (Progress Bars / Metrics) */}
      <section className="py-20 bg-[#080808] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
            
            <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-4">
                    Trasforma la Tua Visione in un <br/>
                    <span className="text-brand-green">Vantaggio Competitivo</span>
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                    Il design non è solo decorazione. È la prima cosa che i tuoi clienti vedono e l'ultima che ricordano.
                </p>
                <button 
                  onClick={() => handleMatchClick('footer_cta_design')}
                  className="text-brand-green font-bold text-sm uppercase tracking-wider hover:underline flex items-center gap-2"
                >
                  Inizia ora <ArrowRight size={16} />
                </button>
            </div>

            <div className="flex-1 w-full space-y-6">
                
                {/* Metric 1 */}
                <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-brand-green/30 transition-colors">
                    <div className="flex items-center gap-4 mb-2">
                        <Target className="text-brand-green" size={24} />
                        <h3 className="text-lg font-bold text-white">Brand Authority</h3>
                    </div>
                    <p className="text-sm text-gray-400 ml-10">Design professionale che costruisce fiducia istantanea.</p>
                </div>

                {/* Metric 2 */}
                <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-brand-green/30 transition-colors">
                    <div className="flex items-center gap-4 mb-2">
                        <MousePointer2 className="text-brand-green" size={24} />
                        <h3 className="text-lg font-bold text-white">Engagement Incrementato</h3>
                    </div>
                    <p className="text-sm text-gray-400 ml-10">Grafiche ottimizzate che fermano lo scroll sui social.</p>
                </div>

                {/* Metric 3 */}
                <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-brand-green/30 transition-colors">
                    <div className="flex items-center gap-4 mb-2">
                        <History className="text-brand-green" size={24} />
                        <h3 className="text-lg font-bold text-white">Riduzione Revisioni</h3>
                    </div>
                    <p className="text-sm text-gray-400 ml-10">Professionisti che capiscono il brief al primo colpo.</p>
                </div>

            </div>
        </div>
      </section>

      {/* 5. CTA FINALE */}
      <section className="px-4 py-24 bg-brand-dark relative overflow-hidden text-center">
        
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
             Smetti di Accontentarti del "Bello". <br/>
             <span className="text-gray-500">Ottieni il Design Efficace.</span>
           </h2>
           
           <button 
             onClick={() => handleMatchClick('footer_cta_design')}
             className="inline-block px-12 py-5 bg-brand-green text-black font-bold text-lg rounded-full hover:bg-green-400 transition-all hover:scale-105 shadow-[0_0_30px_rgba(34,197,94,0.4)]"
           >
             Inizia Subito il Tuo Design Match
           </button>
        </div>
      </section>

    </div>
  );
};

export default GraphicsDesignPage;