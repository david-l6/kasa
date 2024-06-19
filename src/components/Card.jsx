import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
export default function Card({ accommodations }) {
  return accommodations.map((accommodation) => (
    <NavLink
      to={`/accommodations/${accommodation.id}`}
      className="card"
      key={accommodation.id}
    >
      <img src={accommodation.cover} alt={accommodation.title} />
      <div className="shadow"></div>
      <h2>{accommodation.title}</h2>
    </NavLink>
  ));
}

Card.propTypes = {
  accommodations: PropTypes.array.isRequired,
};
