import React from 'react';

const Pricing: React.FC = () => {
  const simplifiedFeatures = [
    { text: "Pack Completo: Massagens Tântricas, Eróticas e Japonesas", icon: "🔥" },
    { text: "Especial Yoni & Lingam + Técnicas de Posições e Pontos de Prazer", icon: "💎" },
    { text: "Mestre em Squirting (Esguicho) e Pompoarismo Masculino/Feminino", icon: "💦" },
    { text: "Bônus: 50 Tons de Cinza, Músicas Ambiente e Mapa Erógeno", icon: "🎵" },
    { text: "Certificado de Conclusão + Suporte Exclusivo Angella", icon: "📜" },
    { text: "Acesso Vitalício em Android, iOS e Desktop", icon: "📱" }
  ];

  return (
    <section id="precos" className="py-12 md:py-24 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[400px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.5em] mb-3 block">Oferta por Tempo Limitado</span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
            CURSO <span className="text-red-600 neon-red">PREMIUM</span>
          </h2>
          <div className="w-20 h-1.5 bg-red-600 mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div>
        </div>
        
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-b from-red-600/40 to-transparent rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.9)]">
            
            {/* Banner Efeito Fênix - Enquadramento Definitivo */}
            <div className="w-full bg-black relative aspect-[16/10] md:aspect-[16/8] flex items-center justify-center border-b border-white/5 p-4 md:p-6 overflow-hidden">
              <img 
                src="https://cdn-mars.vendd.com.br/p/DBftsXQtVBAGY1Ok1kE6RR6Eb7HL1Wg2pU4Gy9pE7daTgwuz/v-files/assets/banner_oferta.png" 
                alt="Efeito Fênix Reborn" 
                className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent pointer-events-none"></div>
            </div>

            <div className="p-6 md:p-10 pt-6 text-center">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 px-4 py-1.5 rounded-full mb-6">
                  <span className="w-2 h-2 bg-red-600 rounded-full animate-ping"></span>
                  <span className="text-red-500 text-[9px] font-black uppercase tracking-widest italic">Inscrições Liberadas</span>
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <span className="text-stone-500 text-sm font-bold line-through mb-1 uppercase tracking-tighter opacity-60 italic">De R$ 225,00 por apenas</span>
                  <div className="flex items-start gap-1">
                    <span className="text-white text-3xl font-black mt-4">R$</span>
                    <span className="text-[110px] md:text-[130px] font-black text-white tracking-tighter leading-none drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">19,90</span>
                  </div>
                  <div className="flex items-center gap-4 mt-6 opacity-60">
                    <div className="flex gap-2">
                       <img src="https://img.icons8.com/ios-filled/50/ffffff/android-os.png" className="w-4 h-4" alt="Android" />
                       <img src="https://img.icons8.com/ios-filled/50/ffffff/mac-os.png" className="w-4 h-4" alt="iOS" />
                       <img src="https://img.icons8.com/ios-filled/50/ffffff/monitor.png" className="w-4 h-4" alt="Desktop" />
                    </div>
                    <span className="text-stone-400 text-[9px] font-black uppercase tracking-widest border-l border-white/20 pl-4 italic">Plataforma Segura</span>
                  </div>
                </div>
              </div>

              {/* Lista Simplificada */}
              <div className="grid grid-cols-1 gap-3 mb-10 text-left max-w-[340px] mx-auto">
                {simplifiedFeatures.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 text-stone-300 bg-white/[0.02] p-4 rounded-2xl border border-white/5 hover:border-red-600/20 transition-all group/item shadow-inner">
                    <span className="text-xl transform group-hover/item:scale-125 transition-transform duration-300">{item.icon}</span>
                    <span className="text-[11px] font-black uppercase tracking-tight leading-tight pt-1 group-hover/item:text-white transition-colors">{item.text}</span>
                  </div>
                ))}
              </div>

              <a href="https://ggcheckout.com.br/checkout/v4/0XlzHWQLQvegxBdyz0rc" target="_blank" rel="noopener noreferrer" className="w-full bg-[#22C55E] text-black font-black py-6 rounded-[1.5rem] text-xl md:text-2xl shadow-[0_12px_0_rgb(21,128,61)] hover:shadow-[0_15px_0_rgb(21,128,61)] hover:-translate-y-1 active:shadow-none active:translate-y-2 transition-all uppercase tracking-tighter mb-8 relative overflow-hidden group animate-pulse-glow shimmer-effect text-center block">
                <span className="relative z-10">QUERO O ACESSO AGORA!</span>
              </a>
              
              {/* Garantia de 7 Dias Destaque */}
              <div className="flex items-center justify-center gap-4 py-6 border-t border-white/10 bg-red-950/10 rounded-b-[2rem]">
                <div className="w-12 h-12 flex-shrink-0 text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                     <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                   </svg>
                </div>
                <div className="text-left">
                  <p className="text-[11px] text-white font-black uppercase tracking-widest leading-none mb-1">Garantia Blindada de 7 Dias</p>
                  <p className="text-[9px] text-stone-500 font-bold uppercase tracking-tight max-w-[180px]">O único curso com garantia de satisfação incondicional.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-stone-700 text-[9px] font-black uppercase tracking-[0.4em]">
          Pagamento Único • Sem Mensalidades • Acesso Imediato
        </p>
      </div>
    </section>
  );
};

export default Pricing;