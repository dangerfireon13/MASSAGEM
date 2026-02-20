import React from 'react';

const AngellaSection: React.FC = () => {
  const fullContent = [
    {
      category: "Arte do Toque",
      items: ["Filosofia do Prazer", "Preparação do Ambiente", "Óleos e Elixires", "Presença e Respiração"]
    },
    {
      category: "Práticas Reais",
      items: ["Massagem Nuru", "Tântrica Lingam e Yoni", "Despertar Kundalini", "Expansão da Libido"]
    },
    {
      category: "Êxtase Avançado",
      items: ["Massagem Orgástica", "Técnicas de Squirting", "Pompoarismo", "Multi-orgasmos"]
    },
    {
      category: "Acesso Exclusivo",
      items: ["+130 Aulas", "Comunidade Secreta", "Mapas Erógenos", "Suporte com Angella"]
    }
  ];

  const previewImages = [
    "https://cdn-mars.vendd.com.br/p/DBftsXQtVBAGY1Ok1kE6RR6Eb7HL1Wg2pU4Gy9pE7daTgwuz/v-files/assets/ahoih_J1152551.webp",
    "https://cdn-mars.vendd.com.br/p/DBftsXQtVBAGY1Ok1kE6RR6Eb7HL1Wg2pU4Gy9pE7daTgwuz/v-files/assets/yo_AXQF1152551.webp",
    "https://cdn-mars.vendd.com.br/p/DBftsXQtVBAGY1Ok1kE6RR6Eb7HL1Wg2pU4Gy9pE7daTgwuz/v-files/assets/uga_FRn1152551.webp",
    "https://cdn-mars.vendd.com.br/p/DBftsXQtVBAGY1Ok1kE6RR6Eb7HL1Wg2pU4Gy9pE7daTgwuz/v-files/assets/t_PEcvg1152551.webp",
    "https://cdn-mars.vendd.com.br/p/DBftsXQtVBAGY1Ok1kE6RR6Eb7HL1Wg2pU4Gy9pE7daTgwuz/v-files/assets/e_CXEu_Q1152551.webp",
  ];

  const amandaImageUrl = "https://scontent.fcgh55-1.fna.fbcdn.net/v/t39.30808-6/593997222_789812600764626_8703064354453394793_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=QPFCs5z8ziMQ7kNvwGwZ50u&_nc_ohc=QPFCs5z8ziMQ7kNvwGwZ50u&_nc_oc=Adn59pB2FF37flXH9sUvRX8kpCgYOy1u_XFO5mAabDZyJ8--Lw_mq3Ih1iRwgN_alDGWUPrvOxmPS72PNhtsHM8I&_nc_zt=23&_nc_ht=scontent.fcgh55-1.fna&_nc_gid=-Ra4yB6is9SdOTIGY54bqA&oh=00_AfvoQ5o0DF10HLf6_5fyGY0jOK-GkOnc_mpPyUuLnZVvWQ&oe=699E7A0F";

  return (
    <section id="sobre" className="bg-black py-12 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Apresentação Compacta "de Cantinho" */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16 bg-stone-900/10 p-6 rounded-[3rem] border border-red-900/10">
          <div className="w-40 h-40 md:w-56 md:h-56 flex-shrink-0 relative">
            <div className="absolute inset-0 bg-red-600 rounded-full blur-2xl opacity-20"></div>
            <img 
              src={amandaImageUrl} 
              alt="Angella" 
              className="w-full h-full object-cover rounded-full border-2 border-red-600 shadow-[0_0_30px_rgba(220,38,38,0.3)]"
            />
          </div>
          
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase italic mb-3">
              CONHEÇA A <span className="text-red-600">ANGELLA</span>
            </h2>
            <p className="text-stone-400 text-sm md:text-base leading-relaxed max-w-2xl italic">
              "Minha missão é guiar você pela jornada do autoconhecimento sensorial, transformando cada toque em um ritual de presença absoluta e prazer." 
              <span className="block mt-3 not-italic font-bold text-stone-500 text-[10px] uppercase tracking-widest">— Especialista em Tantra & Energia Vital</span>
            </p>
          </div>
        </div>

        {/* Conteúdo Visual do Curso - Scroll Mais Rápido */}
        <div className="mb-16 text-center">
            <span className="text-amber-500 text-[9px] font-black uppercase tracking-[0.6em] mb-3 block">Imersão em Vídeo</span>
            <h2 className="text-xl md:text-2xl font-black text-white uppercase italic mb-8">DENTRO DA <span className="text-red-600">PLATAFORMA</span></h2>
            
            <div className="relative overflow-hidden group">
              <div className="flex w-[200%] animate-infinite-scroll gap-4">
                  {previewImages.concat(previewImages).map((src, i) => (
                      <div key={i} className="w-56 h-32 md:w-72 md:h-40 flex-shrink-0 rounded-xl overflow-hidden border border-red-900/30 grayscale hover:grayscale-0 transition-all duration-300">
                          <img src={src} className="w-full h-full object-cover" alt="Course Preview" />
                      </div>
                  ))}
              </div>
            </div>
        </div>

        {/* Módulos em Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {fullContent.map((cat, idx) => (
            <div key={idx} className="bg-stone-900/20 p-5 rounded-2xl border border-red-900/10 hover:border-red-600/30 transition-all group">
              <h4 className="text-amber-500 font-black text-[9px] uppercase tracking-widest mb-3 pb-2 border-b border-stone-800">{cat.category}</h4>
              <ul className="space-y-2">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-red-600 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span className="text-stone-400 text-[10px] font-bold group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AngellaSection;