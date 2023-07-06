// import { useParams } from "react-router-dom";
// import { getPerformance } from "../../services/getDataMock";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

const data = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default function PerformanceChart() {
  // const { userId } = useParams();

  // const user = getPerformance(userId);

  // const chartSubject1 = user.kind[1];
  // console.log(chartSubject1);

  // const chartSubjects = Object.values(user.kind);
  // console.log(chartSubjects);

  // const subjectValues = user.data.map((item) => {
  //   return item.value;
  // });
  // console.log(subjectValues);

  return (
    <div className="performance-wrapper">
      <RadarChart
        width={300}
        height={300}
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={data}
        style={{ background: "#000000" }}
      >
        <PolarGrid stroke="#FFFFFF" />
        <PolarAngleAxis dataKey="subject" stroke="#FFFFFF" tickLine={false} />
        <Radar dataKey="A" stroke="#FF0000" fill="#FF0000" fillOpacity={0.7} />
      </RadarChart>
    </div>
  );
}
