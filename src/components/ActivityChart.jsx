import { useParams } from "react-router-dom";
import { getUserActivity } from "../services/getDataMock";
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
    uv: item.calories,
    pv: item.kilogram,
    amt: 2400,
  }));

  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
      <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
      <Tooltip />
      <Legend />
      <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
      <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" />
    </BarChart>
  );
}

// tu pourrais modifier tes donnees directement ici, dans data - name: ici, mais il est demandé de le faire dans une fonction a part, avant
