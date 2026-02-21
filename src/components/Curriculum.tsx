
import React, { useState } from 'react';
import { Module } from '../types';

const modules: Module[] = [
  { id: 1, title: "Fundamentos do Despertar", description: "A filosofia tântrica aplicada ao prazer moderno e a quebra de tabus.", duration: "1h 30min" },
  { id: 2, title: "O Setting e Atmosfera", description: "Como preparar o ambiente, óleos e iluminação para o êxtase.", duration: "45min" },
  { id: 3, title: "Anatomia do Prazer", description: "Desvendando as zonas erógenas e pontos de ativação energética.", duration: "2h 00min" },
  { id: 4, title: "Técnica: Massagem Sensitiva", description: "O toque sutil que desperta a pele e prepara o sistema nervoso.", duration: "3h 15min" },
  { id: 5, title: "Técnica: Expansão Orgástica", description: "Manobras avançadas para prolongar o prazer e atingir o ápice.", duration: "4h 00min" },
];

const Curriculum: React.FC = () => {
  const [openModule, setOpenModule] = useState<number | null>(1);

  return (
    <section id="conteudo" className="py-12 md:py-16 bg-black border-t border-red-900/20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-[28px] md:text-4xl font-black text-white uppercase italic tracking-tighter mb-2">
            Cronograma de <span className="text-red-600">Transformação</span>
          </h2>
          <p className="text-stone-500 text-[10px] font-bold uppercase tracking-widest">O caminho passo a passo para o domínio total</p>
        </div>

        <div className="space-y-3">
          {modules.map((m) => (
            <div key={m.id} className="border border-red-900/30 rounded-xl overflow-hidden bg-stone-900/20 group hover:border-red-600/50 transition-colors">
              <button 
                onClick={() => setOpenModule(openModule === m.id ? null : m.id)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-red-900/10 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-red-600 font-black text-lg italic">0{m.id}</span>
                  <h3 className="text-white text-sm font-bold uppercase tracking-tight">{m.title}</h3>
                </div>
                <div className={`transition-transform duration-300 ${openModule === m.id ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openModule === m.id && (
                <div className="px-5 pb-5 pt-1 animate-in fade-in slide-in-from-top-2">
                  <p className="text-stone-400 text-xs mb-3 leading-relaxed italic">
                    {m.description}
                  </p>
                  <div className="flex items-center gap-2 text-[9px] font-black uppercase text-amber-500 tracking-widest bg-amber-900/20 px-3 py-1 rounded-full w-fit border border-amber-900/30">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {m.duration}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
