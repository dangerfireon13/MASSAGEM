import React, { useState } from 'react';
import Hero from './components/Hero';
import AngellaSection from './components/AngellaSection';
import PracticalModules from './components/PracticalModules';
import Bonuses from './components/Bonuses';
import Certificate from './components/Certificate';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import ChatBot from './components/ChatBot';
import Gatekeeper from './components/Gatekeeper';
import Disclaimer from './components/Disclaimer';
import Features from './components/Features';

const App: React.FC = () => {
  const [step, setStep] = useState<'gate' | 'disclaimer' | 'content'>('gate');

  if (step === 'gate') {
    return <Gatekeeper onConfirm={() => setStep('disclaimer')} />;
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-900 selection:text-white">
      {step === 'disclaimer' && <Disclaimer onClose={() => setStep('content')} />}
      
      <div className={step === 'disclaimer' ? 'blur-sm pointer-events-none' : ''}>
        <main className="overflow-x-hidden">
          <Hero />
          <Features />
          <AngellaSection />
          <PracticalModules />
          <Bonuses />
          <Certificate />
          <Testimonials />
          <Pricing />
          {/* Seção final que encerra o site conforme solicitado */}
          <FAQ />
        </main>
        <ChatBot />
      </div>
    </div>
  );
};

export default App;