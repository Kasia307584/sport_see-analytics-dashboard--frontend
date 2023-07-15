import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import styles from "./ActivityChart.module.css";

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
          <div style={{ padding: "14px 6px" }}>{`${payload[0].value}kg`}</div>
          <div style={{ padding: "14px 6px" }}>{`${payload[1].value}kCal`}</div>
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

  const kgValues = data?.map((item) => item.kg);
  const minKg = kgValues ? Math.min(...kgValues) - 1 : null;
  const maxKg = kgValues ? Math.max(...kgValues) : null;
  const formatYAxisTick = (value) => Math.round(value);

  return (
    <div className={styles["activity-wrapper"]}>
      <BarChart
        width={880}
        height={280}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={10}
        barGap={10}
        style={{ background: "#fbfbfb" }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <text
          x={100}
          y={20}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontWeight: "bold" }}
        >
          Activité quotidienne
        </text>
        <XAxis
          dataKey="name"
          tickLine={false}
          stroke="#888888"
          tickSize={20}
          axisLine={{ stroke: "#d4d4d4", strokeWidth: 1 }}
        />
        <YAxis
          yAxisId="left"
          orientation="right"
          stroke="#888888"
          tickLine={false}
          tickSize={20}
          axisLine={false}
          domain={[minKg, maxKg]}
          tickFormatter={formatYAxisTick}
          tickCount={maxKg - minKg + 1}
        />
        <YAxis
          yAxisId="right"
          orientation="left"
          stroke="#888888"
          hide={true}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          height={70}
          wrapperStyle={{ top: 10, right: 35 }}
          layout="horizontal"
          verticalAlign="top"
          align="right"
          iconType="circle"
          formatter={(colorLegend) => (
            <span style={{ color: "#777" }}>{colorLegend}</span>
          )}
        />
        <Bar
          yAxisId="left"
          dataKey="kg"
          name="Poids (kg)"
          fill="#000000"
          radius={[20, 20, 0, 0]}
        />
        <Bar
          yAxisId="right"
          dataKey="kCal"
          name="Calories brûlées (kCal)"
          fill="#FF0000"
          radius={[20, 20, 0, 0]}
        />
      </BarChart>
    </div>
  );
}
