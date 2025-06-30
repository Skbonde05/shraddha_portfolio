import { Col } from "react-bootstrap";
import { useState } from "react";

export const ProjectCard = ({ title, description, imgUrl, texturl, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Col size={12} sm={6} md={4}>
      <div
        className="proj-imgbx"
        onClick={onClick}
        style={{
          position: 'relative',
          padding: '10px',
          borderRadius: '10px',
          border: '0.5px solid #ccc',
          boxShadow: '0 2px 5px rgba(0,0,0,0.08)',
          background: 'linear-gradient(319deg, #6a5acd 0%, #c54b8c 37%, #b284be 100%)',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={imgUrl}
          alt={title}
          style={{
            width: '100%',
            height: '250px',
            borderRadius: '10px',
            transition: 'opacity 0.3s ease'
          }}
        />
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
          {texturl && (
            <p
              style={{
                fontSize: '1rem',
                color: '#3498db',
                cursor: 'pointer',
                textDecoration: 'underline',
                marginTop: '10px'
              }}
            >
              {texturl}
            </p>
          )}
        </div>
      </div>
    </Col>
  );
};
