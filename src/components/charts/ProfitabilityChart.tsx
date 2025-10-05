
import React from 'react';
import { 
  AreaChart,
  Area,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend 
} from 'recharts';

interface ChartData {
  name: string;
  gambleAI: number;
  average: number;
}

interface ProfitabilityChartProps {
  data: ChartData[];
}

const ProfitabilityChart: React.FC<ProfitabilityChartProps> = ({ data }) => {
  return (
    <>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="name" stroke="rgba(255,255,255,0.6)" />
            <YAxis 
              stroke="rgba(255,255,255,0.6)"
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              formatter={(value) => [`${value}%`, '']}
              contentStyle={{
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '0.5rem',
              }}
            />
            <Legend />
            <defs>
              <linearGradient id="colorGambleAI" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#05d9a7" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#05d9a7" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorAverage" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ea384c" stopOpacity={0.6}/>
                <stop offset="95%" stopColor="#ea384c" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area 
              type="monotone" 
              dataKey="gambleAI" 
              name="Gamble AI Users"
              stroke="#05d9a7" 
              fillOpacity={1} 
              fill="url(#colorGambleAI)" 
            />
            <Area 
              type="monotone" 
              dataKey="average" 
              name="Average Gamblers"
              stroke="#ea384c" 
              fillOpacity={1} 
              fill="url(#colorAverage)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-center gradient-subheading">
        <p>79% of Gamble AI sessions end profitable vs 33% average</p>
      </div>
    </>
  );
};

export default ProfitabilityChart;
