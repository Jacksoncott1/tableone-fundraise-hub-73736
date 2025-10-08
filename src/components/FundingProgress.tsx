
import React from 'react';

const FundingProgress: React.FC = () => {
  
  return (
    <section id="invest" className="py-8 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/30"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-medium mb-4 animate-fade-in text-gradient-metallic tracking-tight" style={{ letterSpacing: '-0.5px' }}>
            Start Your Journey
          </h2>
          <p className="text-base md:text-lg text-[#8E8E93] max-w-2xl mx-auto animate-fade-in animate-delay-100 font-sfpro">
            It's time to make the best decision of your gambling life. Join thousands of winners using AI to gain the edge.
          </p>
        </div>
        
        <div className="text-center mt-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:translate-y-[-2px] text-sm"
            >
              Download for iOS
            </a>
            <span className="text-white/60 text-sm">Android coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundingProgress;
