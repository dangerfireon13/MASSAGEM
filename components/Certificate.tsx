
import React from 'react';

const Certificate: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-black flex flex-col items-center px-6 border-t border-red-900/10">
      <div className="max-w-4xl w-full text-center">
        <div className="mb-6 inline-block">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-2">
            CERTIFICADO INCLUSO
          </h2>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent opacity-80"></div>
        </div>

        <p className="text-stone-300 text-sm md:text-lg font-medium leading-relaxed mb-12 max-w-2xl mx-auto">
          Se você pretende ser um profissional na massagem orgástica, <br className="hidden md:block" />
          preparamos um certificado válido como premiação para você!
        </p>

        <div className="relative group max-w-3xl mx-auto">
          {/* Efeito de brilho atrás do certificado */}
          <div className="absolute -inset-4 bg-purple-600/10 blur-[100px] rounded-full group-hover:bg-purple-600/20 transition-all duration-700"></div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-stone-800 transform group-hover:scale-[1.02] transition-transform duration-500">
            <img 
              src="https://cdn-mars.vendd.com.br/p/DBftsXQtVBAGY1Ok1kE6RR6Eb7HL1Wg2pU4Gy9pE7daTgwuz/v-files/assets/CERTIFICADO_SITE_768x434.webp" 
              alt="Certificado Especialista Massagem Tântrica" 
              className="w-full h-auto"
            />
            {/* Overlay sutil para elegância */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
