import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "O acesso é vitalício?",
      answer: "Sim! Uma vez comprado, o guia é seu para sempre. Você pode assistir às aulas no seu ritmo, quantas vezes desejar, sem prazo de expiração."
    },
    {
      question: "Como recebo o material?",
      answer: "O acesso é enviado imediatamente para o seu e-mail após a confirmação do pagamento. Você receberá os dados de login para nossa plataforma exclusiva de membros."
    },
    {
      question: "Serve para solteiros?",
      answer: "Com certeza. As técnicas de autoconhecimento e despertar sensorial são fundamentais para qualquer pessoa que busca expansão do prazer e conexão profunda com o próprio corpo."
    },
    {
      question: "As aulas são práticas?",
      answer: "Sim, o curso conta com demonstrações detalhadas e passo a passo das manobras, permitindo que você aprenda a teoria e a aplicação real de cada técnica."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-20 px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="mb-14 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter inline-block relative italic">
            DÚVIDAS <span className="text-red-600">FREQUENTES</span>
            <div className="absolute -bottom-2 left-0 w-full h-1.5 bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-[#0a0a0a] rounded-2xl border transition-all duration-300 ${
                  isOpen ? 'border-red-600/50 shadow-[0_0_30px_rgba(220,38,38,0.1)]' : 'border-white/5 hover:border-white/10'
                }`}
              >
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <h3 className={`font-bold text-lg md:text-xl tracking-tight transition-colors duration-300 ${
                    isOpen ? 'text-red-500' : 'text-white'
                  }`}>
                    {faq.question}
                  </h3>
                  <div className={`relative w-6 h-6 flex items-center justify-center transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
                    <div className="absolute w-4 h-0.5 bg-red-600 rounded-full"></div>
                    <div className={`absolute w-0.5 h-4 bg-red-600 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-90 scale-0' : 'rotate-0'}`}></div>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-8">
                    <div className="w-full h-px bg-white/5 mb-6"></div>
                    <p className="text-stone-400 text-base md:text-lg leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Créditos finais discretos */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-3 opacity-20">
            <div className="h-px w-8 bg-white"></div>
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white">
              ANGELLA • TANTRA EXPERIENCE • 2025
            </p>
            <div className="h-px w-8 bg-white"></div>
          </div>
          <p className="mt-4 text-stone-700 text-[8px] uppercase tracking-widest font-bold">
            Todos os direitos reservados • Site Blindado
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;