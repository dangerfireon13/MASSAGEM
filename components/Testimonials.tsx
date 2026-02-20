
import React, { useRef, useState, useEffect } from 'react';

const testimonialImages = [
  "https://venenofeminino.online/wp-content/uploads/2025/07/IMG_8159-1-768x1046.webp",
  "https://venenofeminino.online/wp-content/uploads/2025/07/IMG_8160-1-768x1143.webp",
  "https://venenofeminino.online/wp-content/uploads/2025/07/Design_sem_nome_-_2024-09-15T101757.015-removebg-preview-e1726406883129.png",
  "https://venenofeminino.online/wp-content/uploads/2025/07/Design_sem_nome_-_2024-09-15T104559.343-removebg-preview-removebg-preview.png",
  "https://venenofeminino.online/wp-content/uploads/2025/07/Design_sem_nome_-_2024-09-15T101707.040-removebg-preview-e1726406869454.png",
  "https://dicasdopadrinho.com.br/wp-content/uploads/2023/08/Copia-de-Massagem-gemeu-tremeu-e-pediu-mais-1-529x1024.jpeg.webp"
];

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const index = Math.round(scrollRef.current.scrollLeft / scrollRef.current.clientWidth);
      setActiveIndex(index);
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-black border-t border-red-900/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.6em] mb-3 block">Relatos de Transformação</span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-tight">
            O QUE DIZEM SOBRE A <br/>
            <span className="text-red-600 neon-red">EXPERIÊNCIA</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-5 rounded-full opacity-50"></div>
        </div>

        <div className="relative">
          {/* Container do Slider - Otimizado para Mobile Swipe */}
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonialImages.map((src, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 w-[85vw] md:w-[400px] snap-center"
              >
                <div className="relative rounded-[2rem] overflow-hidden border-2 border-red-900/20 bg-stone-900/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
                  <img 
                    src={src} 
                    alt={`Depoimento ${i + 1}`} 
                    className="w-full h-auto object-cover" 
                    loading="lazy"
                  />
                  {/* Overlay gradiente inferior para legibilidade caso haja texto na imagem */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicadores de Paginação Mobile */}
          <div className="flex justify-center items-center gap-2 mt-4">
            {testimonialImages.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === i 
                    ? 'w-8 h-1.5 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]' 
                    : 'w-1.5 h-1.5 bg-stone-700'
                }`}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-stone-500 text-[11px] font-bold uppercase tracking-widest max-w-xs mx-auto leading-relaxed">
            Deslize para o lado para ver como <br/>
            o método transforma vidas.
          </p>
          
          <div className="mt-10 md:hidden">
             <a 
               href="#precos" 
               className="inline-block bg-[#22C55E] text-black font-black py-4 px-10 rounded-2xl text-lg shadow-[0_8px_0_rgb(21,128,61)] uppercase tracking-tighter"
             >
               QUERO TER ESSES RESULTADOS
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
