
import React, { useState } from 'react';
import { TabsContent } from './ui/tabs';
import SubscriberGrowthChart from './charts/SubscriberGrowthChart';
import LifetimeValueChart from './charts/LifetimeValueChart';
import WinRateChart from './charts/WinRateChart';
import ProfitabilityChart from './charts/ProfitabilityChart';
import ChartTabs from './charts/ChartTabs';
import RevenueHeader from './charts/RevenueHeader';

const RevenueChart: React.FC = () => {
  const [selectedChart, setSelectedChart] = useState("winRate");
  
  // Win Rate data
  const winRateData = [
    { name: 'Sep \'24', gambleAI: 78, average: 42 },
    { name: 'Oct \'24', gambleAI: 81, average: 43 },
    { name: 'Nov \'24', gambleAI: 83, average: 41 },
    { name: 'Dec \'24', gambleAI: 84, average: 42 },
    { name: 'Jan \'25', gambleAI: 86, average: 43 },
    { name: 'Feb \'25', gambleAI: 86, average: 42 },
    { name: 'Mar \'25', gambleAI: 87, average: 42 },
  ];

  // Profitability data
  const profitabilityData = [
    { name: 'Sep \'24', gambleAI: 68, average: 28 },
    { name: 'Oct \'24', gambleAI: 71, average: 30 },
    { name: 'Nov \'24', gambleAI: 73, average: 31 },
    { name: 'Dec \'24', gambleAI: 75, average: 32 },
    { name: 'Jan \'25', gambleAI: 77, average: 32 },
    { name: 'Feb \'25', gambleAI: 78, average: 33 },
    { name: 'Mar \'25', gambleAI: 79, average: 33 },
  ];

  // Decision Accuracy data
  const accuracyData = [
    { name: 'Sep \'24', value: 82 },
    { name: 'Oct \'24', value: 85 },
    { name: 'Nov \'24', value: 87 },
    { name: 'Dec \'24', value: 89 },
    { name: 'Jan \'25', value: 91 },
    { name: 'Feb \'25', value: 92 },
    { name: 'Mar \'25', value: 94 },
  ];
  
  // User Growth data
  const userGrowthData = [
    { name: 'Sep \'24', value: 375 },
    { name: 'Oct \'24', value: 745 },
    { name: 'Nov \'24', value: 1072 },
    { name: 'Dec \'24', value: 1275 },
    { name: 'Jan \'25', value: 1486 },
    { name: 'Feb \'25', value: 1677 },
    { name: 'Mar \'25', value: 2031 },
  ];
  
  return (
    <section id="revenue" className="py-8 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl mb-6 text-gradient-metallic font-sfpro font-medium" style={{ letterSpacing: '-0.5px' }}>
          Our Player Performance Journey
        </h2>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-[#8E8E93] font-sfpro">
          Consistent improvement in decision-making accuracy and profit rate for gamblers coached by Gamble AI.
        </p>
      </div>

        <div className="glass-card backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl p-6 md:p-8 max-w-5xl mx-auto">
          <RevenueHeader 
            selectedChart={selectedChart} 
          />

          <div className="mb-5">
            <ChartTabs 
              selectedChart={selectedChart} 
              onTabChange={setSelectedChart}
            >
              <TabsContent value="winRate" className="pt-4">
                <WinRateChart data={winRateData} />
              </TabsContent>

              <TabsContent value="profitability" className="pt-4">
                <ProfitabilityChart data={profitabilityData} />
              </TabsContent>

              <TabsContent value="accuracy" className="pt-4">
                <LifetimeValueChart data={accuracyData} />
              </TabsContent>

              <TabsContent value="growth" className="pt-4">
                <SubscriberGrowthChart data={userGrowthData} />
              </TabsContent>
            </ChartTabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueChart;
