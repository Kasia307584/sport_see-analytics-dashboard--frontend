// import { useParams } from "react-router-dom";
// import { getMainData } from "../../services/getDataMock";

export default function UserGreeting(props) {
  const { userName } = props;
  // const { userId } = useParams();

  // const user = getMainData(userId);

  return (
    <div className="greeting-wrapper">
      <h1 className="greeting-main">
        Bonjour <span className="user-name">{userName}</span>
      </h1>
      <p className="greeting-message">
        Félicitations ! Vous avez explosé vos objectifs hier
      </p>
    </div>
  );
}
