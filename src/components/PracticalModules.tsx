
import React from 'react';

const modules = [
  {
    title: "MASSAGEM NURU",
    activity: "Práticas com modelos reais e óleos especiais",
    image: "https://cdn-mars.vendd.com.br/p/DBftsXQtVBAGY1Ok1kE6RR6Eb7HL1Wg2pU4Gy9pE7daTgwuz/v-files/assets/IMG_5571_Facetune_24_08_2021_15_26_59_e1630595372454_scaled_1_768x541_1.webp",
    tag: "Exclusivo"
  },
  {
    title: "MASSAGEM ORGÁSTICA",
    activity: "Alcançando o prazer extremo e desinibição",
    image: "https://cdn-mars.vendd.com.br/p/DBftsXQtVBAGY1Ok1kE6RR6Eb7HL1Wg2pU4Gy9pE7daTgwuz/v-files/assets/orgasmo_terapeutico_768x512_1.webp",
    tag: "Avançado"
  },
  {
    title: "TÉCNICAS DE ESGUICHO FEMININO",
    activity: "Domine a arte do esguicho com precisão e sensibilidade",
    image: "https://cdn-mars.vendd.com.br/p/DBftsXQtVBAGY1Ok1kE6RR6Eb7HL1Wg2pU4Gy9pE7daTgwuz/v-files/assets/12_768x308_1.webp",
    tag: "Poderoso"
  },
  {
    title: "DESCOBRINDO PONTOS ERÓGENOS",
    activity: "Mapa do prazer: todos os pontos que fazem ter orgasmos extremos.",
    image: "https://cdn-mars.vendd.com.br/p/DBftsXQtVBAGY1Ok1kE6RR6Eb7HL1Wg2pU4Gy9pE7daTgwuz/v-files/assets/massagem_tantrica_em_niteroi_e1725906934521.webp",
    tag: "Revelação"
  },
  {
    title: "MASSAGEM SENSITIVA",
    activity: "Toques poderosos que despertam a derme",
    image: "https://cdn-mars.vendd.com.br/p/DBftsXQtVBAGY1Ok1kE6RR6Eb7HL1Wg2pU4Gy9pE7daTgwuz/v-files/assets/8mfsx7056fqeqnkplk5onu5z4_768x431_1.webp",
    tag: "Conexão"
  },
  {
    title: "MASSAGEM TÂNTRICA",
    activity: "Técnicas que vão transformar sua vida sexual",
    image: "https://cdn-mars.vendd.com.br/p/DBftsXQtVBAGY1Ok1kE6RR6Eb7HL1Wg2pU4Gy9pE7daTgwuz/v-files/assets/Design_sem_nome1_768x432_1.webp",
    tag: "Vitalidade"
  }
];

const PracticalModules: React.FC = () => {
  return (
    <section id="metodo" className="bg-stone-950 py-12 md:py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div className="max-w-xl">
            <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.4em] mb-2 block">Imersão em vídeo</span>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase italic leading-none">
              DOMINE TODAS AS <br/>
              <span className="text-red-600">MODALIDADES.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {modules.map((m, idx) => (
            <div key={idx} className="group relative aspect-square rounded-2xl overflow-hidden border border-red-900/20">
              <img 
                src={m.image} 
                alt={m.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
              
              <div className="absolute top-4 left-4">
                 <span className="bg-red-600 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                   {m.tag}
                 </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 transform group-hover:-translate-y-1 transition-transform">
                <h3 className="text-lg font-black text-white uppercase italic mb-1 tracking-tighter leading-tight">{m.title}</h3>
                <p className="text-stone-300 text-[11px] font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {m.activity}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticalModules;
