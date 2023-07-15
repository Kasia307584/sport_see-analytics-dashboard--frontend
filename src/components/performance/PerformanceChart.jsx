import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

export default function PerformanceChart(props) {
  const { performanceData } = props;

  return (
    <RadarChart
      width={270}
      height={260}
      cx="50%"
      cy="50%"
      outerRadius="80%"
      data={performanceData}
      style={{
        background: "#000000",
        fontSize: "12px",
        padding: "10px 0",
        borderRadius: "5px",
        margin: "0 40px 0 0",
      }}
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
  );
}
