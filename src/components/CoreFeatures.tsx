
import React from 'react';
import { Sparkles, MessageCircle, Users, BookOpen } from 'lucide-react';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="glass-card backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl p-6 flex flex-col items-start animate-fade-in hover:translate-y-[-5px] transition-all duration-500"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 p-3 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-white font-sfpro">{title}</h3>
      <p className="text-white/70 text-sm leading-relaxed font-sfpro">{description}</p>
    </div>
  );
};

const CoreFeatures: React.FC = () => {
  return (
    <section id="roadmap" className="py-8 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-green-500/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl mb-4 animate-fade-in text-gradient-metallic font-sfpro font-medium" style={{ letterSpacing: '-0.5px' }}>
            What Does Gamble AI Actually Do?
          </h2>
          <p className="text-base max-w-2xl mx-auto animate-fade-in animate-delay-100 text-[#8E8E93] font-sfpro">
            Everything you need to gamble smarter and win more consistently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          <FeatureCard
            icon={<Sparkles className="w-6 h-6 text-green-400" />}
            title="Live In-Game Coaching"
            description="Get real-time AI guidance as you play. Our system analyzes every situation and provides instant strategic advice to help you make the optimal decision in the moment."
            delay={100}
          />
          
          <FeatureCard
            icon={<MessageCircle className="w-6 h-6 text-green-400" />}
            title="Aura AI Assistant"
            description="Your personal gambling expert powered by advanced AI. We spent months training professionals to design an AI that answers any gambling question with real, actionable value."
            delay={200}
          />
          
          <FeatureCard
            icon={<Users className="w-6 h-6 text-green-400" />}
            title="Community Connection"
            description="Connect with like-minded gamblers who take their craft seriously. Share strategies, discuss hands, and learn from others who are committed to winning."
            delay={300}
          />
          
          <FeatureCard
            icon={<BookOpen className="w-6 h-6 text-green-400" />}
            title="Extensive Library"
            description="Access hours of premium content including podcasts, video tutorials, in-depth research, and expert advice for all probability-based gambling games."
            delay={400}
          />
        </div>
        
        <div className="text-center mt-16">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 inline-block animate-fade-in animate-delay-500 shadow-xl">
            <h3 className="text-3xl md:text-4xl font-medium mb-3 text-gradient-metallic font-sfpro" style={{ letterSpacing: '-0.5px' }}>Understand Now?</h3>
            <p className="text-base text-white/80 max-w-xl mx-auto font-sfpro">
              Gamble AI is necessary for consistent success. Without it, you're just gambling blind while others gain the edge. Don't get left behind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
