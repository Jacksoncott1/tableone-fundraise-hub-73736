
import React, { useEffect } from 'react';
import CountUp from '../CountUp';

interface RevenueHeaderProps {
	selectedChart: string;
}

const RevenueHeader: React.FC<RevenueHeaderProps> = ({ selectedChart }) => {
	console.log("Selected chart:", selectedChart);

	const getMetricDisplay = () => {
		switch (selectedChart) {
			case "winRate":
				return {
					title: "Average Win Rate",
					value: "87",
					prefix: "",
					suffix: "%",
					decimals: 0,
					color: "#05d9a7",
					change: "+1.2%"
				};
			case "profitability":
				return {
					title: "Session Profitability",
					value: "79",
					prefix: "",
					suffix: "%",
					decimals: 0,
					color: "#05d9a7",
					change: "+1.3%"
				};
			case "accuracy":
				return {
					title: "AI Decision Accuracy",
					value: "94",
					prefix: "",
					suffix: "%",
					decimals: 0,
					color: "#05d9a7",
					change: "+2.2%"
				};
			case "growth":
				return {
					title: "Active Users",
					value: "2,031",
					prefix: "",
					suffix: "",
					decimals: 0,
					color: "#9b87f5",
					change: "+21.1%"
				};
			default:
				return {
					title: "Average Win Rate",
					value: "87",
					prefix: "",
					suffix: "%",
					decimals: 0,
					color: "#05d9a7",
					change: "+1.2%"
				};
		}
	};

	const metricInfo = getMetricDisplay();

	return (
		<div className="flex flex-col md:flex-row justify-between items-start mb-6">
			<div className="mb-4 md:mb-0 text-left">
				<h3 className="text-lg font-normal text-[#8E8E93] mb-1 font-sfpro text-left">{metricInfo.title}</h3>
				<div className="text-3xl md:text-4xl font-medium font-sfpro text-gradient-metallic text-left" style={{ letterSpacing: '-0.5px' }}>
				<span className="inline-block">
				{metricInfo.prefix}{metricInfo.value}{metricInfo.suffix}
				</span>
				</div>
			</div>
			<div>
				<div className="flex items-center bg-white/5 px-4 py-2 rounded-full">
					<div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
					<span className="text-white/80 text-sm font-sfpro">{metricInfo.change} from previous month</span>
				</div>
			</div>
		</div>
	);
};

export default RevenueHeader;
