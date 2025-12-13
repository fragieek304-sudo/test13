import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  Film, 
  Play, 
  Scissors, 
  Clapperboard, 
  MonitorPlay, 
  Youtube, 
  Layers, 
  Zap, 
  ArrowRight,
  Video,
  Aperture,
  Tv,
  MousePointerClick
} from 'lucide-react';

interface VideoAnimationPageProps {
  onBack: () => void;
}

const VideoAnimationPage: React.FC<VideoAnimationPageProps> = ({ onBack }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMatchClick = (param: string) => {
    window.open(`https://tally.so/r/mOMp77?service=${param}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-brand-green selection:text-black pt-20">
      
      {/* 1. HEADER PRINCIPALE: CINEMATIC THEME */}
      <section className="relative px-4 md:px-8 lg:px-16 pt-10 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        
        {/* Background: Film Grain & Abstract Play Buttons */}
        <div className="absolute inset-0 opacity-[0.1] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>
        <div className="absolute top-1/4 right-[10%] w-32 h-32 border-[3px] border-brand-green/20 rounded-full flex items-center justify-center opacity-40 animate-pulse">
            <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-brand-green/40 border-b-[15px] border-b-transparent ml-2"></div>
        </div>
        
        {/* Decorative Recording UI */}
        <div className="absolute top-24 left-8 md:left-16 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
            <span className="font-mono text-xs text-red-500 tracking-widest uppercase">REC</span>
        </div>
        <div className="absolute top-24 right-8 md:right-16 font-mono text-xs text-gray-500 tracking-widest">
            00:00:24:12
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <button 
            onClick={onBack}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-all text-sm group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Torna alle Categorie
          </button>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Video che Coinvolgono. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-emerald-400 to-lime-400">
              Storie ad Impatto.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Accedi a esperti di Video Editing, Animazione Loghi e Commercial per ADS ad alta conversione. 
            <span className="text-white"> Dalla sceneggiatura al rendering finale.</span>
          </p>

          <button 
            onClick={() => handleMatchClick('general_video')}
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)] group"
          >
            Trova il Tuo Video Creator
            <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                <Play size={10} className="text-white fill-white ml-0.5" />
            </div>
          </button>
        </div>
      </section>

      {/* 2. VANTAGGI (Timeline Blocks) */}
      <section className="px-4 md:px-8 lg:px-16 py-12 border-y border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="group p-8 rounded-xl bg-[#0f0f0f] border border-white/10 hover:border-brand-green/50 transition-all duration-300 relative overflow-hidden">
             {/* Progress Bar Top */}
             <div className="absolute top-0 left-0 h-1 bg-brand-green w-0 group-hover:w-full transition-all duration-700 ease-in-out"></div>
             
             <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 text-brand-green border border-white/10 shadow-inner">
               <Zap size={24} fill="currentColor" className="text-brand-green/20 group-hover:text-brand-green group-hover:fill-brand-green transition-all" />
             </div>
             <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors">ADS ad Alta Conversione</h3>
             <p className="text-gray-400 text-sm leading-relaxed">
               Match con specialisti che conoscono i formati (9:16, 4:5) e le tecniche di montaggio rapido per massimizzare il ROI su Meta e YouTube.
             </p>
          </div>

          {/* Card 2 */}
          <div className="group p-8 rounded-xl bg-[#0f0f0f] border border-white/10 hover:border-brand-green/50 transition-all duration-300 relative overflow-hidden">
             <div className="absolute top-0 left-0 h-1 bg-brand-green w-0 group-hover:w-full transition-all duration-700 ease-in-out delay-100"></div>

             <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 text-brand-green border border-white/10 shadow-inner">
               <Layers size={24} />
             </div>
             <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors">Motion Graphics</h3>
             <p className="text-gray-400 text-sm leading-relaxed">
               Trova animatori per Logo Animation, video esplicativi e infografiche dinamiche che catturano l'attenzione nei primi 3 secondi.
             </p>
          </div>

          {/* Card 3 */}
          <div className="group p-8 rounded-xl bg-[#0f0f0f] border border-white/10 hover:border-brand-green/50 transition-all duration-300 relative overflow-hidden">
             <div className="absolute top-0 left-0 h-1 bg-brand-green w-0 group-hover:w-full transition-all duration-700 ease-in-out delay-200"></div>

             <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 text-brand-green border border-white/10 shadow-inner">
               <MonitorPlay size={24} />
             </div>
             <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors">Standard Cinema</h3>
             <p className="text-gray-400 text-sm leading-relaxed">
               Registi, editor e animatori che garantiscono la massima risoluzione (4K), color grading professionale e audio mixing pulito.
             </p>
          </div>

        </div>
      </section>

      {/* 3. AREE DI APPLICAZIONE (Grid: Video Thumbnails Style) */}
      <section className="px-4 md:px-8 lg:px-16 py-20 relative bg-[#050505]">
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Produzione & Post</h2>
            <p className="text-gray-400">Scegli il formato del tuo prossimo contenuto.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Video Editing Advanced */}
            <div 
                onClick={() => handleMatchClick('video_editing_advanced')}
                className="group relative bg-[#0a0a0a] border border-white/10 hover:border-brand-green/40 cursor-pointer transition-all duration-300 hover:bg-[#121212] overflow-hidden rounded-lg aspect-video flex flex-col items-center justify-center text-center p-6"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="relative z-10 p-3 bg-white/10 rounded-full mb-3 backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <Scissors size={24} className="text-white" />
                </div>
                <h3 className="relative z-10 text-lg font-bold text-white group-hover:text-brand-green transition-colors">Editing Avanzato</h3>
                <p className="relative z-10 text-gray-400 text-xs mt-1">Montaggio, Color, Sound Design.</p>
                {/* Play Overlay on Hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                   <span className="text-brand-green font-bold text-sm uppercase tracking-widest flex items-center gap-2">Start <ArrowRight size={14}/></span>
                </div>
            </div>

            {/* 2. Video ADS & Commercial */}
            <div 
                onClick={() => handleMatchClick('video_ads_commercial')}
                className="group relative bg-[#0a0a0a] border border-white/10 hover:border-brand-green/40 cursor-pointer transition-all duration-300 hover:bg-[#121212] overflow-hidden rounded-lg aspect-video flex flex-col items-center justify-center text-center p-6"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="relative z-10 p-3 bg-white/10 rounded-full mb-3 backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <Tv size={24} className="text-white" />
                </div>
                <h3 className="relative z-10 text-lg font-bold text-white group-hover:text-brand-green transition-colors">ADS & Commercial</h3>
                <p className="relative z-10 text-gray-400 text-xs mt-1">Spot TV, Digital Ads, Promo.</p>
                 <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                   <span className="text-brand-green font-bold text-sm uppercase tracking-widest flex items-center gap-2">Start <ArrowRight size={14}/></span>
                </div>
            </div>

            {/* 3. Social Media Videos */}
            <div 
                onClick={() => handleMatchClick('social_media_videos')}
                className="group relative bg-[#0a0a0a] border border-white/10 hover:border-brand-green/40 cursor-pointer transition-all duration-300 hover:bg-[#121212] overflow-hidden rounded-lg aspect-video flex flex-col items-center justify-center text-center p-6"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="relative z-10 p-3 bg-white/10 rounded-full mb-3 backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <Youtube size={24} className="text-white" />
                </div>
                <h3 className="relative z-10 text-lg font-bold text-white group-hover:text-brand-green transition-colors">Social Media</h3>
                <p className="relative z-10 text-gray-400 text-xs mt-1">Reels, Shorts, TikTok, Stories.</p>
                 <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                   <span className="text-brand-green font-bold text-sm uppercase tracking-widest flex items-center gap-2">Start <ArrowRight size={14}/></span>
                </div>
            </div>

            {/* 4. Live Action Explainer */}
            <div 
                onClick={() => handleMatchClick('live_action_explainer')}
                className="group relative bg-[#0a0a0a] border border-white/10 hover:border-brand-green/40 cursor-pointer transition-all duration-300 hover:bg-[#121212] overflow-hidden rounded-lg aspect-video flex flex-col items-center justify-center text-center p-6"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="relative z-10 p-3 bg-white/10 rounded-full mb-3 backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <Video size={24} className="text-white" />
                </div>
                <h3 className="relative z-10 text-lg font-bold text-white group-hover:text-brand-green transition-colors">Live Explainer</h3>
                <p className="relative z-10 text-gray-400 text-xs mt-1">Attori reali, Demo prodotto, Tutorial.</p>
                 <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                   <span className="text-brand-green font-bold text-sm uppercase tracking-widest flex items-center gap-2">Start <ArrowRight size={14}/></span>
                </div>
            </div>

            {/* 5. Animazione & Logo */}
            <div 
                onClick={() => handleMatchClick('animation_logo_motion')}
                className="group relative bg-[#0a0a0a] border border-white/10 hover:border-brand-green/40 cursor-pointer transition-all duration-300 hover:bg-[#121212] overflow-hidden rounded-lg aspect-video flex flex-col items-center justify-center text-center p-6 md:col-span-2 lg:col-span-2"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                {/* Animated Background Element on Hover */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(34,197,94,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-[gradient_15s_ease_infinite] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                    <div className="p-3 bg-white/10 rounded-full mb-3 backdrop-blur-sm group-hover:scale-110 transition-transform">
                        <Aperture size={24} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-brand-green transition-colors">Animazione & Logo Motion</h3>
                    <p className="text-gray-400 text-xs mt-1 max-w-md">Motion Graphics 2D/3D, Logo Reveal, Infografiche animate.</p>
                </div>
                 <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                   <span className="text-brand-green font-bold text-sm uppercase tracking-widest flex items-center gap-2">Start <ArrowRight size={14}/></span>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. IMPATTO SUL BUSINESS (Waveform Viz) */}
      <section className="py-24 bg-[#080808] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
            
            <div className="flex-1 order-2 md:order-1 w-full">
                {/* Abstract Audio Waveform */}
                <div className="flex items-center justify-between gap-1 h-32 w-full max-w-md mx-auto opacity-50">
                    {Array.from({ length: 30 }).map((_, i) => (
                        <div 
                            key={i} 
                            className="w-1.5 bg-brand-green/50 rounded-full animate-[pulse_1.5s_ease-in-out_infinite]"
                            style={{ 
                                height: `${Math.max(20, Math.random() * 100)}%`,
                                animationDelay: `${i * 0.05}s`
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            <div className="flex-1 order-1 md:order-2 text-center md:text-left">
                <h2 className="text-3xl font-bold text-white mb-6">
                    Massimizza il <br/>
                    <span className="text-brand-green bg-brand-green/10 px-2 rounded">Coinvolgimento Visivo</span>
                </h2>
                <ul className="space-y-4 inline-block text-left">
                    <li className="flex items-start gap-3">
                         <div className="mt-1 min-w-[20px] text-brand-green"><Clapperboard size={20} /></div>
                         <div>
                             <strong className="text-white block text-sm">Engagement Elevato</strong>
                             <span className="text-gray-400 text-xs">I video generano +1200% di share rispetto a testo e immagini.</span>
                         </div>
                    </li>
                    <li className="flex items-start gap-3">
                         <div className="mt-1 min-w-[20px] text-brand-green"><Film size={20} /></div>
                         <div>
                             <strong className="text-white block text-sm">Chiarezza Immediata</strong>
                             <span className="text-gray-400 text-xs">Spiega concetti complessi in pochi secondi.</span>
                         </div>
                    </li>
                    <li className="flex items-start gap-3">
                         <div className="mt-1 min-w-[20px] text-brand-green"><Zap size={20} /></div>
                         <div>
                             <strong className="text-white block text-sm">Brand Storytelling</strong>
                             <span className="text-gray-400 text-xs">Costruisci un legame emotivo con narrazioni professionali.</span>
                         </div>
                    </li>
                </ul>
            </div>

        </div>
      </section>

      {/* 5. CTA FINALE */}
      <section className="px-4 py-24 bg-brand-dark relative overflow-hidden text-center group">
        
        <div className="relative z-10 max-w-4xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
             Smetti di registrare. <br/>
             <span className="text-gray-500">Inizia a produrre contenuti che lasciano il segno.</span>
           </h2>
           
           <button 
             onClick={() => handleMatchClick('footer_cta_video')}
             className="inline-flex items-center gap-3 px-12 py-5 bg-brand-green text-black font-bold text-lg rounded-full hover:bg-green-400 transition-all hover:-translate-y-1 shadow-[0_0_30px_rgba(34,197,94,0.4)]"
           >
             Inizia il Match con i Video Specialist NeedlScan
             <MousePointerClick size={20} />
           </button>
        </div>
      </section>

    </div>
  );
};

export default VideoAnimationPage;