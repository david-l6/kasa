import PropTypes from "prop-types";

const Host = ({ host }) => {
  const [firstName, lastName] = host.name.split(" ");

  return (
    <div className="accommodation_head-host">
      <div className="accommodation_host-name">
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>
      <img src={host.picture} alt={host.name} />
    </div>
  );
};

Host.propTypes = {
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default Host;
