
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';
import { BarChart, BarChart2, LineChart as LineChartIcon, TrendingUp } from 'lucide-react';

interface ChartTabsProps {
  selectedChart: string;
  onTabChange: (value: string) => void;
  children: React.ReactNode;
}

const ChartTabs: React.FC<ChartTabsProps> = ({
  selectedChart,
  onTabChange,
  children
}) => {
  return (
    <Tabs value={selectedChart} onValueChange={onTabChange} className="w-full">
      <TabsList className="grid grid-cols-4 w-full bg-white/5 p-1">
        <TabsTrigger 
          value="winRate" 
          className="data-[state=active]:bg-white/10 data-[state=active]:text-white"
        >
          <BarChart2 className="w-4 h-4 mr-2" />
          <span className="hidden md:inline">Win Rate</span>
          <span className="inline md:hidden">Win</span>
        </TabsTrigger>
        <TabsTrigger 
          value="profitability" 
          className="data-[state=active]:bg-white/10 data-[state=active]:text-white"
        >
          <TrendingUp className="w-4 h-4 mr-2" />
          <span className="hidden md:inline">Profitability</span>
          <span className="inline md:hidden">Profit</span>
        </TabsTrigger>
        <TabsTrigger 
          value="accuracy" 
          className="data-[state=active]:bg-white/10 data-[state=active]:text-white"
        >
          <LineChartIcon className="w-4 h-4 mr-2" />
          <span className="hidden md:inline">Decision Accuracy</span>
          <span className="inline md:hidden">Accuracy</span>
        </TabsTrigger>
        <TabsTrigger 
          value="growth" 
          className="data-[state=active]:bg-white/10 data-[state=active]:text-white"
        >
          <BarChart className="w-4 h-4 mr-2" />
          <span className="hidden md:inline">User Growth</span>
          <span className="inline md:hidden">Users</span>
        </TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  );
};

export default ChartTabs;
