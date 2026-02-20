
import React from 'react';

interface Props {
  onConfirm: () => void;
}

const Gatekeeper: React.FC<Props> = ({ onConfirm }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-3xl font-black text-white mb-12 leading-tight max-w-sm">
        Está disposta a fazer o que outra ainda não sabe?
      </h2>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <button 
          onClick={onConfirm}
          className="bg-[#22C55E] text-white font-black py-4 rounded-lg text-xl shadow-[0_0_20px_rgba(34,197,94,0.4)]"
        >
          SIM
        </button>
        <button 
          className="bg-[#EF4444] text-white font-black py-4 rounded-lg text-xl"
          onClick={() => alert("O conteúdo requer disposição para o novo.")}
        >
          NÃO
        </button>
      </div>
    </div>
  );
};

export default Gatekeeper;
