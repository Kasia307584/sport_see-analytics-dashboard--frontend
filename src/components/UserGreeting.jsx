import { useParams } from "react-router-dom";
import { getMainData } from "../services/getDataMock";

export default function UserGreeting() {
  const { userId } = useParams();

  const user = getMainData(userId);

  return (
    <div className="wrapper">
      <h1>Bonjour {user.userInfos.firstName}</h1>
    </div>
  );
}
