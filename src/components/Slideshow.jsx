import PropTypes from 'prop-types';
import { useState } from 'react';
import arrowLeft from '../assets/images/arrow-left.svg';
import arrowRight from '../assets/images/arrow-right.svg';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    const newIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slideshow">
      <img className="slideshow_image" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      {images.length > 1 && (
        <>
          <img className="arrow arrowleft" src={arrowLeft} alt="Flèche gauche" onClick={previousSlide} />
          <img className="arrow arrowright" src={arrowRight} alt="Flèche droite" onClick={nextSlide} />
          <p>{currentIndex + 1}/{images.length}</p>
        </>
      )}
    </div>
  );
};

Slideshow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slideshow;
