import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  Feather, 
  PenTool, 
  BookOpen, 
  Languages, 
  FileText, 
  Search, 
  GraduationCap, 
  Edit3, 
  Quote, 
  ArrowRight,
  CheckCheck,
  Globe2,
  Highlighter,
  TrendingUp
} from 'lucide-react';

interface WritingTranslationPageProps {
  onBack: () => void;
}

const WritingTranslationPage: React.FC<WritingTranslationPageProps> = ({ onBack }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMatchClick = (param: string) => {
    window.open(`https://tally.so/r/mOMp77?service=${param}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-brand-green selection:text-black pt-20">
      
      {/* 1. HEADER PRINCIPALE: TYPOGRAPHIC THEME */}
      <section className="relative px-4 md:px-8 lg:px-16 pt-10 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        
        {/* Background: Floating Punctuation Marks */}
        <div className="absolute top-20 left-[10%] text-9xl font-serif text-white/5 pointer-events-none select-none animate-pulse duration-[5000ms]">“</div>
        <div className="absolute bottom-20 right-[10%] text-9xl font-serif text-white/5 pointer-events-none select-none animate-pulse duration-[7000ms]">”</div>
        <div className="absolute top-1/3 right-[20%] text-8xl font-serif text-brand-green/5 pointer-events-none select-none rotate-12">¶</div>
        <div className="absolute bottom-1/3 left-[15%] text-8xl font-serif text-white/5 pointer-events-none select-none -rotate-12">?</div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <button 
            onClick={onBack}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-all text-sm group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Torna alle Categorie
          </button>

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight mb-6 leading-[1.1]">
            Parole che <br/>
            <span className="relative inline-block">
                <span className="relative z-10">Trasformano.</span>
                {/* Highlighter Effect */}
                <span className="absolute bottom-2 left-0 w-full h-1/3 bg-brand-green/60 -skew-x-6 -z-0"></span>
            </span>
          </h1>
          
          <div className="max-w-2xl mx-auto mb-10 text-lg md:text-xl text-gray-400 leading-relaxed font-serif italic">
            "Contenuti Potenti, Senza Rumore."
          </div>

          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            Trova copywriter, specialisti SEO e revisori pronti a dare forma al tuo messaggio. 
            <br className="hidden md:block"/>
            <span className="bg-white/10 px-1 rounded text-white">Dalle tesi ai blog, solo testi perfetti.</span>
          </p>

          <button 
            onClick={() => handleMatchClick('general_writing')}
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold text-lg hover:bg-gray-200 transition-all shadow-[5px_5px_0px_0px_#22c55e] hover:shadow-[2px_2px_0px_0px_#22c55e] hover:translate-x-[3px] hover:translate-y-[3px] border-2 border-transparent"
          >
            Trova il Tuo Scrittore Ora
            <Feather size={20} className="stroke-2" />
          </button>
        </div>
      </section>

      {/* 2. VANTAGGI (Sticky Notes Style) */}
      <section className="px-4 md:px-8 lg:px-16 py-16 border-y border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Note 1 */}
          <div className="group relative bg-[#fffdf0] text-black p-8 shadow-xl transform rotate-1 hover:rotate-0 transition-all duration-300 min-h-[220px] flex flex-col">
            {/* Tape Effect */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/20 backdrop-blur-sm border-l border-r border-white/10 rotate-[-2deg]"></div>
            
            <div className="mb-4 text-brand-dark">
              <Search size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-2 font-serif">Precisione Tecnica</h3>
            <p className="text-sm leading-relaxed opacity-80">
              Accesso a specialisti con esperienza in campi verticali (Legale, IT, Medicina) per contenuti altamente accurati.
            </p>
            <div className="mt-auto pt-4 border-t border-black/10 flex justify-end">
                <CheckCheck size={16} className="text-green-700" />
            </div>
          </div>

          {/* Note 2 */}
          <div className="group relative bg-[#0f0f0f] border border-white/10 p-8 shadow-xl transform -rotate-1 hover:rotate-0 transition-all duration-300 min-h-[220px] flex flex-col">
             <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent"></div>
            
            <div className="mb-4 text-brand-green">
              <Edit3 size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Revisione Certificata</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Match con revisori e Beta Reader che garantiscono zero errori e massima coerenza strutturale del testo.
            </p>
          </div>

          {/* Note 3 */}
          <div className="group relative bg-[#0f0f0f] border border-white/10 p-8 shadow-xl transform rotate-1 hover:rotate-0 transition-all duration-300 min-h-[220px] flex flex-col">
             <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent"></div>

            <div className="mb-4 text-brand-green">
              <TrendingUp size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Ottimizzazione SEO</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Copywriter istruiti a produrre contenuti che non solo coinvolgono, ma che si posizionano sui motori di ricerca.
            </p>
          </div>

        </div>
      </section>

      {/* 3. AREE DI APPLICAZIONE (The "Manuscript" Grid) */}
      <section className="px-4 md:px-8 lg:px-16 py-20 relative bg-[#050505]">
        
        {/* Background Lines (Notebook Paper) */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:100%_32px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 bg-[#050505] inline-block px-8 py-4 rounded-xl border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-serif">Indice dei Servizi</h2>
            <p className="text-gray-400 font-sans text-sm">Scegli il capitolo per il tuo progetto.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Reusable Document Card */}
            {[
                { id: 'copywriting_sales', title: 'Copywriting & Vendita', icon: <Highlighter />, desc: 'Landing Page, Annunci, Headline persuasive.', sub: 'Persuasion' },
                { id: 'articles_seo', title: 'Articoli & SEO', icon: <Search />, desc: 'Blog Post, Ebook, Long-form content.', sub: 'Ranking' },
                { id: 'editing_revision', title: 'Editing & Revisione', icon: <Edit3 />, desc: 'Proofreading, Editing libri, Tesi.', sub: 'Correction' },
                { id: 'translation_localization', title: 'Traduzione', icon: <Languages />, desc: 'Tecnica, Legale, Localizzazione web.', sub: 'Global' },
                { id: 'creative_writing', title: 'Scrittura Creativa', icon: <PenTool />, desc: 'Storytelling, Romanzi, Script video.', sub: 'Art' },
                { id: 'technical_documentation', title: 'Doc Tecnica', icon: <FileText />, desc: 'Manuali, White Paper, Grant Writing.', sub: 'Manuals' },
            ].map((item, idx) => (
                <div 
                    key={idx}
                    onClick={() => handleMatchClick(item.id)}
                    className="group relative bg-[#0a0a0a] border-l-4 border-l-white/10 border-t border-r border-b border-white/5 p-6 hover:border-l-brand-green cursor-pointer transition-all duration-300 hover:bg-[#0f0f0f]"
                >
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-white/5 rounded text-gray-300 group-hover:text-brand-green transition-colors">
                            {React.cloneElement(item.icon as React.ReactElement<any>, { size: 24 })}
                        </div>
                        <span className="font-serif italic text-gray-600 text-xs group-hover:text-brand-green/70">#{item.sub}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 font-serif group-hover:translate-x-1 transition-transform">{item.title}</h3>
                    <p className="text-gray-400 text-sm font-sans mb-6 border-b border-dashed border-gray-800 pb-4">{item.desc}</p>
                    
                    <div className="flex items-center text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-brand-green transition-colors">
                        Avvia Match <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            ))}

          </div>
        </div>
      </section>

      {/* 4. IMPATTO SUL BUSINESS (Quote Style) */}
      <section className="py-24 bg-[#080808] border-t border-white/5 relative">
        <div className="absolute top-10 left-10 text-[10rem] font-serif text-white/[0.02] leading-none select-none">“</div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 font-serif">
                La Tua Credibilità Dipende <br/>
                <span className="text-brand-green underline decoration-wavy decoration-white/20 underline-offset-8">dalle Tue Parole</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 border border-white/10 rounded-xl bg-[#050505]">
                    <div className="text-4xl font-black text-white mb-2 font-serif">A+</div>
                    <h4 className="text-brand-green font-bold text-sm uppercase mb-2">Conversione</h4>
                    <p className="text-gray-400 text-xs">Copywriting che trasforma i lettori in clienti paganti.</p>
                </div>
                <div className="p-6 border border-white/10 rounded-xl bg-[#050505]">
                    <div className="text-4xl font-black text-white mb-2 font-serif">100%</div>
                    <h4 className="text-brand-green font-bold text-sm uppercase mb-2">Affidabilità</h4>
                    <p className="text-gray-400 text-xs">Contenuti privi di errori che rafforzano la reputazione.</p>
                </div>
                <div className="p-6 border border-white/10 rounded-xl bg-[#050505]">
                    <Globe2 size={40} className="mx-auto text-white mb-2" />
                    <h4 className="text-brand-green font-bold text-sm uppercase mb-2">Globale</h4>
                    <p className="text-gray-400 text-xs">Traduttori esperti per aprire il tuo business al mondo.</p>
                </div>
            </div>
        </div>
      </section>

      {/* 5. CTA FINALE */}
      <section className="px-4 py-24 bg-brand-dark relative overflow-hidden text-center">
        
        <div className="relative z-10 max-w-4xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight font-serif italic">
             "Non scrivere, comunica con potenza."
           </h2>
           
           <button 
             onClick={() => handleMatchClick('footer_cta_writing')}
             className="inline-flex items-center gap-3 px-12 py-5 bg-brand-green text-black font-bold text-lg rounded-none hover:bg-green-400 transition-all hover:-translate-y-1 shadow-[4px_4px_0px_0px_white]"
           >
             Inizia il Match con gli Scrittori NeedlScan
             <PenTool size={20} />
           </button>
        </div>
      </section>

    </div>
  );
};

export default WritingTranslationPage;