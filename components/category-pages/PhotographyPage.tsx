import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  Camera, 
  Image as ImageIcon, 
  Layers, 
  ShoppingBag, 
  Utensils, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  Monitor,
  ArrowRight,
  Aperture,
  Briefcase,
  ScanLine,
  Focus,
  Crop,
  Maximize2
} from 'lucide-react';

interface PhotographyPageProps {
  onBack: () => void;
}

const PhotographyPage: React.FC<PhotographyPageProps> = ({ onBack }) => {
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMatchClick = (param: string) => {
    window.open(`https://tally.so/r/mOMp77?service=${param}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-brand-green selection:text-black pt-20">
      
      {/* 1. HEADER PRINCIPALE: LENS EFFECT */}
      <section className="relative px-4 md:px-8 lg:px-16 pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden">
        
        {/* Abstract Lens Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] border border-white/5 rounded-full opacity-50 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[450px] md:h-[450px] border border-brand-green/10 rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] md:w-[300px] md:h-[300px] border border-white/10 rounded-full pointer-events-none"></div>
        
        {/* Light Leak Effect */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-brand-green/10 via-transparent to-transparent opacity-60 pointer-events-none"></div>
        
        {/* Grid Overlay (Rule of Thirds) */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
            <div className="w-full h-full border-r border-white absolute left-1/3 top-0"></div>
            <div className="w-full h-full border-r border-white absolute left-2/3 top-0"></div>
            <div className="w-full h-full border-b border-white absolute top-1/3 left-0"></div>
            <div className="w-full h-full border-b border-white absolute top-2/3 left-0"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <button 
            onClick={onBack}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-all text-sm group backdrop-blur-md"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Torna alle Categorie
          </button>

          {/* Focus Brackets decorative */}
          <div className="hidden md:flex justify-between w-full max-w-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[200px] pointer-events-none opacity-20">
             <div className="w-8 h-8 border-t-2 border-l-2 border-white"></div>
             <div className="w-8 h-8 border-t-2 border-r-2 border-white"></div>
          </div>
          <div className="hidden md:flex justify-between w-full max-w-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[200px] pointer-events-none opacity-20 items-end">
             <div className="w-8 h-8 border-b-2 border-l-2 border-white"></div>
             <div className="w-8 h-8 border-b-2 border-r-2 border-white"></div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-[0.9] text-white uppercase relative inline-block">
            Focus <span className="text-stroke-green text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">Matter</span>
            <span className="absolute -top-2 -right-6 md:-right-8 text-brand-green animate-pulse">
                <ScanLine size={32} strokeWidth={3} />
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light tracking-wide">
            Fotografi professionisti e High-End Retouchers pronti per l'E-commerce e il Branding.
            <br/><span className="text-white font-medium">Definizione Razor-sharp.</span>
          </p>

          <button 
            onClick={() => handleMatchClick('general_photography')}
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white text-black font-bold text-lg tracking-wider hover:bg-brand-green transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">TROVA FOTOGRAFO</span>
            <Focus size={20} className="relative z-10 group-hover:scale-110 transition-transform" />
            {/* Hover shutter effect */}
            <div className="absolute inset-0 bg-brand-green transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </button>
        </div>
      </section>

      {/* 2. VANTAGGI (Horizontal Strip - Film Look) */}
      <section className="border-y border-white/10 bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
            
            {/* Feature 1 */}
            <div className="flex-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 group hover:bg-white/5 transition-colors cursor-default">
                <div className="mb-4 text-gray-500 group-hover:text-brand-green transition-colors">
                    <Maximize2 size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wider">Filtro E-commerce</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Professionisti verificati su standard Amazon, Shopify e Marketplace. Sfondo bianco puro, rispetto delle linee guida.
                </p>
            </div>

            {/* Feature 2 */}
            <div className="flex-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 group hover:bg-white/5 transition-colors cursor-default">
                <div className="mb-4 text-gray-500 group-hover:text-brand-green transition-colors">
                    <Monitor size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wider">Remote Shooting</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Spedisci i prodotti, segui lo shooting in live streaming, approva gli scatti in tempo reale da dashboard.
                </p>
            </div>

            {/* Feature 3 */}
            <div className="flex-1 p-8 md:p-12 group hover:bg-white/5 transition-colors cursor-default">
                <div className="mb-4 text-gray-500 group-hover:text-brand-green transition-colors">
                    <Layers size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wider">High-End Retouch</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Post-produzione avanzata. Skin retouching, color grading cinematografico e compositing complesso.
                </p>
            </div>

        </div>
      </section>

      {/* 3. AREE DI APPLICAZIONE (Viewfinder Grid) */}
      <section className="px-4 md:px-8 lg:px-16 py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
                <span className="text-brand-green font-mono text-xs uppercase tracking-[0.2em] mb-2 block">Selettore Modalità</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">Shooting Mode</h2>
            </div>
            <div className="hidden md:block w-32 h-[1px] bg-white/20 mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* Reusable Viewfinder Card */}
            {[
                { id: 'product_ecommerce', title: 'Product & Still Life', icon: <ShoppingBag />, desc: 'Cataloghi, E-commerce, 360°', tag: 'ISO 100' },
                { id: 'brand_lifestyle', title: 'Brand & Lifestyle', icon: <Users />, desc: 'Storytelling, Social Media, Lookbook', tag: 'f/1.8' },
                { id: 'high_end_retouching', title: 'High-End Retouch', icon: <Crop />, desc: 'Beauty, Compositing, Restauro', tag: 'RAW' },
                { id: 'corporate_events', title: 'Eventi & Corporate', icon: <Briefcase />, desc: 'Ritratti Aziendali, Reportage', tag: '1/200' },
                { id: 'photography_advice', title: 'Art Direction', icon: <Aperture />, desc: 'Consulenza Creativa e Strategia', tag: 'FOCUS' },
                { id: 'food_culinary', title: 'Food & Drink', icon: <Utensils />, desc: 'Menu, Packaging, Ristorazione', tag: 'MACRO' },
            ].map((item) => (
                <div 
                    key={item.id}
                    onClick={() => handleMatchClick(item.id)}
                    className="group relative h-[240px] bg-[#0f0f0f] border border-white/5 hover:border-brand-green/30 cursor-pointer transition-all duration-300 overflow-hidden"
                >
                    {/* Background Grid generic */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] [background-size:20px_20px]"></div>

                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                        <div className="flex justify-between items-start">
                             <div className="text-gray-400 group-hover:text-brand-green transition-colors duration-300">
                                {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28, strokeWidth: 1.5 })}
                             </div>
                             <span className="font-mono text-[10px] text-gray-600 border border-gray-800 px-2 py-1 rounded group-hover:text-brand-green group-hover:border-brand-green/30 transition-colors">
                                {item.tag}
                             </span>
                        </div>
                        
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:translate-x-1 transition-transform duration-300">{item.title}</h3>
                            <p className="text-gray-500 text-xs uppercase tracking-wide group-hover:text-gray-400">{item.desc}</p>
                        </div>
                    </div>

                    {/* Viewfinder Corners (The "Camera" Effect) */}
                    <div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-gray-600 group-hover:border-brand-green transition-colors duration-300"></div>
                    <div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-gray-600 group-hover:border-brand-green transition-colors duration-300"></div>
                    <div className="absolute bottom-4 left-4 w-4 h-4 border-l border-b border-gray-600 group-hover:border-brand-green transition-colors duration-300"></div>
                    <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-gray-600 group-hover:border-brand-green transition-colors duration-300"></div>

                    {/* Center Crosshair (appears on hover) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-4 h-[1px] bg-brand-green absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="h-4 w-[1px] bg-brand-green absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                </div>
            ))}

          </div>
        </div>
      </section>

      {/* 4. IMPATTO SUL BUSINESS (EXIF Data Style) */}
      <section className="py-20 bg-[#080808] border-t border-white/5 relative overflow-hidden">
        {/* Background Text Overlay */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] pointer-events-none select-none leading-none">
            RAW
        </div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
             
             {/* Stat 1 */}
             <div className="flex flex-col border-l-2 border-brand-green/30 pl-6 py-2">
                <span className="font-mono text-brand-green text-sm mb-1"></span>
                <span className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tighter">+25%</span>
                <p className="text-gray-500 text-xs uppercase tracking-wider max-w-[150px]">Incremento vendite con immagini HQ</p>
             </div>

             {/* Stat 2 */}
             <div className="flex flex-col border-l-2 border-brand-green/30 pl-6 py-2">
                <span className="font-mono text-brand-green text-sm mb-1"></span>
                <span className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tighter">100%</span>
                <p className="text-gray-500 text-xs uppercase tracking-wider max-w-[150px]">Coerenza visiva su tutti i canali</p>
             </div>

             {/* Stat 3 */}
             <div className="flex flex-col border-l-2 border-brand-green/30 pl-6 py-2">
                <span className="font-mono text-brand-green text-sm mb-1"></span>
                <span className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tighter">FAST</span>
                <p className="text-gray-500 text-xs uppercase tracking-wider max-w-[150px]">Consegne rapide per scadenze strette</p>
             </div>

          </div>
        </div>
      </section>

      {/* 5. CTA FINALE */}
      <section className="px-4 py-24 bg-brand-dark relative overflow-hidden text-center group">
        
        <div className="relative z-10 max-w-4xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
             L'immagine perfetta,<br/>
             <span className="text-gray-500">al primo scatto.</span>
           </h2>
           
           <button 
             onClick={() => handleMatchClick('footer_cta_photo')}
             className="relative inline-flex items-center justify-center px-12 py-5 bg-white text-black font-bold text-lg hover:bg-gray-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_60px_rgba(34,197,94,0.3)]"
           >
             <span className="absolute inset-0 border-2 border-black translate-x-1 translate-y-1 pointer-events-none"></span>
             INIZIA IL MATCH
           </button>
        </div>
      </section>

    </div>
  );
};

export default PhotographyPage;