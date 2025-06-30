import { useState } from "react";
import { Carousel } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, imgUrls = [], isApp }) => {
  const [isHovered, setIsHovered] = useState(false);

  const imageStyle = {
    width: '100%',
    height: isApp ? '420px' : '250px',
    objectFit: isApp ? 'contain' : 'cover',
    borderRadius: '10px',
    transition: 'opacity 0.3s ease',
    display: 'block',
    margin: '0 auto'
  };

  const containerStyle = {
    position: 'relative',
    padding: '10px',
    borderRadius: '10px',
    border: '0.5px solid #ccc',
    boxShadow: '0 2px 5px rgba(0,0,0,0.08)',
    background: 'linear-gradient(319deg, #6a5acd 0%, #c54b8c 37%, #b284be 100%)',
    overflow: 'hidden',
    cursor: 'pointer',
    height: isApp ? '470px' : 'auto',
    transition: 'transform 0.3s ease'
  };

  return (
    <div
      className="proj-imgbx"
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isApp && imgUrls.length > 1 ? (
        <Carousel
  controls
  indicators
  interval={3000}
  className={isApp ? "app-carousel" : ""}
>
  {imgUrls.map((url, index) => (
    <Carousel.Item key={index}>
      <img src={url} alt={`slide-${index}`} style={imageStyle} />
    </Carousel.Item>
  ))}
</Carousel>

      ) : (
        <img src={imgUrl} alt={title} style={imageStyle} />
      )}

      <div
        className="proj-txtx"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: isHovered ? 1 : 0,
          visibility: isHovered ? 'visible' : 'hidden',
          transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
          color: '#fff',
          padding: '10px',
          backgroundColor: 'rgba(0,0,0,0.6)',
          borderRadius: '10px',
          textAlign: 'center',
          transition: 'all 0.3s ease'
        }}
      >
        <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px' }}>{title}</h4>
        <span style={{ fontSize: '1rem', marginBottom: '10px', display: 'block' }}>{description}</span>
      </div>
    </div>
  );
};
