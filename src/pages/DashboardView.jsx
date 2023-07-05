import User from "../components/User";
import Activity from "../components/Activity";
import Layout from "./PagesLayout";
import ChartTest from "../components/ChartTest";
import ActivityChart from "../components/ActivityChart";
import SessionsChart from "../components/SessionsChart";

export default function Dashboard() {
  return (
    <>
      <Layout />
      <User />
      <Activity />
      <ChartTest />
      <ActivityChart />
      <SessionsChart />
    </>
  );
}

// je fais mon fetch dans ce composant pour passer les donnees comme props a tous les composants
// tu fait ici useEffect et appelle les 4 functions de fetch et le stocker dans le state
// par contre les donnees ne sont pas celles que j'ai besion
// useEffect va appler la fonction qui modifie les donnees et cette fonction va appeller les 4 fonctions
// puis les state va passer les donnees parametrees vers mes composants avec props
// dans la function qui modifie les donnees je vais preciser si je suis en version moquee ou pas
