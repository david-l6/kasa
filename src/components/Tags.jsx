import PropTypes from 'prop-types';

const Tag = ({ tags }) => {
  return (
    <div className="accommodation_subhead-tag">
      {tags.map((tag, index) => (
        <h3 key={index} className="tag">{tag}</h3>
      ))}
    </div>
  );
};

Tag.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tag;
