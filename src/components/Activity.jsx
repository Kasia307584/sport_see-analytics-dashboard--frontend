import { useParams } from "react-router-dom";
import { getUserActivity } from "../services/getDataMock";

export default function Activity() {
  const { userId } = useParams();
  const idNum = Number.parseInt(userId, 10);

  const data = getUserActivity();

  const user = data.find((item) => item.userId === idNum);

  return (
    <div className="wrapper">
      {user.sessions.map((item) => (
        <li key={item.day}>
          {item.day}, {item.kilogram} kilograms,{item.calories} calories
        </li>
      ))}
    </div>
  );
}
