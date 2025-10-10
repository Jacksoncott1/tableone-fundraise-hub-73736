import React from 'react';
import NavBar from '../components/NavBar';
import { FileText, Video, Headphones, BookOpen, TrendingUp, Target } from 'lucide-react';
import gambleaiLogo from '../assets/gambleai-logo.png'; // Import the logo

interface ResourceCardProps {
  title: string;
  description: string;
  link: string;
  type: 'article' | 'video' | 'podcast' | 'research';
  delay: number;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, link, type, delay }) => {
  const getIcon = () => {
    switch (type) {
      case 'article':
        return <FileText className="w-5 h-5 text-blue-400" />;
      case 'video':
        return <Video className="w-5 h-5 text-purple-400" />;
      case 'podcast':
        return <Headphones className="w-5 h-5 text-green-400" />;
      case 'research':
        return <BookOpen className="w-5 h-5 text-orange-400" />;
    }
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl p-6 flex items-start space-x-4 animate-fade-in hover:translate-y-[-5px] hover:bg-white/10 transition-all duration-500 group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
        {getIcon()}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-2 text-white font-sfpro group-hover:text-gradient-metallic transition-colors">
          {title}
        </h3>
        <p className="text-white/70 text-sm font-sfpro">{description}</p>
      </div>
    </a>
  );
};

const ResourceSection: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({
  title,
  icon,
  children,
}) => {
  return (
    <div className="mb-16">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
          {icon}
        </div>
        <h2 className="text-2xl md:text-3xl font-medium text-gradient-metallic font-sfpro" style={{ letterSpacing: '-0.5px' }}>
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>
    </div>
  );
};

const Resources: React.FC = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      
      <section className="pt-24 pb-8 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-green-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-medium mb-4 text-gradient-metallic font-sfpro" style={{ letterSpacing: '-0.5px' }}>
              Learning Resources
            </h1>
            <p className="text-base md:text-lg text-[#8E8E93] max-w-2xl mx-auto font-sfpro">
              Master your game with expert insights, research, and proven strategies from gambling professionals.
            </p>
          </div>

          <ResourceSection title="Gambling Research" icon={<BookOpen className="w-6 h-6 text-green-400" />}>
            <ResourceCard
              title="The Mathematics of Casino Games"
              description="Comprehensive analysis of probability theory and expected value across popular casino games."
              link="#"
              type="research"
              delay={100}
            />
            <ResourceCard
              title="Behavioral Economics in Gambling"
              description="How cognitive biases affect decision-making and how AI can counteract them."
              link="#"
              type="research"
              delay={150}
            />
            <ResourceCard
              title="Machine Learning in Game Theory"
              description="The science behind AI-powered gambling strategies and pattern recognition."
              link="#"
              type="research"
              delay={200}
            />
            <ResourceCard
              title="Risk Management Strategies"
              description="Academic research on bankroll management and variance reduction techniques."
              link="#"
              type="research"
              delay={250}
            />
          </ResourceSection>

          <ResourceSection title="Poker Strategy" icon={<Target className="w-6 h-6 text-blue-400" />}>
            <ResourceCard
              title="Advanced Hand Reading Techniques"
              description="Learn to put opponents on ranges and make profitable decisions in complex situations."
              link="#"
              type="article"
              delay={100}
            />
            <ResourceCard
              title="Tournament vs Cash Game Strategy"
              description="Key differences in ICM considerations and optimal play across formats."
              link="#"
              type="video"
              delay={150}
            />
            <ResourceCard
              title="GTO Fundamentals for Beginners"
              description="Understanding game theory optimal play and when to deviate for maximum profit."
              link="#"
              type="article"
              delay={200}
            />
            <ResourceCard
              title="Position Play Masterclass"
              description="Maximizing edge through positional awareness and strategic adjustments."
              link="#"
              type="video"
              delay={250}
            />
          </ResourceSection>

          <ResourceSection title="Blackjack Mastery" icon={<TrendingUp className="w-6 h-6 text-purple-400" />}>
            <ResourceCard
              title="Card Counting Systems Explained"
              description="From Hi-Lo to advanced systems, learn the math behind beating the house."
              link="#"
              type="article"
              delay={100}
            />
            <ResourceCard
              title="Optimal Betting Spreads"
              description="Balance risk and reward with proper bet sizing based on true count."
              link="#"
              type="video"
              delay={150}
            />
            <ResourceCard
              title="Deviation Strategy Guide"
              description="When to deviate from basic strategy for maximum expected value."
              link="#"
              type="article"
              delay={200}
            />
            <ResourceCard
              title="Camouflage Techniques"
              description="Advanced play tactics to avoid detection while maintaining edge."
              link="#"
              type="video"
              delay={250}
            />
          </ResourceSection>

          <ResourceSection title="Video Tutorials" icon={<Video className="w-6 h-6 text-purple-400" />}>
            <ResourceCard
              title="Using Gamble AI: Complete Walkthrough"
              description="Step-by-step guide to maximizing the AI coaching features during live play."
              link="#"
              type="video"
              delay={100}
            />
            <ResourceCard
              title="Live Session Analysis"
              description="Watch professionals break down real hands with AI recommendations."
              link="#"
              type="video"
              delay={150}
            />
            <ResourceCard
              title="Bankroll Management Essentials"
              description="Practical strategies for sustainable long-term gambling success."
              link="#"
              type="video"
              delay={200}
            />
            <ResourceCard
              title="Reading Poker Tells"
              description="Physical and behavioral cues that give away opponent hand strength."
              link="#"
              type="video"
              delay={250}
            />
          </ResourceSection>

          <ResourceSection title="Podcasts" icon={<Headphones className="w-6 h-6 text-green-400" />}>
            <ResourceCard
              title="The Edge: Professional Gambling Insights"
              description="Weekly interviews with top players discussing strategy and mindset."
              link="#"
              type="podcast"
              delay={100}
            />
            <ResourceCard
              title="AI & Gambling: The Future of Gaming"
              description="Exploring how artificial intelligence is transforming gambling strategy."
              link="#"
              type="podcast"
              delay={150}
            />
            <ResourceCard
              title="High Stakes Stories"
              description="Real stories from the biggest games and what we can learn from them."
              link="#"
              type="podcast"
              delay={200}
            />
            <ResourceCard
              title="The Psychology of Winning"
              description="Mental game strategies for maintaining peak performance under pressure."
              link="#"
              type="podcast"
              delay={250}
            />
          </ResourceSection>

          <ResourceSection title="Articles & Guides" icon={<FileText className="w-6 h-6 text-blue-400" />}>
            <ResourceCard
              title="Getting Started with Gamble AI"
              description="Everything you need to know to start using AI-powered gambling assistance."
              link="#"
              type="article"
              delay={100}
            />
            <ResourceCard
              title="Common Gambling Mistakes to Avoid"
              description="Learn from others' errors and improve your decision-making process."
              link="#"
              type="article"
              delay={150}
            />
            <ResourceCard
              title="Building a Sustainable Gambling Career"
              description="Long-term strategies for professional or semi-professional gamblers."
              link="#"
              type="article"
              delay={200}
            />
            <ResourceCard
              title="Understanding Variance and Downswings"
              description="How to maintain perspective and proper play during losing streaks."
              link="#"
              type="article"
              delay={250}
            />
          </ResourceSection>
        </div>
      </section>

      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <img 
                src={gambleaiLogo}
                alt="Gamble AI Logo" 
                className="h-6 md:h-8 mr-2"
              />
            </div>
            <div className="text-white/60 text-sm">
              © {new Date().getFullYear()} Gamble AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Resources;
