
import React from 'react';

const WhatIsGambleAI: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-1/2 h-1/2 bg-green-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl mb-12 text-center animate-fade-in font-sfpro text-gradient-metallic font-medium" style={{ letterSpacing: '-0.5px' }}>
            What is Gamble AI?
          </h2>
          
          <div className="glass-card backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-2xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-3xl" />
            
            <div className="relative z-10 space-y-6">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-sfpro font-medium">
                We started Gamble AI because we saw too many passionate gamblers losing money due to emotional decisions and lack of real-time guidance.
              </p>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-sfpro font-medium">
                Our platform uses advanced AI to analyze probability, track patterns, and coach you through every decision—whether you're playing poker, blackjack, or sports betting.
              </p>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-sfpro font-medium">
                Think of it as having a professional gambling strategist in your pocket, working 24/7 to help you make smarter, data-driven choices.
              </p>
              
              <p className="text-xl md:text-2xl text-gradient bg-gradient-to-r from-green-400 to-purple-400 leading-relaxed font-sfpro font-bold">
                With Gamble AI, you're not just gambling—you're playing with an edge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsGambleAI;
