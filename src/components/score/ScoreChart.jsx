import { RadialBarChart, RadialBar, Legend, PolarAngleAxis } from "recharts";

const style = {
  top: "50%",
  transform: "translate(0, -50%)",
  lineHeight: "24px",
  fontSize: "16px",
  width: "80px",
};

export default function ScoreChart(props) {
  const { todayScore } = props;

  const data = [
    {
      name: todayScore * 100 + "% de votre objectif",
      uv: todayScore * 100,
    },
  ];

  return (
    <div className="score-wrapper">
      <RadialBarChart
        width={300}
        height={300}
        cx="50%"
        cy="50%"
        innerRadius="65%"
        barSize={10}
        data={data}
        startAngle={90}
        endAngle={450}
        style={{ background: "#fbfbfb" }}
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
      <div></div>
    </div>
  );
}

// pour ajouter le cercle blanc au milieu tu peux essayer :
// apres radialbarchart je mets une div ou p avec class legende
// je la place au centre z-index plus elevé et couleur font blanc et transforme pour l'arondir et translate
// ds ma div je mets p et je mets la valeur todayScore
// dans la div jouer avec la position relative ou absolute mais top et left en pourcentage (45%)
