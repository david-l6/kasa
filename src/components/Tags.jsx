import PropTypes from 'prop-types';

const Tag = ({ tags }) => {
  return (
    <div className="accommodation_subhead-tag">
      {tags.map((tag, index) => (
        <span key={index} className="tag">{tag}</span>
      ))}
    </div>
  );
};

Tag.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tag;
