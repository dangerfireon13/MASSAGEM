
import React from 'react';

const Instructor: React.FC = () => {
  return (
    <section id="instrutor" className="py-24 bg-stone-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600 rounded-full filter blur-[120px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-amber-600/30 rounded-3xl -rotate-3"></div>
              <img 
                src="https://picsum.photos/seed/instructor/600/800" 
                alt="Instrutor" 
                className="relative rounded-3xl w-full object-cover aspect-[4/5] shadow-2xl"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <span className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4 block">Conheça seu Guia</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Mestre Julian Flow</h2>
            <div className="space-y-6 text-stone-300 text-lg leading-relaxed italic">
              <p>
                "Minha missão é ajudar seres humanos a se reconectarem com sua essência através do corpo. O Tantra não é apenas uma técnica, é um estilo de vida que honra o prazer e a consciência."
              </p>
              <p className="not-italic text-stone-400">
                Com mais de 15 anos de experiência e formações na Índia e Europa, Julian já formou milhares de terapeutas e ajudou casais a redescobrirem a paixão. Ele combina sabedoria ancestral com psicologia moderna de forma única.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-amber-500 text-3xl font-bold mb-1">15+</h4>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-wider">Anos de Prática</p>
              </div>
              <div>
                <h4 className="text-amber-500 text-3xl font-bold mb-1">50k+</h4>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-wider">Alunos Impactados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
