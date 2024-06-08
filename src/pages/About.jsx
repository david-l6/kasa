import landscapeAbout from "../assets/images/landscape_about.jpeg";
import Banner from "../components/Banner";

export default function About() {
  return (
    <div className="about">
      <div className="about_banner">
        <Banner image={landscapeAbout} alt="Paysage" />
      </div>
      <div className="about_content-wrapper">
        
      </div>
    </div>
  );
}
