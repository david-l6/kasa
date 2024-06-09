import PropTypes from "prop-types";

export default function Banner({ image, alt }) {
  return (
    <div className="banner">
      <img src={image} alt={alt} />
    </div>
  );
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
