import UserGreeting from "../../components/greeting/UserGreeting";
import ActivityChart from "../../components/activity/ActivityChart";
import SessionsChart from "../../components/sessions/SessionsChart";
import PerformanceChart from "../../components/performance/PerformanceChart";
import ScoreChart from "../../components/score/ScoreChart";
import KeyData from "../../components/keyData/KeyData";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getFormattedData from "../../services/getFormattedData";
import styles from "./DashboardView.module.css";

export default function Dashboard() {
  const { userId } = useParams();

  const [userData, setData] = useState();

  useEffect(() => {
    getFormattedData(Number.parseInt(userId, 10)).then((data) => {
      console.log(data);
      setData(data);
    });
  }, [userId]);

  console.log(userData);

  return (
    <main className={styles["main-content"]}>
      <UserGreeting userName={userData?.firstName} />
      <ActivityChart sessions={userData?.sessions} />
      <div className={styles["small-charts"]}>
        <SessionsChart sessions={userData?.avgSessions} />
        <PerformanceChart performanceData={userData?.performance} />
        <ScoreChart todayScore={userData?.todayScore} />
      </div>
      <KeyData keyData={userData?.keyData} />
    </main>
  );
}

// je fais mon fetch dans ce composant pour passer les donnees comme props a tous les composants
// tu fait ici useEffect et appelle les 4 functions de fetch et le stocker dans le state
// par contre les donnees ne sont pas celles que j'ai besion
// useEffect va appler la fonction qui modifie les donnees et cette fonction va appeller les 4 fonctions
// puis les state va passer les donnees parametrees vers mes composants avec props
// dans la function qui modifie les donnees je vais preciser si je suis en version moquee ou pas
