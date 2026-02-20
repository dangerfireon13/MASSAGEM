import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-stone-500 pt-24 pb-12 border-t border-red-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <span className="text-3xl font-black tracking-tighter text-white uppercase italic">ANGELLA<span className="text-red-600">.</span></span>
            </div>
            <p className="max-w-md text-base leading-relaxed mb-10 text-stone-400 italic font-serif">
              "Minha missão é guiar você pela jornada do autoconhecimento sensorial, transformando cada toque em um ritual de presença absoluta e prazer."
            </p>
            <div className="flex gap-5">
              <a href="#" className="w-12 h-12 rounded-2xl border border-red-900/30 flex items-center justify-center hover:border-red-600 hover:text-white transition-all bg-stone-900/20 group">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl border border-red-900/30 flex items-center justify-center hover:border-red-600 hover:text-white transition-all bg-stone-900/20 group">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-[0.3em] mb-8">Navegação</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
              <li><a href="#metodo" className="hover:text-red-600 transition-colors">O Método</a></li>
              <li><a href="#conteudo" className="hover:text-red-600 transition-colors">Conteúdo</a></li>
              <li><a href="#sobre" className="hover:text-red-600 transition-colors">Angella</a></li>
              <li><a href="#precos" className="hover:text-red-600 transition-colors">Inscrição</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-[0.3em] mb-8">Suporte</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Área de Membros</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Dúvidas Frequentes</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-[#22C55E] transition-colors flex items-center gap-2">
                <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse"></span>
                WhatsApp Suporte
              </a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-600">
            © 2025 Angella Tantra Experience. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 grayscale opacity-40">
            <img src="https://img.icons8.com/color/48/000000/visa.png" className="h-6" alt="Visa" />
            <img src="https://img.icons8.com/color/48/000000/mastercard.png" className="h-6" alt="Mastercard" />
            <img src="https://img.icons8.com/color/48/000000/pix.png" className="h-6" alt="Pix" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;