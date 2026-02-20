import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-red-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tighter text-white uppercase italic">ANGELLA<span className="text-red-600">.</span></span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-[10px] font-black uppercase tracking-widest text-stone-400">
            <a href="#metodo" className="hover:text-red-500 transition-colors">O Método</a>
            <a href="#conteudo" className="hover:text-red-500 transition-colors">Conteúdo</a>
            <a href="#sobre" className="hover:text-red-500 transition-colors">A Angella</a>
            <a href="#precos" className="bg-red-600 text-white px-6 py-2 rounded-full hover:scale-105 transition-all shadow-[0_4px_0_rgb(153,27,27)] font-black animate-pulse shimmer-effect">
              QUERO ME INSCREVER
            </a>
          </div>
          <div className="md:hidden">
            <button className="text-white p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;