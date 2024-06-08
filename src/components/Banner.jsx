export default function Banner({ image, alt }) {
    return (
      <div className="banner">
        <img src={image} alt={alt} />
      </div>
    );
  }