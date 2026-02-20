import React, { useState } from 'react';

const Guarantee: React.FC = () => {
  const [showTerms, setShowTerms] = useState(false);

  const toggleTerms = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setShowTerms(!showTerms);
  };

  return (
    <section className="py-20 md:py-32 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Glow Suave de Fundo */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          
          {/* Selo de Garantia Estilizado */}
          <div className="flex-shrink-0 relative">
            {/* Glow de destaque atrás do selo */}
            <div className="absolute inset-0 bg-red-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            
            <div className="relative w-56 h-56 md:w-72 md:h-72 flex items-center justify-center">
              {/* SVG do Selo Serrado (Estilo carimbo) */}
              <svg viewBox="0 0 100 100" className="w-full h-full text-red-700 drop-shadow-[0_0_25px_rgba(185,28,28,0.6)]">
                <path 
                  fill="currentColor" 
                  d="M50 0 L54.5 4.5 L60 2 L63.5 7.5 L69.5 6.5 L72 12.5 L78 13 L79 19 L85 21 L84.5 27 L90 31 L88 37 L93 42.5 L89.5 48 L93.5 54 L89 59.5 L91.5 65.5 L86 69.5 L87 76 L81 78.5 L80 84.5 L74 85.5 L71.5 91 L65.5 90.5 L61.5 95.5 L55.5 93.5 L50 97.5 L44.5 93.5 L38.5 95.5 L34.5 90.5 L28.5 91 L26 85.5 L20 84.5 L19 78.5 L13 76 L14 69.5 L8.5 65.5 L11 59.5 L6.5 54 L10.5 48 L7 42.5 L12 37 L10 31 L15.5 27 L15 21 L21 19 L22 13 L28 12.5 L30.5 6.5 L36.5 7.5 L40 2 L45.5 4.5 Z" 
                />
              </svg>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <div className="w-[85%] h-[85%] border-2 border-white rounded-full"></div>
                </div>
                <div className="text-[11px] md:text-[13px] font-black uppercase tracking-[0.2em] mb-[-8px] opacity-90 drop-shadow-lg">Garantia de</div>
                <div className="text-8xl md:text-[120px] font-black italic tracking-tighter leading-none drop-shadow-2xl">07</div>
                <div className="text-[11px] md:text-[13px] font-black uppercase tracking-[0.2em] mt-[-8px] opacity-90 drop-shadow-lg">Dias</div>
              </div>
            </div>
          </div>

          {/* Texto da Garantia */}
          <div className="text-center md:text-left flex-grow">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-8 leading-tight">
              7 DIAS PARA ACESSAR O <br className="hidden md:block" />
              <span className="text-red-600 neon-red">CURSO SEM COMPROMISSO!</span>
            </h2>
            
            <div className="space-y-8">
              <p className="text-stone-400 text-base md:text-xl leading-relaxed font-medium">
                Você pode entrar para essa nova turma do curso, assistir às aulas, começar a aplicar, e, se por algum motivo você decidir que não quer continuar, você tem até <span className="text-white font-bold underline decoration-red-600 underline-offset-8">7 dias para receber o seu dinheiro de volta</span> sem burocracias.
              </p>
              
              <p className="text-white text-lg md:text-2xl font-black uppercase tracking-tighter italic">
                O seu risco é absolutamente <span className="text-red-600 underline decoration-red-600/30">ZERO!</span> <br className="md:hidden" />
                Nada a perder, mas MUITO a ganhar.
              </p>
            </div>

            <div className="mt-12">
              <button 
                onClick={() => toggleTerms()}
                className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-full hover:bg-white/10 transition-all group backdrop-blur-sm"
              >
                <span className="text-white text-xs font-black uppercase tracking-widest italic">Ver Termos da Garantia</span>
                <svg className="w-5 h-5 text-red-600 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Modal de Termos de Garantia (Popup) */}
      {showTerms && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 cursor-pointer" 
            onClick={() => toggleTerms()}
          ></div>
          
          <div className="relative w-full max-w-3xl bg-[#0a0a0a] border border-red-900/30 rounded-[3rem] p-10 md:p-16 overflow-y-auto max-h-[90vh] shadow-[0_0_150px_rgba(220,38,38,0.25)]">
            <button 
              onClick={() => toggleTerms()}
              className="absolute top-8 right-8 text-stone-500 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="mb-10">
              <span className="text-red-600 text-[10px] font-black uppercase tracking-[0.6em] mb-4 block">Segurança Jurídica Garantida</span>
              <h3 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter">
                TERMOS DA <span className="text-red-600">GARANTIA INCONDICIONAL</span>
              </h3>
              <div className="w-24 h-1.5 bg-red-600 mt-6 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
            </div>

            <div className="space-y-8 text-stone-300 text-base md:text-lg leading-relaxed font-medium">
              <p>
                Este site opera em total conformidade com o <span className="text-white font-bold">Artigo 49 do Código de Defesa do Consumidor (Lei nº 8.078/90)</span>, que assegura o Direito de Arrependimento para todas as compras realizadas em ambiente digital.
              </p>
              
              <div className="bg-red-950/20 border-l-8 border-red-600 p-8 rounded-r-3xl italic text-white font-medium shadow-inner">
                "O consumidor pode desistir do contrato, no prazo de 7 dias a contar de sua assinatura ou do ato de recebimento do produto ou serviço, sempre que a contratação de fornecimento de produtos e serviços ocorrer fora do estabelecimento comercial..."
              </div>

              <p>
                Além do amparo legal, oferecemos uma <span className="text-white font-bold">Garantia Blindada de Satisfação</span>. Se em até 7 dias você sentir que o conteúdo não superou suas expectativas, basta solicitar seu estorno.
              </p>

              <div className="space-y-6 pt-6">
                <h4 className="text-white font-black uppercase text-xs tracking-[0.3em]">PROCEDIMENTO DE REEMBOLSO:</h4>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-black text-xs font-black flex items-center justify-center mt-1">01</span>
                    <p className="pt-1">Contate nosso suporte via e-mail ou WhatsApp informando seu interesse no estorno dentro do prazo legal.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-black text-xs font-black flex items-center justify-center mt-1">02</span>
                    <p className="pt-1">A devolução do valor é integral, sem multas ou taxas de cancelamento ocultas.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-black text-xs font-black flex items-center justify-center mt-1">03</span>
                    <p className="pt-1">O processamento do estorno ocorre na mesma modalidade de pagamento utilizada (PIX ou Cartão de Crédito).</p>
                  </li>
                </ul>
              </div>

              <p className="pt-8 text-stone-500 text-[11px] font-bold uppercase tracking-tight border-t border-white/5">
                Nota: Ao solicitar o reembolso, seu acesso à plataforma de membros, bônus e suporte da Angella será revogado imediatamente.
              </p>
            </div>

            <button 
              onClick={() => toggleTerms()}
              className="mt-12 w-full bg-white text-black font-black py-5 rounded-2xl text-lg uppercase tracking-tighter hover:bg-stone-200 transition-colors shadow-[0_8px_20px_rgba(255,255,255,0.1)]"
            >
              ENTENDI E QUERO CONTINUAR
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Guarantee;