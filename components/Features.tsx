import React from 'react';

const Features: React.FC = () => {
  const learningItems = [
    {
      title: "PARA HOMENS E MULHERES",
      desc: "Um método completo e inclusivo. A Angella ensina como despertar o ápice do prazer tanto no corpo masculino quanto no feminino.",
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "TOQUE QUE INCENDEIA",
      desc: "Técnicas de toque consciente que despertam cada centímetro da pele, criando uma conexão elétrica entre o casal.",
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0V12m-3.5 0h.01M11 11V9a1.5 1.5 0 113 0v4.5m-3-4.5h.01M15 11V10a1.5 1.5 0 113 0v5.5m-3-5.5h.01M19 13v1a4 4 0 01-4 4h-3a4 4 0 01-4-4v-1m11 1h.01M10 2l1 1m3-1l-1 1m-2-2v1" />
        </svg>
      )
    },
    {
      title: "PRAZER PARA OS DOIS",
      desc: "Domine os segredos para controlar a energia e expandir o orgasmo. Você aprenderá a dar e receber prazer absoluto.",
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "YONI & LINGAM",
      desc: "O passo a passo detalhado da massagem íntima feminina (Yoni) e masculina (Lingam), focado em cura e êxtase total.",
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-black">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.6em] mb-4 block">Conteúdo Completo</span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight italic">
            O QUE VOCÊ VAI <span className="text-red-600 neon-red">APRENDER</span>?
          </h2>
          <div className="w-32 h-1 bg-red-600 mx-auto mt-6 rounded-full opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {learningItems.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.6)]">
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white uppercase mb-3 tracking-tighter italic">
                {item.title}
              </h3>
              <p className="text-stone-400 text-sm md:text-base leading-relaxed font-medium max-w-[300px] md:max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-8 rounded-[2.5rem] border-2 border-dashed border-red-900/30 bg-red-950/5 text-center">
           <p className="text-white font-bold text-lg md:text-xl uppercase tracking-tighter">
             Domine a arte de dar prazer para <span className="text-red-600 underline decoration-red-600/30 underline-offset-8">qualquer parceiro(a)</span> com segurança e autoridade.
           </p>
        </div>
      </div>
    </section>
  );
};

export default Features;