import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  Landmark, 
  Calculator, 
  FileSpreadsheet, 
  Briefcase, 
  TrendingUp, 
  ShieldCheck, 
  Scale, 
  Coins, 
  PieChart, 
  ArrowRight,
  ScrollText,
  Lock,
  Building2,
  CheckCircle2
} from 'lucide-react';

interface FinancePageProps {
  onBack: () => void;
}

const FinancePage: React.FC<FinancePageProps> = ({ onBack }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMatchClick = (param: string) => {
    window.open(`https://tally.so/r/mOMp77?service=${param}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-brand-green selection:text-black pt-20">
      
      {/* 1. HEADER PRINCIPALE: BRAND CONSISTENT */}
      <section className="relative px-4 md:px-8 lg:px-16 pt-10 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        
        {/* Background: Geometric Structure (Hexagons/Grid) for Stability */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <button 
            onClick={onBack}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-all text-sm group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Torna alle Categorie
          </button>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Gestione Finanziaria <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">
              di Precisione.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Accesso a specialisti verificati in Contabilità, Fiscalità e Analisi Finanziaria. 
            <span className="text-gray-200"> Massimizza l'efficienza e dormi sonni tranquilli.</span>
          </p>

          <button 
            onClick={() => handleMatchClick('general_finance')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-green text-black font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-xl group"
          >
            Trova il Tuo Consulente Finanziario Ora
            <Scale size={20} className="group-hover:scale-110 transition-transform" />
          </button>
          
          <div className="mt-6 flex items-center gap-2 text-xs text-brand-green font-bold uppercase tracking-wider bg-brand-green/10 px-3 py-1 rounded-full border border-brand-green/20">
            <Lock size={12} /> Verified Professionals
          </div>
        </div>
      </section>

      {/* 2. VANTAGGI (Cards Style: Brand Consistent) */}
      <section className="px-4 md:px-8 lg:px-16 py-12 border-y border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="group p-8 rounded-xl bg-[#0f0f0f] border border-white/10 hover:border-brand-green/50 transition-all duration-300 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
             
             <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 text-brand-green border border-white/10 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,197,94,0.1)]">
               <ShieldCheck size={24} />
             </div>
             <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors">Compliance Assicurata</h3>
             <p className="text-gray-400 text-sm leading-relaxed">
               Match con professionisti aggiornati sulle normative fiscali e contabili vigenti (nazionali e internazionali).
             </p>
          </div>

          {/* Card 2 */}
          <div className="group p-8 rounded-xl bg-[#0f0f0f] border border-white/10 hover:border-brand-green/50 transition-all duration-300 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

             <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 text-brand-green border border-white/10 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,197,94,0.1)]">
               <TrendingUp size={24} />
             </div>
             <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors">Strategia Orientata</h3>
             <p className="text-gray-400 text-sm leading-relaxed">
               Consulenza mirata non solo alla conformità, ma alla crescita e all'ottimizzazione fiscale a lungo termine.
             </p>
          </div>

          {/* Card 3 */}
          <div className="group p-8 rounded-xl bg-[#0f0f0f] border border-white/10 hover:border-brand-green/50 transition-all duration-300 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

             <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 text-brand-green border border-white/10 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,197,94,0.1)]">
               <PieChart size={24} />
             </div>
             <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors">Analisi Predittiva</h3>
             <p className="text-gray-400 text-sm leading-relaxed">
               Trova esperti in pianificazione e analisi capaci di fornire previsioni economiche e budget strategici.
             </p>
          </div>

        </div>
      </section>

      {/* 3. AREE DI APPLICAZIONE (Brand Grid) */}
      <section className="px-4 md:px-8 lg:px-16 py-20 relative bg-[#050505]">
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Aree di Intervento</h2>
            <p className="text-gray-400">Seleziona il settore per la consultazione.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Reusable Finance Card */}
            {[
                { id: 'accounting_services', title: 'Accounting Services', icon: <Calculator />, desc: 'Contabilità generale, Libri contabili, Bilanci.' },
                { id: 'tax_consulting', title: 'Tax Consulting', icon: <ScrollText />, desc: 'Pianificazione fiscale, Dichiarazioni, Ottimizzazione.' },
                { id: 'financial_analysis', title: 'Financial Planning', icon: <FileSpreadsheet />, desc: 'Budgeting, Forecasting, Analisi redditività.' },
                { id: 'cfo_strategic', title: 'CFO & Strategia', icon: <Briefcase />, desc: 'Gestione liquidità, Valutazione aziendale.' },
                { id: 'funding_capital', title: 'Fondi & Capitali', icon: <Coins />, desc: 'Ricerca finanziamenti, Investor Relations.' },
                { id: 'audit_internal', title: 'Audit & Controllo', icon: <ShieldCheck />, desc: 'Revisione contabile, Risk Assessment.' },
            ].map((item, idx) => (
                <div 
                    key={idx}
                    onClick={() => handleMatchClick(item.id)}
                    className="group relative bg-[#0f0f0f] border border-white/5 hover:border-brand-green/50 cursor-pointer transition-all duration-300 hover:bg-[#121212] overflow-hidden rounded-xl h-[200px]"
                >
                    <div className="p-6 h-full flex flex-col justify-between relative z-10">
                        <div className="flex justify-between items-start">
                            <div className="p-2.5 bg-white/5 rounded-lg text-gray-300 group-hover:text-brand-green group-hover:bg-brand-green/10 transition-all">
                                {React.cloneElement(item.icon as React.ReactElement<any>, { size: 24 })}
                            </div>
                            <ArrowRight size={18} className="text-gray-600 group-hover:text-brand-green opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-green transition-colors">{item.title}</h3>
                            <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                </div>
            ))}

          </div>
        </div>
      </section>

      {/* 4. IMPATTO SUL BUSINESS */}
      <section className="py-20 bg-[#080808] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
            
            <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-6">
                    Trasforma le Tue Finanze in <br/>
                    <span className="text-brand-green">Leva di Crescita</span>
                </h2>
                <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                        <div className="mt-1 min-w-[24px] text-brand-green"><CheckCircle2 size={20} /></div>
                        <div>
                            <h4 className="text-white font-bold text-sm uppercase tracking-wide">Conformità Zero Stress</h4>
                            <p className="text-gray-400 text-xs">Evita sanzioni e errori grazie a consulenti esperti e aggiornati.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="mt-1 min-w-[24px] text-brand-green"><CheckCircle2 size={20} /></div>
                        <div>
                            <h4 className="text-white font-bold text-sm uppercase tracking-wide">Decisioni Basate su Dati</h4>
                            <p className="text-gray-400 text-xs">Ottieni analisi chiare per prendere decisioni strategiche informate.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="mt-1 min-w-[24px] text-brand-green"><CheckCircle2 size={20} /></div>
                        <div>
                            <h4 className="text-white font-bold text-sm uppercase tracking-wide">Ottimizzazione del Cash Flow</h4>
                            <p className="text-gray-400 text-xs">Soluzioni per migliorare la gestione della liquidità e la stabilità.</p>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Visual Abstract Graph */}
            <div className="flex-1 w-full flex justify-center">
                <div className="relative w-64 h-64 border border-white/10 rounded-full flex items-center justify-center bg-[#0a0a0a]">
                    <div className="absolute inset-0 border border-brand-green/20 rounded-full animate-pulse"></div>
                    <Landmark size={64} className="text-brand-green" strokeWidth={1} />
                </div>
            </div>

        </div>
      </section>

      {/* 5. DISCLAIMER & CTA FINALE */}
      <section className="px-4 py-20 bg-brand-dark relative overflow-hidden text-center border-t border-white/5">
        
        {/* IMPORTANT DISCLAIMER - Styled within brand */}
        <div className="max-w-4xl mx-auto mb-12 p-4 bg-brand-green/5 border border-brand-green/20 rounded text-[10px] md:text-xs text-gray-400 leading-relaxed font-mono text-justify md:text-center">
            <strong>DISCLAIMER IMPORTANTE:</strong> NeedlScan è una piattaforma di matching che connette utenti con professionisti indipendenti. I professionisti presenti sulla piattaforma forniscono consulenza basata sulla loro esperienza e qualifica. Tuttavia, NeedlScan non fornisce direttamente consulenza finanziaria, legale o fiscale. L'utente rimane l'unico responsabile per le decisioni finali di investimento, gestione fiscale e conformità legale. Si raccomanda di verificare sempre le qualifiche specifiche e di consultare i propri consulenti legali per decisioni critiche.
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
             Non lasciare il tuo futuro finanziario al caso. <br/>
             <span className="text-gray-500">Agisci con precisione.</span>
           </h2>
           
           <button 
             onClick={() => handleMatchClick('footer_cta_finance')}
             className="inline-flex items-center gap-3 px-12 py-5 bg-brand-green text-black font-bold text-lg rounded-full hover:bg-green-400 transition-all hover:-translate-y-1 shadow-[0_0_30px_rgba(34,197,94,0.4)]"
           >
             Inizia il Match con i Consulenti NeedlScan
             <Landmark size={20} />
           </button>
        </div>
      </section>

    </div>
  );
};

export default FinancePage;