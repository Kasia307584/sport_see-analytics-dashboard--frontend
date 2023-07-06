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

  const tooltipStyle = {
    color: "#000000",
  };

  return (
    <div className="sessions-wrapper">
      <LineChart
        width={300}
        height={300}
        data={data}
        style={{ background: "#FF0000" }}
      >
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={false}
          tickSize={17}
          stroke="#c7c7c7"
        />
        <Tooltip itemStyle={tooltipStyle} />
        <Line type="monotone" dataKey="uv" stroke="#ededed" strokeWidth={2} />
      </LineChart>
    </div>
  );
}
