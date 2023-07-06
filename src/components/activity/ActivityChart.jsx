import { useParams } from "react-router-dom";
import { getUserActivity } from "../../services/getDataMock";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function ActivityChart() {
  const { userId } = useParams();

  const user = getUserActivity(userId);

  const data = user.sessions.map((item) => ({
    name: item.day,
    uv: item.kilogram,
    pv: item.calories,
  }));

  const tooltipStyle = {
    backgroundColor: "#FF0000",
    color: "#ededed",
  };

  return (
    <div className="activity-wrapper">
      <BarChart
        width={800}
        height={250}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={10}
        barGap={10}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="name"
          tickLine={false}
          stroke="#888888"
          tickSize={17}
          axisLine={{ stroke: "#d4d4d4", strokeWidth: 1 }}
        />
        <YAxis
          yAxisId="left"
          orientation="right"
          stroke="#888888"
          tickLine={false}
          tickSize={17}
          axisLine={false}
        />
        <YAxis yAxisId="right" orientation="left" stroke="#888888" hide />
        <Tooltip itemStyle={tooltipStyle} />
        <Legend />
        <Bar
          yAxisId="left"
          dataKey="uv"
          fill="#000000"
          radius={[20, 20, 0, 0]}
        />
        <Bar
          yAxisId="right"
          dataKey="pv"
          fill="#FF0000"
          radius={[20, 20, 0, 0]}
        />
      </BarChart>
    </div>
  );
}

// tu pourrais modifier tes donnees directement ici, dans data - name: ici, mais il est demandé de le faire dans une fonction a part, avant
