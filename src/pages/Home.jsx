import landscapeHome from "../assets/images/landscape_home.jpeg";
import Banner from "../components/Banner";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="home">
      <div className="home_banner">
        <Banner image={landscapeHome} alt="Paysage" />
        <div className="home_banner-opacity"></div>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="home_cards-container">
        <Card />
      </div>
    </div>
  );
}
