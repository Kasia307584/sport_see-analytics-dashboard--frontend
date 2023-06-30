import { useParams } from "react-router-dom";
import { getUserActivityMock } from "./getDataMock";

export default function Activity() {
  const { userId } = useParams();
  const idNum = Number.parseInt(userId, 10);

  const data = getUserActivityMock();

  const user = data.find((item) => item.userId === idNum);
  console.log(user);

  return (
    <div className="wrapper">
      {user.sessions.map((item) => (
        <p key={item.userId}>
          {item.day}, {item.kilogram} kilograms,{item.calories} calories
        </p>
      ))}
    </div>
  );
}
