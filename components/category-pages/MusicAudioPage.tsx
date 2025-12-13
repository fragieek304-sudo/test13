import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  Music, 
  Mic2, 
  Sliders, 
  Headphones, 
  AudioWaveform, 
  Radio, 
  Disc, 
  Speaker,
  ArrowRight,
  PlayCircle,
  Volume2,
  Mic
} from 'lucide-react';

interface MusicAudioPageProps {
  onBack: () => void;
}

const MusicAudioPage: React.FC<MusicAudioPageProps> = ({ onBack }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMatchClick = (param: string) => {
    window.open(`https://tally.so/r/mOMp77?service=${param}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-brand-green selection:text-black pt-20">
      
      {/* 1. HEADER PRINCIPALE: FREQUENCY THEME */}
      <section className="relative px-4 md:px-8 lg:px-16 pt-10 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        
        {/* Background: Abstract Audio Spectrum */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 opacity-10 pointer-events-none flex items-end justify-center gap-1">
            {Array.from({ length: 60 }).map((_, i) => (
                <div 
                    key={i} 
                    className="w-2 md:w-4 bg-brand-green rounded-t-sm animate-[pulse_1s_ease-in-out_infinite]"
                    style={{ 
                        height: `${Math.random() * 80 + 10}%`,
                        animationDelay: `${Math.random()}s`,
                        animationDuration: `${0.5 + Math.random()}s`
                    }}
                ></div>
            ))}
        </div>
        
        {/* Floating Notes/Symbols */}
        <div className="absolute top-20 right-[15%] opacity-20 animate-bounce duration-[3000ms]">
            <Music size={64} />
        </div>
        <div className="absolute bottom-40 left-[10%] opacity-10 animate-pulse">
            <AudioWaveform size={120} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <button 
            onClick={onBack}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-all text-sm group backdrop-blur-sm"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Torna alle Categorie
          </button>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Suono Impeccabile. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-emerald-400 to-teal-400">
              Audio che Eleva.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Accedi a Music Producers, Tecnici del Suono e Voice Over Artist verificati. 
            <span className="text-white block mt-2 font-medium">Dalla composizione al Mastering finale, senza distorsioni.</span>
          </p>

          <button 
            onClick={() => handleMatchClick('general_audio')}
            className="inline-flex items-center gap-3 px-10 py-5 bg-brand-green text-black font-bold text-lg rounded-full hover:bg-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-xl group border-2 border-transparent"
          >
            Trova il Tuo Audio Specialist Ora
            <Headphones size={20} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </section>

      {/* 2. VANTAGGI (Cards Style: Rack Units) */}
      <section className="px-4 md:px-8 lg:px-16 py-12 border-y border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="group p-8 rounded bg-[#0f0f0f] border-x border-t border-b-4 border-white/10 hover:border-b-brand-green transition-all duration-300 relative">
             {/* Screw Holes Effect (Rack Mount) */}
             <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-black border border-gray-700"></div>
             <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-black border border-gray-700"></div>
             <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-black border border-gray-700"></div>
             <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-black border border-gray-700"></div>

             <div className="mb-6 inline-block p-3 bg-white/5 rounded text-brand-green group-hover:bg-brand-green group-hover:text-black transition-colors">
               <Radio size={28} strokeWidth={1.5} />
             </div>
             <h3 className="text-xl font-bold text-white mb-3">Standard Broadcast</h3>
             <p className="text-gray-400 text-sm leading-relaxed">
               Match con ingegneri del suono che garantiscono livelli LUFS e qualità ottimizzati per Spotify, podcast, YouTube e trasmissioni radio.
             </p>
          </div>

          {/* Card 2 */}
          <div className="group p-8 rounded bg-[#0f0f0f] border-x border-t border-b-4 border-white/10 hover:border-b-brand-green transition-all duration-300 relative">
             <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-black border border-gray-700"></div>
             <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-black border border-gray-700"></div>
             <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-black border border-gray-700"></div>
             <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-black border border-gray-700"></div>

             <div className="mb-6 inline-block p-3 bg-white/5 rounded text-brand-green group-hover:bg-brand-green group-hover:text-black transition-colors">
               <Mic2 size={28} strokeWidth={1.5} />
             </div>
             <h3 className="text-xl font-bold text-white mb-3">Talento Unico</h3>
             <p className="text-gray-400 text-sm leading-relaxed">
               Trova Songwriter e Voice Over Artist che catturano l'emozione e il tono perfetto per il tuo brand o la tua traccia.
             </p>
          </div>

          {/* Card 3 */}
          <div className="group p-8 rounded bg-[#0f0f0f] border-x border-t border-b-4 border-white/10 hover:border-b-brand-green transition-all duration-300 relative">
             <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-black border border-gray-700"></div>
             <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-black border border-gray-700"></div>
             <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-black border border-gray-700"></div>
             <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-black border border-gray-700"></div>

             <div className="mb-6 inline-block p-3 bg-white/5 rounded text-brand-green group-hover:bg-brand-green group-hover:text-black transition-colors">
               <Sliders size={28} strokeWidth={1.5} />
             </div>
             <h3 className="text-xl font-bold text-white mb-3">Mixing & Mastering</h3>
             <p className="text-gray-400 text-sm leading-relaxed">
               Esperti per bilanciare frequenze, pulire il rumore di fondo e finalizzare l'audio per un ascolto cristallino su qualsiasi dispositivo.
             </p>
          </div>

        </div>
      </section>

      {/* 3. AREE DI APPLICAZIONE (Grid: Drum Pads / DAW Channels) */}
      <section className="px-4 md:px-8 lg:px-16 py-20 relative bg-[#050505]">
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-4">
             <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Canali di Produzione</h2>
                <p className="text-gray-400 text-sm">Seleziona il servizio per la tua sessione.</p>
             </div>
             {/* Decorative Volume Knob */}
             <div className="hidden md:block">
                 <div className="w-12 h-12 rounded-full border-2 border-white/20 relative rotate-[135deg]">
                     <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-3 bg-brand-green"></div>
                 </div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* Reusable Pad Card */}
            {[
                { id: 'music_production', title: 'Produzione Musicale', icon: <Music />, desc: 'Beat making, Colonne sonore, Composizione.' },
                { id: 'mixing_mastering', title: 'Mixing e Mastering', icon: <Sliders />, desc: 'Bilanciamento, EQ, Compressione, Loudness.' },
                { id: 'voice_over_recording', title: 'Voice Over', icon: <Mic />, desc: 'Speakeraggio, Audiolibri, Spot, Doppiaggio.' },
                { id: 'audio_editing_clean', title: 'Audio Editing', icon: <AudioWaveform />, desc: 'Pulizia rumore, Tagli, Podcast Editing.' },
                { id: 'songwriting_jingles', title: 'Songwriting', icon: <Disc />, desc: 'Testi, Melodie, Jingle pubblicitari.' },
                { id: 'remixing_rework', title: 'Remixing & Rework', icon: <PlayCircle />, desc: 'Remix, Adattamenti, Mashup.' },
            ].map((item, idx) => (
                <div 
                    key={idx}
                    onClick={() => handleMatchClick(item.id)}
                    className="group relative bg-[#111] border border-white/10 aspect-[4/3] cursor-pointer transition-all duration-100 active:scale-[0.98] hover:bg-[#161616] flex flex-col items-center justify-center p-6 text-center shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]"
                >
                    {/* Active Light */}
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gray-800 group-hover:bg-brand-green group-hover:shadow-[0_0_8px_#22c55e] transition-all"></div>
                    
                    <div className="p-4 bg-black rounded-full text-gray-400 group-hover:text-brand-green border border-white/5 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-green transition-colors">{item.title}</h3>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                    
                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-green/20 rounded pointer-events-none transition-colors"></div>
                </div>
            ))}

          </div>
        </div>
      </section>

      {/* 4. IMPATTO SUL BUSINESS (Studio Monitor Viz) */}
      <section className="py-24 bg-[#080808] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-16 items-center">
            
            <div className="order-2 md:order-1 relative w-full flex justify-center">
                {/* Abstract Speaker/Woofer Visual */}
                <div className="relative w-64 h-64 bg-[#111] rounded-full border-8 border-[#222] shadow-2xl flex items-center justify-center group">
                    <div className="absolute inset-0 rounded-full border border-white/5"></div>
                    {/* The Cone */}
                    <div className="w-48 h-48 bg-[#0a0a0a] rounded-full flex items-center justify-center shadow-inner relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/5 to-transparent"></div>
                        {/* Dust Cap */}
                        <div className="w-16 h-16 bg-[#1a1a1a] rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.5)] z-10 flex items-center justify-center">
                           <Speaker size={24} className="text-brand-dark/50" />
                        </div>
                        {/* Vibration Animation */}
                        <div className="absolute inset-0 border-[20px] border-[#111] rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-20"></div>
                    </div>
                </div>
            </div>

            <div className="order-1 md:order-2 flex-1">
                <h2 className="text-3xl font-bold text-white mb-6">
                    Non Sottovalutare la Potenza <br/>
                    <span className="text-brand-green">di un Audio Perfetto</span>
                </h2>
                
                <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                        <div className="mt-1 p-2 bg-white/5 rounded text-brand-green"><Volume2 size={20} /></div>
                        <div>
                            <h4 className="text-white font-bold text-lg mb-1">Professionalità Istantanea</h4>
                            <p className="text-gray-400 text-sm">L'audio di alta qualità aumenta immediatamente la percezione di autorità e cura del tuo brand.</p>
                        </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                        <div className="mt-1 p-2 bg-white/5 rounded text-brand-green"><Headphones size={20} /></div>
                        <div>
                            <h4 className="text-white font-bold text-lg mb-1">Engagement & Retention</h4>
                            <p className="text-gray-400 text-sm">Un audio pulito e ben mixato riduce drasticamente il tasso di abbandono di video e podcast.</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <div className="mt-1 p-2 bg-white/5 rounded text-brand-green"><Disc size={20} /></div>
                        <div>
                            <h4 className="text-white font-bold text-lg mb-1">Identità Sonora</h4>
                            <p className="text-gray-400 text-sm">Musica e sound design originali ti distinguono in un mare di contenuti stock generici.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </section>

      {/* 5. CTA FINALE */}
      <section className="px-4 py-24 bg-brand-dark relative overflow-hidden text-center border-t border-white/5">
        
        {/* Equalizer Bars Background */}
        <div className="absolute bottom-0 left-0 w-full h-32 flex items-end justify-between opacity-[0.05] pointer-events-none px-4">
            {Array.from({ length: 40 }).map((_, i) => (
                <div key={i} className="w-full mx-[2px] bg-brand-green" style={{ height: `${Math.random() * 100}%` }}></div>
            ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
             Smetti di Accontentarti <br/>
             <span className="text-gray-500">dell'Audio Standard.</span>
           </h2>
           
           <button 
             onClick={() => handleMatchClick('footer_cta_audio')}
             className="inline-flex items-center gap-3 px-12 py-5 bg-brand-green text-black font-bold text-lg rounded-full hover:bg-green-400 transition-all hover:-translate-y-1 shadow-[0_0_30px_rgba(34,197,94,0.4)]"
           >
             Inizia il Match con gli Audio Specialist NeedlScan
             <AudioWaveform size={20} />
           </button>
        </div>
      </section>

    </div>
  );
};

export default MusicAudioPage;