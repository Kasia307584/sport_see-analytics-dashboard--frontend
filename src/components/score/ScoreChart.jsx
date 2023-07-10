import { RadialBarChart, RadialBar, Legend, PolarAngleAxis } from "recharts";

const style = {
  top: "50%",
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

export default function ScoreChart(props) {
  const { todayScore } = props;

  const data = [
    {
      name: todayScore + " de votre objectif",
      uv: todayScore + 40,
    },
  ];

  return (
    <div className="score-wrapper">
      <RadialBarChart
        width={300}
        height={300}
        cx="50%"
        cy="50%"
        innerRadius="50%"
        barSize={10}
        data={data}
        startAngle={90}
        style={{ background: "#ededed" }}
      >
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar dataKey="uv" fill="#FF0000" cornerRadius={25} />
        <Legend
          iconSize={0}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </RadialBarChart>
    </div>
  );
}
