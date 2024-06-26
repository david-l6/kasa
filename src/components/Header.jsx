import logo from "../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo de Kasa" />
      <nav>
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            <li>A Propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
