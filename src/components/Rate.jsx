import PropTypes from 'prop-types';
import starEmpty from "../assets/images/star-empty.svg";
import starFull from "../assets/images/star-full.svg";

const Rate = ({ rating }) => {
  const maxRating = 5;
  const fullStars = Math.floor(rating);
  const emptyStars = maxRating - fullStars;

  return (
    <div className="accommodation_subhead-rate">
      {Array(fullStars).fill().map((_, index) => (
        <img key={`full-${index}`} src={starFull} alt="Full Star" />
      ))}
      {Array(emptyStars).fill().map((_, index) => (
        <img key={`empty-${index}`} src={starEmpty} alt="Empty Star" />
      ))}
    </div>
  );
};

Rate.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rate;