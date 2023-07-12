import { Outlet } from "react-router-dom";
import logo from "../../images/logo.png";
import bicycle from "../../images/icon-bicycle.png";
import gym from "../../images/icon-gym.png";
import meditation from "../../images/icon-meditation.png";
import swim from "../../images/icon-swim.png";
import styles from "./PagesLayout.module.css";

export default function Layout() {
  return (
    <>
      <header className={styles["header-wrapper"]}>
        <div className={styles["header-logo"]}>
          <img src={logo} alt="logo" className={styles.logo} />
        </div>
        <nav className={styles["navbar-horizontal"]}>
          <ul className={styles["navbar-horizontal__list"]}>
            <li>Accueil</li>
            <li>Profil</li>
            <li>Réglage</li>
            <li>Communauté</li>
          </ul>
        </nav>
      </header>
      <div className={styles["leftMenu-wrapper"]}>
        <nav className={styles["navbar-vertical"]}>
          <ul className={styles["navbar-vertical__list"]}>
            <li>
              <img
                src={meditation}
                alt="meditation-icon"
                className={styles["nav-icon"]}
              />
            </li>
            <li>
              <img src={swim} alt="swim-icon" className={styles["nav-icon"]} />
            </li>
            <li>
              <img
                src={bicycle}
                alt="bicycle-icon"
                className={styles["nav-icon"]}
              />
            </li>
            <li>
              <img src={gym} alt="gym-icon" className={styles["nav-icon"]} />
            </li>
          </ul>
        </nav>
        <p className={styles.copyright}>Copyright, SoprtSee 2020</p>
      </div>

      <Outlet />
    </>
  );
}
