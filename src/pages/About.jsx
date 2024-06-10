import landscapeAbout from "../assets/images/landscape_about.jpeg";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import abouts from "../assets/data/abouts.json";

export default function About() {
  return (
    <main className="about">
      <div className="about_banner">
        <Banner image={landscapeAbout} alt="Paysage" />
      </div>
      <div className="about_content">
        {abouts.map((about, id) => (
          <Collapse key={id} title={about.title}>
            {about.content}
          </Collapse>
        ))}
      </div>
    </main>
  );
}
