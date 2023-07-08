import { useParams } from "react-router-dom";
import { getPerformance } from "../../services/getDataMock";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

export default function PerformanceChart() {
  // const { performanceData } = props;

  const { userId } = useParams();

  const performanceData = getPerformance(userId);

  const performanceDataFormatted = performanceData.data.map((item) => {
    const performanceItem = {};

    performanceItem.kind = performanceData.kind[item.kind];
    performanceItem.value = item.value;

    return performanceItem;
  });

  return (
    <div className="performance-wrapper">
      <RadarChart
        width={300}
        height={300}
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={performanceDataFormatted}
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
