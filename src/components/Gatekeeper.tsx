
import React from 'react';

interface Props {
  onConfirm: () => void;
}

const Gatekeeper: React.FC<Props> = ({ onConfirm }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6 text-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/tantra-bg/1920/1080?blur=4" 
          alt="Background" 
          className="w-full h-full object-cover opacity-40 brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-8 inline-block border border-red-500/40 px-4 py-1 rounded-full bg-red-950/40 backdrop-blur-sm">
          <span className="text-red-500 text-[10px] font-black tracking-[0.3em] uppercase">Acesso Restrito</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-white mb-12 leading-tight max-w-md uppercase tracking-tighter italic">
          VOCÊ TEM CORAGEM DE DESCOBRIR O <span className="text-red-600 neon-red">SEGREDO</span> QUE TRANSFORMA QUALQUER TOQUE EM <span className="text-white underline decoration-red-600 underline-offset-8">ÊXTASE ABSOLUTO?</span>
        </h2>

        <div className="flex flex-col gap-6 w-full max-w-xs">
          <button 
            onClick={onConfirm}
            className="bg-[#22C55E] text-black font-black py-5 rounded-2xl text-2xl shadow-[0_10px_0_rgb(21,128,61)] hover:shadow-[0_15px_0_rgb(21,128,61)] active:shadow-none active:translate-y-2 transition-all uppercase tracking-tighter animate-pulse-glow shimmer-effect"
          >
            SIM, EU QUERO!
          </button>
          
          <button 
            className="text-stone-500 font-black py-2 text-sm uppercase tracking-widest hover:text-red-500 transition-colors"
            onClick={() => alert("O conteúdo requer disposição para o novo.")}
          >
            Não, prefiro continuar como estou.
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gatekeeper;
