import { RadialBarChart, RadialBar, Legend, PolarAngleAxis } from "recharts";

const style = {
  top: "45%",
  transform: "translate(0, -50%)",
  fontWeight: "bold",
  fontSize: "26px",
};

export default function ScoreChart(props) {
  const { todayScore } = props;

  const data = [
    {
      name: todayScore * 100 + "%",
      uv: todayScore * 100,
    },
  ];

  return (
    <RadialBarChart
      width={270}
      height={260}
      cx="50%"
      cy="50%"
      innerRadius="65%"
      barSize={10}
      data={data}
      startAngle={90}
      endAngle={450}
      style={{
        background: "#fbfbfb",
        padding: "10px 0",
        borderRadius: "5px",
        fontSize: "16px",
      }}
    >
      <text
        x={30}
        y={30}
        fill="black"
        fillOpacity={0.7}
        style={{ fontWeight: "bold" }}
      >
        Score
      </text>
      <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
      <RadialBar dataKey="uv" fill="#FF0000" cornerRadius={25} />
      <Legend
        iconSize={0}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
      <text x={105} y={150}>
        de votre
      </text>
      <text x={110} y={173}>
        objectif
      </text>
    </RadialBarChart>
  );
}
