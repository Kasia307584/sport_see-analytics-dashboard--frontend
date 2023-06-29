import { Outlet } from "react-router-dom";
import logo from "./images/logo.png";
import bicycle from "./images/icon-bicycle.png";
import gym from "./images/icon-gym.png";
import meditation from "./images/icon-meditation.png";
import swim from "./images/icon-swim.png";

export default function Layout() {
  return (
    <>
      <div className="wrapper">
        <div className="header-wrapper">
          <header className="header-logo">
            <img src={logo} alt="logo" className="logo" />
          </header>
          <nav className="navbar-h">
            <ul>
              <li>Accueil</li>
              <li>Profil</li>
              <li>Réglage</li>
              <li>Communauté</li>
            </ul>
          </nav>
          <nav className="navbar-v">
            <ul>
              <li>
                <img
                  src={meditation}
                  alt="meditation-icon"
                  className="nav-icon"
                />
              </li>
              <li>
                <img src={swim} alt="swim-icon" className="nav-icon" />
              </li>
              <li>
                <img src={bicycle} alt="bicycle-icon" className="nav-icon" />
              </li>
              <li>
                <img src={gym} alt="gym-icon" className="nav-icon" />
              </li>
            </ul>
          </nav>
        </div>
        <Outlet />
      </div>
    </>
  );
}
