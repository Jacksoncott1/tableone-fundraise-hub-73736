
import React from 'react';
import { Sparkles, Clock, Boxes } from 'lucide-react';

interface GameCardProps {
  game: string;
  description: string;
  status: 'live' | 'soon' | 'planned';
  metric?: string;
  delay: number;
}

const GameCard: React.FC<GameCardProps> = ({ game, description, status, metric, delay }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'live':
        return 'from-green-500/20 to-emerald-500/20 border-green-500/40';
      case 'soon':
        return 'from-purple-500/20 to-violet-500/20 border-purple-500/40';
      case 'planned':
        return 'from-blue-500/10 to-gray-500/10 border-blue-500/20';
    }
  };

  const getStatusBadge = () => {
    switch (status) {
      case 'live':
        return (
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-xs text-green-400 font-medium">LIVE NOW</span>
          </div>
        );
      case 'soon':
        return (
          <div className="flex items-center space-x-2 mb-3">
            <Clock className="w-3 h-3 text-purple-400" />
            <span className="text-xs text-purple-400 font-medium">LAUNCHING SOON</span>
          </div>
        );
      case 'planned':
        return (
          <div className="flex items-center space-x-2 mb-3">
            <Boxes className="w-3 h-3 text-blue-400" />
            <span className="text-xs text-blue-400 font-medium">IN DEVELOPMENT</span>
          </div>
        );
    }
  };

  return (
    <div
      className={`glass-card backdrop-blur-xl bg-gradient-to-br ${getStatusColor()} shadow-xl p-6 flex flex-col animate-fade-in hover:translate-y-[-5px] transition-all duration-500 group relative overflow-hidden`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        {getStatusBadge()}
        
        <h3 className="text-xl font-semibold mb-2 text-white font-sfpro">{game}</h3>
        <p className="text-white/70 text-sm leading-relaxed mb-3 font-sfpro">{description}</p>
        
        {metric && (
          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="text-xs text-green-400 font-medium">{metric}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const GameExpansion: React.FC = () => {
  return (
    <section id="expansion" className="py-8 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl mb-4 animate-fade-in text-gradient-metallic font-sfpro font-medium" style={{ letterSpacing: '-0.5px' }}>
            Game Coverage Expansion
          </h2>
          <p className="text-base max-w-2xl mx-auto animate-fade-in animate-delay-100 text-[#8E8E93] font-sfpro">
            Gamble AI is revolutionizing every probability-based game, one decision at a time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <GameCard
            game="Poker"
            description="Real-time hand analysis and AI-backed odds coaching for optimal decision-making."
            status="live"
            metric="+22% avg ROI improvement"
            delay={100}
          />
          
          <GameCard
            game="Blackjack"
            description="Dynamic probability tracking and bet optimization engine for maximum edge."
            status="live"
            metric="Poker AI accuracy: 94.3%"
            delay={200}
          />
          
          <GameCard
            game="Sports Betting"
            description="Predictive algorithms trained on real market odds and comprehensive player data."
            status="soon"
            delay={300}
          />
          
          <GameCard
            game="Roulette"
            description="Spin probability modeling and outcome visualization engine for strategic betting."
            status="soon"
            delay={400}
          />
          
          <GameCard
            game="Baccarat"
            description="High-precision pattern recognition models for sophisticated gameplay."
            status="planned"
            delay={500}
          />
          
          <GameCard
            game="Fantasy Markets"
            description="AI-driven prediction systems for virtual betting and esports competitions."
            status="planned"
            delay={600}
          />
          
          <GameCard
            game="Craps & Slots"
            description="Long-term bankroll management and outcome simulation training systems."
            status="planned"
            delay={700}
          />
        </div>
      </div>
    </section>
  );
};

export default GameExpansion;
