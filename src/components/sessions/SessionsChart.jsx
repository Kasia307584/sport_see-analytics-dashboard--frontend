import { LineChart, Line, XAxis, Tooltip, YAxis } from "recharts";

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <>
        <div
          style={{
            backgroundColor: "white",
            color: "black",
            fontSize: "10px",
            padding: "10px",
          }}
        >
          {`${payload[0].value} min`}
        </div>
      </>
    );
  }
  return null;
}

export default function SessionsChart(props) {
  const { sessions } = props;

  const data = sessions?.map((item) => ({
    name: item.day,
    minutes: item.sessionLength,
  }));

  const minutesValues = data?.map((item) => item.minutes);
  const minMinutes = minutesValues ? Math.min(...minutesValues) : null;
  const maxMinutes = minutesValues ? Math.max(...minutesValues) + 40 : null;

  return (
    <LineChart
      width={270}
      height={260}
      data={data}
      style={{
        background: "#FF0000",
        fontSize: "16px",
        padding: "10px 0",
        borderRadius: "5px",
        margin: "0 40px 0 0",
      }}
      margin={{ top: 5, right: 10, bottom: 10, left: 10 }}
    >
      <text x={30} y={30} fill="#fff" fillOpacity={0.5}>
        Durée moyenne des
      </text>
      <text x={30} y={52} fill="#fff" fillOpacity={0.5}>
        sessions
      </text>
      <XAxis
        dataKey="name"
        tickLine={false}
        axisLine={false}
        tickSize={17}
        tick={{ fill: "#fff", opacity: "0.5" }}
      />
      <YAxis
        axisLine={false}
        tickLine={false}
        tick={() => <text style={{ display: "none" }} />}
        domain={[minMinutes === 0 ? minMinutes : 0, maxMinutes]}
        hide
      />
      <Tooltip content={<CustomTooltip />} />
      <Line
        type="monotone"
        dataKey="minutes"
        stroke="#ededed"
        opacity={0.8}
        strokeWidth={2}
        dot={false}
      />
    </LineChart>
  );
}
