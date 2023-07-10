import UserGreeting from "../../components/greeting/UserGreeting";
import ActivityChart from "../../components/activity/ActivityChart";
import SessionsChart from "../../components/sessions/SessionsChart";
import PerformanceChart from "../../components/performance/PerformanceChart";
import ScoreChart from "../../components/score/ScoreChart";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getUserDataFormatted from "../../services/getData";

export default function Dashboard() {
  const { userId } = useParams();

  const [userData, setData] = useState();

  useEffect(() => {
    getUserDataFormatted(Number.parseInt(userId, 10)).then((data) => {
      console.log(data);
      setData(data);
    });
  }, [userId]);

  console.log(userData);

  return (
    <main className="main-content">
      <UserGreeting userName={userData?.mainData?.userInfos?.firstName} />
      <ActivityChart sessions={userData?.activityData?.sessions} />
      <SessionsChart sessions={userData?.averageSessions?.sessions} />
      <PerformanceChart performanceData={userData?.performance} />
      <ScoreChart todayScore={userData?.mainData?.todayScore} />
    </main>
  );
}

// je fais mon fetch dans ce composant pour passer les donnees comme props a tous les composants
// tu fait ici useEffect et appelle les 4 functions de fetch et le stocker dans le state
// par contre les donnees ne sont pas celles que j'ai besion
// useEffect va appler la fonction qui modifie les donnees et cette fonction va appeller les 4 fonctions
// puis les state va passer les donnees parametrees vers mes composants avec props
// dans la function qui modifie les donnees je vais preciser si je suis en version moquee ou pas
