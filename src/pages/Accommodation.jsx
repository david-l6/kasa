import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import Host from "../components/Host";
import Tags from "../components/Tags";
import Rate from "../components/Rate";
import NotFound from "./NotFound";
import accommodations from "../assets/data/accommodations.json";

export default function Accommodation() {
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState(null);

  useEffect(() => {
    const foundAccommodation = accommodations.find((item) => item.id === id);
    setAccommodation(foundAccommodation);
  }, [id]);

  if (!accommodation) {
    return <NotFound />;
  }

  return (
    <main className="accommodation">
      <Slideshow images={accommodation.pictures} />
      <div className="accommodation_head">
        <div className="accommodation_head-title">
          <h1>{accommodation.title}</h1>
          <h2>{accommodation.location}</h2>
        </div>
        <Host host={accommodation.host} />
      </div>
      <div className="accommodation_subhead">
        <Tags tags={accommodation.tags} />
        <Rate rating={parseFloat(accommodation.rating)} />
      </div>
      <div className="accommodation_content">
        <Collapse title="Description">{accommodation.description}</Collapse>
        <Collapse title="Equipements">
          {accommodation.equipments.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </Collapse>
      </div>
    </main>
  );
}
