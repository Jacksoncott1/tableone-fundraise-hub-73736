
import React, { useRef, useEffect } from 'react';
import CountUp from './CountUp';

interface BenchmarkProps {
  title: string;
  tableOneValue: number;
  benchmarkValue: number;
  description: string;
  delay: number;
}

const BenchmarkItem: React.FC<BenchmarkProps> = ({ 
  title, 
  tableOneValue, 
  benchmarkValue, 
  description,
  delay 
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          if (itemRef.current) {
            itemRef.current.classList.add('animate-fade-in');
          }
        }
      },
      { threshold: 0.1 }
    );
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={itemRef}
      className="glass-card p-6" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <h4 className="text-lg font-semibold mb-5 font-quicksand">{title}</h4>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-white/70 text-xs">Gamble AI Users</span>
          <span className="text-white text-xs font-medium">
            <CountUp end={tableOneValue} suffix="%" delay={0} />
          </span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full shadow-lg shadow-green-500/30"
            style={{ width: `${tableOneValue}%`, transition: 'width 2s ease-in-out' }}
          ></div>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-white/70 text-xs">Average Gambler</span>
          <span className="text-white/70 text-xs">
            <CountUp end={benchmarkValue} suffix="%" delay={0} />
          </span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-red-900/50 to-gray-700/50 h-2 rounded-full"
            style={{ width: `${benchmarkValue}%`, transition: 'width 2s ease-in-out' }}
          ></div>
        </div>
      </div>
      
      <p className="text-white/60 text-xs mt-5">{description}</p>
    </div>
  );
};

const Benchmarks: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BenchmarkItem
          title="Win Rate Improvement"
          tableOneValue={87}
          benchmarkValue={42}
          description="Users guided by AI make statistically smarter decisions."
          delay={200}
        />
        
        <BenchmarkItem
          title="Loss Reduction"
          tableOneValue={88}
          benchmarkValue={52}
          description="AI users minimize losses through calculated betting patterns."
          delay={300}
        />
        
        <BenchmarkItem
          title="Session Profitability"
          tableOneValue={79}
          benchmarkValue={33}
          description="Most Gamble AI users finish sessions profitable within 2 days."
          delay={400}
        />
      </div>
    </div>
  );
};

export default Benchmarks;
