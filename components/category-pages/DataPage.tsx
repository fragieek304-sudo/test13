import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  Database, 
  Binary, 
  BarChart3, 
  FileDigit, 
  TableProperties, 
  BrainCircuit, 
  Server, 
  ArrowRight,
  Filter,
  Eye,
  Cpu,
  LineChart,
  HardDrive
} from 'lucide-react';

interface DataPageProps {
  onBack: () => void;
}

const DataPage: React.FC<DataPageProps> = ({ onBack }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMatchClick = (param: string) => {
    window.open(`https://tally.so/r/mOMp77?service=${param}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-brand-green selection:text-black pt-20">
      
      {/* 1. HEADER PRINCIPALE: DATA STREAM THEME */}
      <section className="relative px-4 md:px-8 lg:px-16 pt-10 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        
        {/* Background: Digital Rain / Matrix Effect simulation */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none font-mono text-[10px] leading-3 overflow-hidden select-none flex justify-between">
           {Array.from({ length: 20 }).map((_, i) => (
             <div key={i} className="flex flex-col gap-2 pt-10 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}>
                {Array.from({ length: 30 }).map((_, j) => (
                   <span key={j} className={Math.random() > 0.7 ? 'text-brand-green' : 'text-gray-600'}>
                     {Math.random() > 0.5 ? '1' : '0'}
                   </span>
                ))}
             </div>
           ))}
        </div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e0a_1px,transparent_1px),linear-gradient(to_bottom,#22c55e0a_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <button 
            onClick={onBack}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-brand-green/5 border border-brand-green/20 hover:bg-brand-green/10 text-brand-green transition-all text-xs uppercase tracking-widest font-mono"
          >
            <ArrowLeft size={14} />
            BACK_TO_ROOT
          </button>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            I Dati Trasformati <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-emerald-400 to-green-600">
              in Decisioni.
            </span>
          </h1>
          
          <div className="mb-8 font-mono text-brand-green text-xs md:text-sm bg-[#0a0a0a] px-4 py-2 border border-brand-green/30 rounded">
             {`> SELECT * FROM insights WHERE precision = "100%";`}
          </div>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Accedi a Data Scientists, Analisti e Ingegneri per la pulizia, l'analisi e la visualizzazione dei tuoi set di dati. 
            <span className="text-white block mt-2 font-medium">Niente più ipotesi, solo fatti.</span>
          </p>

          <button 
            onClick={() => handleMatchClick('general_data')}
            className="inline-flex items-center gap-3 px-10 py-5 bg-brand-green text-black font-bold text-lg rounded-sm hover:bg-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-xl group"
          >
            Trova il Tuo Data Specialist Ora
            <Database size={20} className="group-hover:rotate-90 transition-transform" />
          </button>
        </div>
      </section>

      {/* 2. VANTAGGI (Server Block Cards) */}
      <section className="px-4 md:px-8 lg:px-16 py-12 border-y border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="group p-8 bg-[#0f0f0f] border border-white/10 hover:border-brand-green transition-all duration-300 relative rounded-sm">
             {/* Status Light */}
             <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-brand-green animate-pulse shadow-[0_0_8px_#22c55e]"></div>
             
             <div className="mb-6 inline-block p-3 bg-white/5 rounded-sm text-brand-green group-hover:bg-brand-green group-hover:text-black transition-colors">
               <Filter size={28} strokeWidth={1.5} />
             </div>
             <h3 className="text-xl font-bold text-white mb-3 font-mono">Data Cleaning</h3>
             <p className="text-gray-400 text-sm leading-relaxed">
               Match con esperti che garantiscono l'accuratezza e l'integrità del 100% dei tuoi dati grezzi, eliminando duplicati ed errori.
             </p>
          </div>

          {/* Card 2 */}
          <div className="group p-8 bg-[#0f0f0f] border border-white/10 hover:border-brand-green transition-all duration-300 relative rounded-sm">
             <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-brand-green animate-pulse shadow-[0_0_8px_#22c55e]"></div>
             
             <div className="mb-6 inline-block p-3 bg-white/5 rounded-sm text-brand-green group-hover:bg-brand-green group-hover:text-black transition-colors">
               <Binary size={28} strokeWidth={1.5} />
             </div>
             <h3 className="text-xl font-bold text-white mb-3 font-mono">Insight Azionabili</h3>
             <p className="text-gray-400 text-sm leading-relaxed">
               Trova analisti che non solo processano i dati, ma li trasformano in strategie chiare di Business Intelligence.
             </p>
          </div>

          {/* Card 3 */}
          <div className="group p-8 bg-[#0f0f0f] border border-white/10 hover:border-brand-green transition-all duration-300 relative rounded-sm">
             <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-brand-green animate-pulse shadow-[0_0_8px_#22c55e]"></div>
             
             <div className="mb-6 inline-block p-3 bg-white/5 rounded-sm text-brand-green group-hover:bg-brand-green group-hover:text-black transition-colors">
               <Eye size={28} strokeWidth={1.5} />
             </div>
             <h3 className="text-xl font-bold text-white mb-3 font-mono">Visualizzazione</h3>
             <p className="text-gray-400 text-sm leading-relaxed">
               Specialisti in Data Visualization capaci di creare dashboard interattive e report comprensibili per tutti i livelli aziendali.
             </p>
          </div>

        </div>
      </section>

      {/* 3. AREE DI APPLICAZIONE (The Database Grid) */}
      <section className="px-4 md:px-8 lg:px-16 py-20 relative bg-[#050505]">
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 pb-6 border-b border-white/10">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Architettura Dati</h2>
                <p className="text-gray-400 text-sm font-mono">{'>'} Executing query for specialists...</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Reusable Data Card */}
            {[
                { id: 'data_science_ml', title: 'Data Science & ML', icon: <BrainCircuit />, desc: 'Modelli predittivi, Algoritmi, AI Training.' },
                { id: 'data_analytics', title: 'Analytics & Insights', icon: <LineChart />, desc: 'Statistica, Reporting Strategico, BI.' },
                { id: 'data_cleaning_processing', title: 'Cleaning & Processing', icon: <Filter />, desc: 'Pulizia dati, Riconciliazione, Formattazione.' },
                { id: 'databases_architecture', title: 'Databases & Arch.', icon: <Server />, desc: 'SQL/NoSQL, Ottimizzazione, Design DB.' },
                { id: 'data_visualization', title: 'Data Visualization', icon: <BarChart3 />, desc: 'Tableau, Power BI, Dashboard Design.' },
                { id: 'data_entry_management', title: 'Data Entry & Mgmt', icon: <FileDigit />, desc: 'Inserimento, Gestione Big Data, Archiviazione.' },
            ].map((item, idx) => (
                <div 
                    key={idx}
                    onClick={() => handleMatchClick(item.id)}
                    className="group relative bg-[#0a0a0a] border border-white/10 hover:border-brand-green cursor-pointer transition-all duration-200 rounded-sm overflow-hidden"
                >
                    {/* Hover Scan Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-green/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-700 pointer-events-none"></div>

                    <div className="p-6 h-full flex items-start gap-4">
                        <div className="mt-1 text-gray-400 group-hover:text-brand-green transition-colors">
                            {React.cloneElement(item.icon as React.ReactElement<any>, { size: 24, strokeWidth: 1.5 })}
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-green transition-colors font-mono tracking-tight">{item.title}</h3>
                            <p className="text-gray-400 text-xs leading-relaxed mb-4">{item.desc}</p>
                            
                            <div className="flex items-center text-[10px] text-brand-green font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                Initialize Match <ArrowRight size={12} className="ml-1" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}

          </div>
        </div>
      </section>

      {/* 4. IMPATTO SUL BUSINESS (Flow Chart Viz) */}
      <section className="py-24 bg-[#080808] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 md:order-1 relative flex justify-center">
                {/* Abstract Data Funnel Visual */}
                <div className="relative w-64 h-80 flex flex-col items-center">
                    {/* Top: Chaos */}
                    <div className="w-full h-1/3 border-b border-dashed border-white/20 relative overflow-hidden">
                         {Array.from({ length: 15 }).map((_, i) => (
                             <div key={i} className="absolute w-1 h-1 bg-gray-500 rounded-full animate-bounce" style={{ 
                                 left: `${Math.random() * 100}%`, 
                                 top: `${Math.random() * 80}%`, 
                                 animationDuration: `${1 + Math.random()}s` 
                             }}></div>
                         ))}
                    </div>
                    {/* Middle: Processing */}
                    <div className="w-2/3 h-1/3 border-b border-dashed border-white/20 relative flex items-center justify-center border-l border-r border-brand-green/20">
                         <Cpu className="text-brand-green animate-pulse" size={32} />
                    </div>
                    {/* Bottom: Order */}
                    <div className="w-1/3 h-1/3 relative flex items-center justify-center">
                         <div className="w-full h-1 bg-brand-green shadow-[0_0_10px_#22c55e]"></div>
                    </div>
                </div>
            </div>

            <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-white mb-6">
                    Trasforma i Dati in <br/>
                    <span className="text-brand-green font-mono">Vantaggio Competitivo</span>
                </h2>
                
                <div className="space-y-8">
                    <div className="flex gap-4 group">
                        <div className="mt-1 min-w-[24px] text-gray-500 group-hover:text-brand-green transition-colors"><TableProperties size={24} /></div>
                        <div>
                            <h4 className="text-white font-bold text-lg mb-1">Decisioni Ottimali</h4>
                            <p className="text-gray-400 text-sm">Passa dalle congetture a strategie guidate da dati solidi e puliti.</p>
                        </div>
                    </div>
                    
                    <div className="flex gap-4 group">
                        <div className="mt-1 min-w-[24px] text-gray-500 group-hover:text-brand-green transition-colors"><HardDrive size={24} /></div>
                        <div>
                            <h4 className="text-white font-bold text-lg mb-1">Risparmio di Tempo</h4>
                            <p className="text-gray-400 text-sm">Esternalizza la pulizia e l'elaborazione manuale dei dati (Data Processing).</p>
                        </div>
                    </div>

                    <div className="flex gap-4 group">
                        <div className="mt-1 min-w-[24px] text-gray-500 group-hover:text-brand-green transition-colors"><BrainCircuit size={24} /></div>
                        <div>
                            <h4 className="text-white font-bold text-lg mb-1">Scoperta</h4>
                            <p className="text-gray-400 text-sm">Utilizza l'ML per scoprire pattern nascosti e opportunità di crescita non visibili.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </section>

      {/* 5. CTA FINALE */}
      <section className="px-4 py-24 bg-brand-dark relative overflow-hidden text-center border-t border-white/5">
        
        {/* Decorative Grid Line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-brand-green/20 pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto bg-brand-dark px-8">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
             Stop ai dati sporchi. <br/>
             <span className="text-gray-500">Inizia a lavorare con la massima accuratezza.</span>
           </h2>
           
           <button 
             onClick={() => handleMatchClick('footer_cta_data')}
             className="inline-flex items-center gap-3 px-12 py-5 bg-brand-green text-black font-bold text-lg rounded-sm hover:bg-green-400 transition-all hover:-translate-y-1 shadow-[0_0_30px_rgba(34,197,94,0.4)]"
           >
             Inizia il Match con i Data Specialist NeedlScan
             <Database size={20} />
           </button>
        </div>
      </section>

    </div>
  );
};

export default DataPage;