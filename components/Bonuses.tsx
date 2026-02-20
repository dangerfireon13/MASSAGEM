
import React from 'react';

const Bonuses: React.FC = () => {
  const bonusList = [
    {
      id: 1,
      title: "BÔNUS 1",
      image: "https://cdn-mars.vendd.com.br/p/DBftsXQtVBAGY1Ok1kE6RR6Eb7HL1Wg2pU4Gy9pE7daTgwuz/v-files/assets/sensual_768x768_1.webp",
      description: "Você terá acesso exclusivo a músicas para terapias tantra",
      price: "R$ 37,00"
    },
    {
      id: 2,
      title: "BÔNUS 2",
      image: "https://cdn-mars.vendd.com.br/p/DBftsXQtVBAGY1Ok1kE6RR6Eb7HL1Wg2pU4Gy9pE7daTgwuz/v-files/assets/ebooklibido_768x818_1.webp",
      description: "Você terá acesso exclusivo a um protocolo de alimentos para libido",
      price: "R$ 37,00"
    }
  ];

  return (
    <section id="bonus" className="py-12 md:py-16 bg-black flex flex-col items-center px-6">
      <div className="mb-10 text-center">
        <div className="inline-block bg-red-600 px-6 py-2 -skew-x-12 mb-4">
          <h2 className="text-2xl md:text-4xl font-black text-white italic skew-x-12 uppercase tracking-tighter">
            NÃO É SÓ ISSO!
          </h2>
        </div>
        <p className="text-stone-400 text-xs md:text-sm font-bold uppercase tracking-widest">
          Ainda tem esses bônus com uma condição especial
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        {bonusList.map((bonus) => (
          <div key={bonus.id} className="bg-stone-900/30 border border-stone-800 rounded-[2rem] p-6 flex flex-col items-center text-center group hover:border-red-600/30 transition-all duration-500">
            <h3 className="text-amber-500 font-black text-xl mb-6 tracking-widest">
              {bonus.title}
            </h3>
            
            <div className="w-full aspect-square mb-6 overflow-hidden rounded-2xl border-2 border-stone-800 group-hover:border-red-600/50 transition-colors shadow-2xl">
              <img 
                src={bonus.image} 
                alt={bonus.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <p className="text-stone-300 text-sm font-medium leading-relaxed mb-6 max-w-[240px]">
              {bonus.description}
            </p>

            <div className="text-sm font-black uppercase tracking-tighter">
              <span className="text-white">VALOR: </span>
              <span className="text-red-600 line-through mr-2">{bonus.price}</span>
              <span className="text-[#22C55E] text-lg">GRÁTIS</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bonuses;
