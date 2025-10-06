
import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import WhatIsGambleAI from '../components/WhatIsGambleAI';
import FeaturedIn from '../components/FeaturedIn';
import Metrics from '../components/Metrics';
import Benchmarks from '../components/Benchmarks';
import CoreFeatures from '../components/CoreFeatures';
import RevenueChart from '../components/RevenueChart';
import GameExpansion from '../components/GameExpansion';
import FundingProgress from '../components/FundingProgress';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <WhatIsGambleAI />
      <FeaturedIn />
      <Metrics />
      <Benchmarks />
      <CoreFeatures />
      <RevenueChart />
      <GameExpansion />
      <FundingProgress />
      
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <img 
                src="/gambleai-logo.png" 
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

export default Index;
