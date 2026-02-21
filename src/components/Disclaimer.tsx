
import React from 'react';

interface Props {
  onClose: () => void;
}

const Disclaimer: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[110] bg-black flex items-center justify-center p-4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://cdn-mars.vendd.com.br/p/DBftsXQtVBAGY1Ok1kE6RR6Eb7HL1Wg2pU4Gy9pE7daTgwuz/v-files/assets/44566191a.gif" 
          alt="Background" 
          className="w-full h-full object-cover opacity-30 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
      </div>

      <div className="relative bg-stone-950/40 backdrop-blur-xl border border-red-600/30 rounded-[3rem] p-8 md:p-12 max-w-md w-full text-center shadow-[0_0_150px_rgba(220,38,38,0.3)] overflow-hidden z-10">
        {/* Animated Glows */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-red-600/20 rounded-full blur-[80px] animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-amber-600/10 rounded-full blur-[80px]"></div>

        <div className="relative z-10">
          <div className="mb-8 inline-block border-2 border-amber-500/60 px-6 py-2 rounded-full bg-amber-950/40 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.5em] animate-pulse">Acesso Restrito</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase italic tracking-tighter leading-none">
            O PRAZER <br/>
            <span className="text-red-600 neon-red">TE ESPERA.</span>
          </h3>

          <p className="text-stone-200 mb-12 leading-relaxed text-base font-medium italic drop-shadow-md">
            "Prepare-se para uma jornada sensorial sem volta. Você está prestes a descobrir o que o corpo humano é realmente capaz de sentir."
          </p>

          <button 
            onClick={onClose}
            className="group relative bg-red-600 hover:bg-red-700 text-white font-black py-6 px-10 rounded-2xl w-full text-xl uppercase tracking-tighter transition-all duration-500 shadow-[0_0_40px_rgba(220,38,38,0.4)] hover:shadow-[0_0_60px_rgba(220,38,38,0.6)] hover:scale-105 active:scale-95 overflow-hidden animate-heartbeat"
          >
            <span className="relative z-10">QUERO SENTIR TUDO</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>

          <div className="mt-8 flex flex-col items-center gap-2">
            <p className="text-[10px] text-stone-500 font-black uppercase tracking-[0.3em]">
              Confirmo ter +18 anos e desejo prosseguir
            </p>
            <div className="w-12 h-0.5 bg-red-900/40 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
