
import React from 'react';

interface Props {
  onClose: () => void;
}

const Disclaimer: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[110] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center">
        <h3 className="text-2xl font-black text-stone-900 mb-4">Conteúdo educativo</h3>
        <p className="text-stone-600 mb-8 leading-relaxed">
          Este material tem caráter informativo e reflexivo sobre energia vital, presença e desenvolvimento pessoal.
        </p>
        <button 
          onClick={onClose}
          className="bg-stone-800 text-white font-bold py-4 px-8 rounded-xl w-full"
        >
          Acessar conteúdo
        </button>
      </div>
    </div>
  );
};

export default Disclaimer;
