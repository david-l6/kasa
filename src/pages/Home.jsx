import landscapeHome from "../assets/images/landscape_home.jpeg";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div className="home">
      <div className="home_banner">
        <h1>Chez vous, partout et ailleurs</h1>
        <Banner image={landscapeHome} alt="Paysage" />
      </div>
      <div className="home_cards">

      </div>
    </div>
  );
}
