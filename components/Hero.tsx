
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-20 pb-10 px-4 flex flex-col items-center text-center bg-black min-h-[90vh] relative overflow-hidden">
      {/* Background Glows Intensificados */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="inline-block border border-red-500/40 px-6 py-1.5 rounded-full mb-8 bg-red-950/40 relative z-10 backdrop-blur-sm">
        <span className="text-red-500 text-[9px] md:text-[10px] font-black tracking-[0.4em] uppercase">O Caminho do Êxtase Sagrado</span>
      </div>
      
      <h1 className="text-[32px] md:text-8xl font-black text-white leading-[1.1] mb-6 uppercase tracking-tighter max-w-sm md:max-w-5xl relative z-10">
        EXPERIMENTE O <br/>
        <span className="text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.6)] neon-red">TOQUE QUE INCENDEIA</span> <br/>
        <span className="text-white">O SEU DESPERTAR</span> <br/>
        <span className="text-red-500 italic font-serif lowercase tracking-normal block mt-2 text-2xl md:text-5xl">da energia vital.</span>
      </h1>

      <p className="text-stone-300 text-sm md:text-xl mb-10 max-w-[320px] md:max-w-2xl leading-relaxed font-medium relative z-10">
        Transforme cada toque em um ritual de <span className="text-red-500 font-bold underline decoration-red-900/50 underline-offset-8">prazer absoluto</span> e conexão transcendental.
      </p>

      {/* Hero Video/GIF Container */}
      <div className="w-full max-w-xs md:max-w-3xl aspect-video mb-12 relative group z-10">
        <div className="absolute -inset-4 bg-red-600/20 blur-3xl rounded-3xl animate-pulse"></div>
        <div className="relative w-full h-full bg-stone-950 rounded-2xl overflow-hidden border-2 border-red-600 shadow-[0_0_60px_rgba(220,38,38,0.4)]">
          <img 
            src="https://dicasdopadrinho.com.br/wp-content/uploads/2023/08/SEM-CORTES-v2.gif.webp" 
            alt="Tantra Experience" 
            className="w-full h-full object-cover brightness-110 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
        </div>
      </div>

      <a href="#precos" className="w-full max-w-[340px] md:max-w-md bg-[#22C55E] text-black font-black py-5 md:py-6 rounded-2xl text-xl md:text-2xl shadow-[0_10px_0_rgb(21,128,61)] hover:shadow-[0_15px_0_rgb(21,128,61)] active:shadow-none active:translate-y-2 transition-all mb-4 uppercase tracking-tighter z-10 text-center">
        QUERO APRENDER AGORA
      </a>
      
      <p className="text-red-500 text-[10px] font-black tracking-[0.4em] uppercase mb-8 z-10 animate-bounce">
        Acesso Vitalício + Atualizações
      </p>
    </section>
  );
};

export default Hero;
