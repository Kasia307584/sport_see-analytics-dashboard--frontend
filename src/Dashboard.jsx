import { useParams } from "react-router-dom";
import { getMainDataMock } from "./getDataMock";

export default function Dashboard() {
  const { userId } = useParams();

  const data = getMainDataMock();
  console.log(data);

  const user = data.find((item) => item.id === userId);
  console.log(user);

  return (
    <div className="wrapper">
      <h1>Bonjour {user}</h1>
    </div>
  );
}
