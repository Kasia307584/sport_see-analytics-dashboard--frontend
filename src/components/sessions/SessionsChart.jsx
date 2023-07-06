import { useParams } from "react-router-dom";
import { LineChart, Line, XAxis, Tooltip } from "recharts";
import { getAverageSessions } from "../../services/getDataMock";

export default function SessionsChart() {
  const { userId } = useParams();

  const user = getAverageSessions(userId);

  const data = user.sessions.map((item) => ({
    name: item.day,
    uv: item.sessionLength,
  }));

  return (
    <div className="sessions-wrapper">
      <LineChart width={300} height={300} data={data}>
        <XAxis dataKey="name" />
        <Tooltip />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </div>
  );
}
