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
      setData(data);
    });
  }, [userId]);

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
