import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  Bot, 
  Cpu, 
  MessageSquare, 
  Mic, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  ShieldCheck,
  TrendingUp,
  BarChart3,
  ArrowRight
} from 'lucide-react';

interface AIServicesPageProps {
  onBack: () => void;
}

const AIServicesPage: React.FC<AIServicesPageProps> = ({ onBack }) => {
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMatchClick = (param: string) => {
    // Open the Tally form for the match
    window.open(`https://tally.so/r/mOMp77?service=${param}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-green selection:text-black pt-20">
      
      {/* 1. HEADER PRINCIPALE */}
      <section className="relative px-4 md:px-8 lg:px-16 pt-10 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.03)_0%,transparent_70%)] pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <button 
            onClick={onBack}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-all text-sm group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Torna alle Categorie
          </button>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Il Futuro è Generativo: <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-300">
              Attiva i Tuoi Agenti AI.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Specialisti in modelli custom, Prompt Engineering avanzato e integrazioni API. 
            <span className="text-gray-200"> Trasforma la tua visione in codice e contenuto senza rumore.</span>
          </p>

          <button 
            onClick={() => handleMatchClick('general_ai')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-green text-black font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-xl group"
          >
            Trova il Tuo Specialista AI in 30 Secondi
            <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </section>

      {/* 2. VANTAGGI NEEDLSCAN (Cards) */}
      <section className="px-4 md:px-8 lg:px-16 py-12 border-y border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="group p-8 rounded-2xl bg-[#0d0d0d] border border-white/10 hover:border-brand-green/50 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 text-brand-green border border-white/10 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,197,94,0.1)]">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors">Match Preciso</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              La nostra AI sa cosa chiedere. Ricevi solo professionisti che hanno già affrontato la tua specifica sfida.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group p-8 rounded-2xl bg-[#0d0d0d] border border-white/10 hover:border-brand-green/50 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 text-brand-green border border-white/10 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,197,94,0.1)]">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors">Integrazione Veloce</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Trova specialisti capaci di integrare l'AI perfettamente nei tuoi sistemi e flussi di lavoro esistenti.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group p-8 rounded-2xl bg-[#0d0d0d] border border-white/10 hover:border-brand-green/50 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 text-brand-green border border-white/10 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,197,94,0.1)]">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors">Competenza Certificata</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Verifichiamo i portfolio e le competenze tecniche per garantirti professionisti di IA di livello superiore.
            </p>
          </div>

        </div>
      </section>

      {/* 3. AREE DI APPLICAZIONE (Grid Interattiva) */}
      <section className="px-4 md:px-8 lg:px-16 py-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Aree di Applicazione</h2>
            <p className="text-gray-400">Seleziona il tuo ambito per avviare il Match immediato.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Item 1 */}
            <div 
              onClick={() => handleMatchClick('generative_content')}
              className="group cursor-pointer bg-zinc-900/50 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:border-brand-green hover:bg-zinc-900 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] flex flex-col items-start"
            >
              <div className="p-3 bg-brand-dark rounded-lg text-brand-green mb-4 border border-white/5 group-hover:scale-110 transition-transform">
                <Sparkles size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-green transition-colors">Generazione di Contenuti</h3>
              <p className="text-gray-400 text-sm">Immagini, Video, Testi per Blog e Social.</p>
              <div className="mt-4 flex items-center text-xs text-brand-green font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                Avvia Match <ArrowRight size={12} className="ml-1" />
              </div>
            </div>

            {/* Item 2 */}
            <div 
              onClick={() => handleMatchClick('chatbot_agents')}
              className="group cursor-pointer bg-zinc-900/50 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:border-brand-green hover:bg-zinc-900 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] flex flex-col items-start"
            >
              <div className="p-3 bg-brand-dark rounded-lg text-brand-green mb-4 border border-white/5 group-hover:scale-110 transition-transform">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-green transition-colors">Integrazione Chatbot & Agenti</h3>
              <p className="text-gray-400 text-sm">Assistenti virtuali, Automazione del customer service.</p>
              <div className="mt-4 flex items-center text-xs text-brand-green font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                Avvia Match <ArrowRight size={12} className="ml-1" />
              </div>
            </div>

            {/* Item 3 */}
            <div 
              onClick={() => handleMatchClick('custom_models')}
              className="group cursor-pointer bg-zinc-900/50 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:border-brand-green hover:bg-zinc-900 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] flex flex-col items-start"
            >
              <div className="p-3 bg-brand-dark rounded-lg text-brand-green mb-4 border border-white/5 group-hover:scale-110 transition-transform">
                <Bot size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-green transition-colors">Sviluppo Modelli Custom</h3>
              <p className="text-gray-400 text-sm">Machine Learning su dati proprietari, Classificazione.</p>
              <div className="mt-4 flex items-center text-xs text-brand-green font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                Avvia Match <ArrowRight size={12} className="ml-1" />
              </div>
            </div>

            {/* Item 4 */}
            <div 
              onClick={() => handleMatchClick('ai_strategy')}
              className="group cursor-pointer bg-zinc-900/50 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:border-brand-green hover:bg-zinc-900 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] flex flex-col items-start"
            >
              <div className="p-3 bg-brand-dark rounded-lg text-brand-green mb-4 border border-white/5 group-hover:scale-110 transition-transform">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-green transition-colors">Strategia AI & Prompting</h3>
              <p className="text-gray-400 text-sm">Consulenza, Audit di fattibilità, Ottimizzazione Prompt.</p>
              <div className="mt-4 flex items-center text-xs text-brand-green font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                Avvia Match <ArrowRight size={12} className="ml-1" />
              </div>
            </div>

            {/* Item 5 */}
            <div 
              onClick={() => handleMatchClick('voice_audio')}
              className="group cursor-pointer bg-zinc-900/50 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:border-brand-green hover:bg-zinc-900 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] flex flex-col items-start"
            >
              <div className="p-3 bg-brand-dark rounded-lg text-brand-green mb-4 border border-white/5 group-hover:scale-110 transition-transform">
                <Mic size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-green transition-colors">Sintesi Vocale & Audio</h3>
              <p className="text-gray-400 text-sm">Voice cloning, Generazione podcast e Audiobook AI.</p>
              <div className="mt-4 flex items-center text-xs text-brand-green font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                Avvia Match <ArrowRight size={12} className="ml-1" />
              </div>
            </div>

            {/* Item 6 */}
            <div 
              onClick={() => handleMatchClick('ai_code')}
              className="group cursor-pointer bg-zinc-900/50 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:border-brand-green hover:bg-zinc-900 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] flex flex-col items-start"
            >
              <div className="p-3 bg-brand-dark rounded-lg text-brand-green mb-4 border border-white/5 group-hover:scale-110 transition-transform">
                <Code2 size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-green transition-colors">AI per il Codice</h3>
              <p className="text-gray-400 text-sm">Strumenti di sviluppo assistito, Refactoring e QA.</p>
              <div className="mt-4 flex items-center text-xs text-brand-green font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                Avvia Match <ArrowRight size={12} className="ml-1" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. IMPATTO SUL BUSINESS (Data-Driven) */}
      <section className="px-4 md:px-8 lg:px-16 py-16 bg-[#080808] border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-4">Massimizza la Tua <br/> <span className="text-brand-green">Efficienza Digitale</span></h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
              L'implementazione corretta dell'intelligenza artificiale non è solo una tendenza, è un moltiplicatore di forza per il tuo business.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-3 gap-4 md:gap-8 w-full md:w-auto">
             {/* Stat 1 */}
             <div className="flex flex-col items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-brand-green/30 transition-colors">
                <span className="text-3xl md:text-5xl font-bold text-white mb-1">5X</span>
                <span className="text-brand-green text-xs font-bold uppercase tracking-wider mb-2">Velocità</span>
                <span className="text-gray-500 text-[10px] text-center">Produzione contenuti</span>
             </div>
             {/* Stat 2 */}
             <div className="flex flex-col items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-brand-green/30 transition-colors">
                <span className="text-3xl md:text-5xl font-bold text-white mb-1">-60%</span>
                <span className="text-brand-green text-xs font-bold uppercase tracking-wider mb-2">Costi</span>
                <span className="text-gray-500 text-[10px] text-center">Prototipazione</span>
             </div>
             {/* Stat 3 */}
             <div className="flex flex-col items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-brand-green/30 transition-colors">
                <div className="h-[36px] md:h-[48px] flex items-end justify-center mb-1">
                    <TrendingUp size={32} className="text-white" />
                </div>
                <span className="text-brand-green text-xs font-bold uppercase tracking-wider mb-2">Focus</span>
                <span className="text-gray-500 text-[10px] text-center">Strategia</span>
             </div>
          </div>
        </div>
      </section>

      {/* 5. CTA FINALE */}
      <section className="px-4 md:px-8 lg:px-16 py-20 bg-brand-dark relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-brand-green/5 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
           <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
             Non Perdere Tempo a Setacciare. <br/>
             <span className="text-gray-400 font-normal">Lascia che l'AI trovi l'AI.</span>
           </h2>
           
           <button 
             onClick={() => handleMatchClick('footer_cta')}
             className="inline-block px-10 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-all hover:scale-105 shadow-xl"
           >
             Inizia Subito il Tuo Progetto AI
           </button>
        </div>
      </section>

    </div>
  );
};

export default AIServicesPage;