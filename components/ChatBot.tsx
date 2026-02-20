import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Olá! Sou a Angella. Como posso te ajudar hoje no seu despertar sensorial?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getGeminiResponse(userMsg);
    
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  const angellaImageUrl = "https://scontent.fcgh55-1.fna.fbcdn.net/v/t39.30808-6/593997222_789812600764626_8703064354453394793_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=QPFCs5z8ziMQ7kNvwGwZ50u&_nc_ohc=QPFCs5z8ziMQ7kNvwGwZ50u&_nc_oc=Adn59pB2FF37flXH9sUvRX8kpCgYOy1u_XFO5mAabDZyJ8--Lw_mq3Ih1iRwgN_alDGWUPrvOxmPS72PNhtsHM8I&_nc_zt=23&_nc_ht=scontent.fcgh55-1.fna&_nc_gid=-Ra4yB6is9SdOTIGY54bqA&oh=00_AfvoQ5o0DF10HLf6_5fyGY0jOK-GkOnc_mpPyUuLnZVvWQ&oe=699E7A0F";

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-stone-950 w-72 sm:w-80 h-[420px] rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col border border-red-900/30 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-red-950/80 backdrop-blur-md p-3 flex justify-between items-center text-white border-b border-red-800/30">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border border-amber-600 overflow-hidden bg-black">
                <img src={angellaImageUrl} className="w-full h-full object-cover" alt="Angella AI" />
              </div>
              <div>
                <h4 className="font-black text-xs uppercase italic">Angella Suporte</h4>
                <div className="flex items-center gap-1 text-[9px] opacity-80 uppercase tracking-widest font-bold text-amber-500">
                  <span className="w-1 h-1 rounded-full bg-[#22C55E] animate-pulse"></span>
                  Conectada
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1.5 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-3 space-y-3 bg-black/40">
            {messages.map((msg, i) => (
              <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[90%] p-3 rounded-xl text-[13px] font-medium leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-red-600 text-white rounded-tr-none' 
                    : 'bg-stone-800 text-stone-200 rounded-tl-none'
                }`}>
                  {msg.content}
                </div>
                {msg.role === 'assistant' && (msg.content.includes('QUERO APRENDER AGORA') || msg.content.includes('botão de compra')) && (
                  <a 
                    href="#precos" 
                    onClick={() => setIsOpen(false)}
                    className="mt-1.5 bg-[#22C55E] text-black font-black py-1.5 px-3 rounded-lg text-[10px] uppercase tracking-tighter shadow-[0_3px_0_rgb(21,128,61)] hover:translate-y-0.5 hover:shadow-none transition-all animate-pulse-glow shimmer-effect"
                  >
                    QUERO APRENDER AGORA
                  </a>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-stone-800 p-3 rounded-xl rounded-tl-none flex gap-1">
                  <div className="w-1 h-1 bg-red-600 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-red-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1 h-1 bg-red-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-3 bg-stone-900/50 border-t border-red-900/20">
            <div className="relative flex items-center">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Pergunte sobre as técnicas..."
                className="w-full bg-black/50 text-white border border-red-900/30 rounded-full py-2 pl-4 pr-10 text-xs focus:outline-none focus:border-red-600 transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-1.5 p-1.5 text-red-600 hover:text-red-400 disabled:opacity-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-red-600 hover:bg-red-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all hover:scale-110 active:scale-95 group relative"
        >
          <div className="absolute -top-10 right-0 bg-white text-black text-[9px] font-black py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap uppercase tracking-tighter shadow-xl">
             Dúvidas? Fale comigo!
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </button>
      )}
    </div>
  );
};

export default ChatBot;