import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

export default function PerformanceChart(props) {
  const { performanceData } = props;

  return (
    <div className="performance-wrapper">
      <RadarChart
        width={300}
        height={300}
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={performanceData}
        style={{ background: "#000000" }}
      >
        <PolarGrid stroke="#FFFFFF" />
        <PolarAngleAxis dataKey="kind" stroke="#FFFFFF" tickLine={false} />
        <Radar
          dataKey="value"
          stroke="#FF0000"
          fill="#FF0000"
          fillOpacity={0.7}
        />
      </RadarChart>
    </div>
  );
}
