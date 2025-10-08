
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import gambleAiHero from '../assets/gamble-ai-hero.png';
import scienceBadge from '../assets/science-based-badge.png';

const Hero: React.FC = () => {

  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center relative pt-16 pb-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-14 opacity-0 animate-[fadeIn_0.8s_ease_forwards] leading-[1.1] font-sfpro text-gradient-metallic" style={{ animationDelay: '0.4s', letterSpacing: '-0.5px' }}>
            AI Gambling Assistant<br />
            <span className="font-sfpro">
              That <span 
                className="permanent-marker-regular" 
                style={{ 
                  fontWeight: '400', 
                }}
              >
                Thinks</span>&nbsp; For You
            </span>
          </h1>

          <div className="w-full max-w-7xl mb-16 opacity-0 animate-[fadeIn_0.8s_ease_forwards] relative" style={{ animationDelay: '0.6s' }}>
            <img
              src={gambleAiHero}
              alt="Gamble AI App Interface"
              className="w-full h-auto drop-shadow-2xl relative z-0"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-6 opacity-0 animate-[fadeIn_0.8s_ease_forwards] mb-16" style={{ animationDelay: '0.8s' }}>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-1 text-lg font-sfpro"
            >
              Download for iOS
            </a>
          </div>

          <div className="mb-16 opacity-0 animate-[fadeIn_0.8s_ease_forwards]" style={{ animationDelay: '1.0s' }}>
            <img
              src={scienceBadge}
              alt="#1 Science-Based Gambling App"
              className="h-48 md:h-56 lg:h-64 w-auto mx-auto drop-shadow-2xl"
            />
          </div>


          <div className="mt-8 opacity-0 animate-[fadeIn_0.8s_ease_forwards]" style={{ animationDelay: '1.2s' }}>
            <HashLink smooth to="#about" className="w-10 h-10 flex justify-center items-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 hover:scale-110 animate-bounce-subtle">
              <ArrowDown size={16} className="text-white/60" />
            </HashLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
