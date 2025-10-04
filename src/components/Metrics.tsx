
import React, { useEffect, useState } from 'react';
import MetricCard from './metrics/MetricCard';

const Metrics: React.FC = () => {
  // Log confirmation to check if component is rendering
  console.log("Metrics component rendering");
  
  // State to track if image is loaded
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Pre-load the image to ensure it's available
  useEffect(() => {
    const img = new Image();
    img.src = '/lovable-uploads/4d8c82f4-9545-4a55-a994-77325d811978.png';
    img.onload = () => {
      console.log("Background image loaded successfully");
      setImageLoaded(true);
    };
    img.onerror = (e) => {
      console.error("Error loading background image:", e);
    };
  }, []);
  
  return (
    <section id="metrics" className="py-8 relative">
      {/* Background image - using inline styles with important to override any conflicting styles */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: "url('/lovable-uploads/4d8c82f4-9545-4a55-a994-77325d811978.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.4, // Increased opacity for better visibility
          }}
        />
        <div className="absolute inset-0 bg-black/60 z-0" /> {/* Reduced overlay opacity for better image visibility */}
        <div className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-pink-500/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl mb-4 animate-fade-in font-sfpro text-gradient-metallic font-medium" style={{ letterSpacing: '-0.5px' }}>
            Average Gamble AI User Stats
          </h2>
          <p className="text-base max-w-2xl mx-auto animate-fade-in animate-delay-100 text-[#8E8E93] font-sfpro">
            Real results from gamblers who use AI-powered coaching to make smarter decisions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <MetricCard 
            title="Win Rate Improvement"
            value={87}
            description="Higher than average gamblers"
            suffix="%"
            decimals={0}
            delay={200}
          />
          
          <MetricCard 
            title="Average ROI Increase"
            value={34}
            description="More profitable sessions"
            suffix="%"
            delay={300}
          />
          
          <MetricCard 
            title="Active Users"
            value={12500}
            description="Trust Gamble AI daily"
            suffix="+"
            delay={400}
          />
          
          <MetricCard 
            title="Session Profitability"
            value={79}
            description="Users finish sessions profitable"
            suffix="%"
            delay={500}
          />
        </div>
        
        <div className="text-center mt-8 mb-6">
          <h3 className="text-2xl md:text-3xl font-medium mb-3 animate-fade-in text-gradient-metallic font-sfpro" style={{ letterSpacing: '-0.5px' }}>Redefining Gambling Performance</h3>
          <p className="text-[#8E8E93] max-w-2xl mx-auto animate-fade-in animate-delay-100 font-sfpro">
            Gamble AI dramatically improves gambler performance through real-time AI strategy and data-driven coaching.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
