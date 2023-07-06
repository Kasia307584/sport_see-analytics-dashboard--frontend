import UserGreeting from "../../components/greeting/UserGreeting";
import ActivityChart from "../../components/activity/ActivityChart";
import SessionsChart from "../../components/sessions/SessionsChart";
import PerformanceChart from "../../components/performance/PerformanceChart";
import ScoreChart from "../../components/score/ScoreChart";

export default function Dashboard() {
  return (
    <main className="main-content">
      <UserGreeting />
      <ActivityChart />
      <SessionsChart />
      <PerformanceChart />
      <ScoreChart />
    </main>
  );
}

// je fais mon fetch dans ce composant pour passer les donnees comme props a tous les composants
// tu fait ici useEffect et appelle les 4 functions de fetch et le stocker dans le state
// par contre les donnees ne sont pas celles que j'ai besion
// useEffect va appler la fonction qui modifie les donnees et cette fonction va appeller les 4 fonctions
// puis les state va passer les donnees parametrees vers mes composants avec props
// dans la function qui modifie les donnees je vais preciser si je suis en version moquee ou pas