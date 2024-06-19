import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="notfound">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n&apos;existe pas.</p>
      <NavLink to="/kasa/">Retourner sur la page d&apos;accueil</NavLink>
    </main>
  );
}
