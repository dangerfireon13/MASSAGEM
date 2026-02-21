
import React from 'react';

interface Props {
  onClose: () => void;
}

const Disclaimer: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-md flex items-center justify-center p-6">
      <div className="relative bg-stone-950 border border-red-900/30 rounded-[2.5rem] p-8 md:p-12 max-w-md w-full text-center shadow-[0_0_100px_rgba(220,38,38,0.15)] overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-red-600/10 rounded-full blur-[60px]"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-red-900/10 rounded-full blur-[60px]"></div>

        <div className="relative z-10">
          <div className="mb-6 inline-block border border-amber-500/40 px-4 py-1 rounded-full bg-amber-950/20">
            <span className="text-amber-500 text-[9px] font-black uppercase tracking-[0.4em]">Aviso de Intensidade</span>
          </div>

          <h3 className="text-3xl font-black text-white mb-6 uppercase italic tracking-tighter leading-none">
            VOCÊ ESTÁ <br/>
            <span className="text-red-600">PREPARADO?</span>
          </h3>

          <p className="text-stone-400 mb-10 leading-relaxed text-sm font-medium italic">
            "Este portal contém segredos ancestrais e técnicas modernas que irão expandir sua percepção sensorial. O que você aprender aqui não poderá ser esquecido."
          </p>

          <button 
            onClick={onClose}
            className="bg-white text-black font-black py-5 px-8 rounded-2xl w-full text-xl uppercase tracking-tighter shadow-[0_8px_0_rgb(168,162,158)] hover:translate-y-1 hover:shadow-none transition-all shimmer-effect"
          >
            ESTOU PRONTO PARA O ÊXTASE
          </button>

          <p className="mt-6 text-[9px] text-stone-600 font-bold uppercase tracking-widest">
            Ao clicar, você confirma ser maior de 18 anos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
