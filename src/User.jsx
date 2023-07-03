import { useParams } from "react-router-dom";
import { getMainData } from "./getDataMock";

export default function User() {
  const { userId } = useParams();
  const idNum = Number.parseInt(userId, 10);

  const data = getMainData();

  const user = data.find((item) => item.id === idNum);

  return (
    <div className="wrapper">
      <h1>Bonjour {user.userInfos.firstName}</h1>
    </div>
  );
}
