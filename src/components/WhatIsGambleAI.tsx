
import React from 'react';

const WhatIsGambleAI: React.FC = () => {
  return (
    <section id="about" className="py-8 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-1/2 h-1/2 bg-green-500/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl mb-6 animate-fade-in font-sfpro text-gradient-metallic font-medium" style={{ letterSpacing: '-0.5px' }}>
            What is Gamble AI?
          </h2>
          
          <div className="glass-card backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl p-8 md:p-12">
            <p className="text-base md:text-lg text-white/80 leading-relaxed font-sfpro">
              We started Gamble AI because we saw too many passionate gamblers losing money due to emotional decisions and lack of real-time guidance. 
              Our platform uses advanced AI to analyze probability, track patterns, and coach you through every decision—whether you're playing poker, blackjack, or sports betting. 
              Think of it as having a professional gambling strategist in your pocket, working 24/7 to help you make smarter, data-driven choices. 
              With Gamble AI, you're not just gambling—you're playing with an edge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsGambleAI;
