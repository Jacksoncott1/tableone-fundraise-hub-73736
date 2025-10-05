
import React from 'react';
import { 
  LineChart, 
  Line, 
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

interface WinRateChartProps {
  data: ChartData[];
}

const WinRateChart: React.FC<WinRateChartProps> = ({ data }) => {
  return (
    <>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="name" 
              stroke="rgba(255,255,255,0.6)"
            />
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
            <Line 
              type="monotone" 
              dataKey="gambleAI" 
              name="Gamble AI Users" 
              stroke="#05d9a7" 
              strokeWidth={3}
              activeDot={{ r: 8 }} 
              dot={{ r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="average" 
              name="Average Gamblers" 
              stroke="#ea384c" 
              strokeWidth={3}
              activeDot={{ r: 8 }} 
              dot={{ r: 4 }}
              strokeDasharray="5 5"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-center gradient-subheading">
        <p>Gamble AI users maintain 87% win rate vs 42% average</p>
      </div>
    </>
  );
};

export default WinRateChart;
