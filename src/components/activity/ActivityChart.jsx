import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <>
        <div
          style={{
            backgroundColor: "#FF0000",
            color: "#fff",
            fontSize: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ padding: "14px 6px" }} className="label">
            {`${payload[0].value}kg`}
          </div>
          <div style={{ padding: "14px 6px" }} className="kCal">
            {`${payload[1].value}kCal`}
          </div>
        </div>
      </>
    );
  }
  return null;
}

export default function ActivityChart(props) {
  const { sessions } = props;

  const data = sessions?.map((item) => ({
    name: item.day,
    kg: item.kilogram,
    kCal: item.calories,
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
        <Tooltip itemStyle={tooltipStyle} content={<CustomTooltip />} />
        <Legend
          height={50}
          wrapperStyle={{ top: 0, right: 25 }}
          layout="horizontal"
          verticalAlign="top"
          align="right"
        />
        <Bar
          yAxisId="left"
          dataKey="kg"
          fill="#000000"
          radius={[20, 20, 0, 0]}
        />
        <Bar
          yAxisId="right"
          dataKey="kCal"
          fill="#FF0000"
          radius={[20, 20, 0, 0]}
        />
      </BarChart>
    </div>
  );
}
