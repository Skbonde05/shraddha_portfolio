import myImage from "../assets/img/Shraddha.jpeg";
import backgroundImage from "../assets/img/color-sharp.png"; 

function About() {
  return (
    <>
      <div
        className='about'
        id='about'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          padding: '40px',
          position: 'relative',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: '#fff', // Optional: make text white for better visibility
          borderRadius: '15px' // Optional: rounded corners for nice effect
        }}
      >
        {/* Profile Image */}
        <div style={{ flex: '0 0 300px', textAlign: 'center' }}>
          <img
            src={myImage}
            alt="Shraddha Bonde"
            style={{
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              marginLeft: '100px',
              objectFit: 'cover',
              border: '5px solid #ddd'
            }}
          />
        </div>

        {/* Text on right */}
        <div
          style={{
            flex: '1',
            paddingLeft: '40px',
            paddingRight: '40px',
            minWidth: '300px',
            textAlign: 'left'
          }}
        >
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
            <span
              style={{
                color: '#3498db',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'
              }}
            >
              Introduction
            </span>
          </h1>

          <hr
            style={{
              border: 'none',
              height: '2px',
              backgroundColor: '#3498db',
              margin: '10px 0',
              borderRadius: '5px'
            }}
          />
          <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            <span style={{ fontWeight: 'bold', color: '#3498db' }}>
              Hey there!
            </span>{' '}
            I’m Shraddha Bonde from Pune, India.
            <br />
            <br />
            I am a{' '}
            <span style={{ color: '#3498db', fontWeight: 'bold' }}>
              third year B.E CSE student
            </span>{' '}
            at Sinhgad Academy of Engineering, graduating in 2027.
            <br />
            <br />
            A passionate{' '}
            <span style={{ color: '#3498db', fontWeight: 'bold' }}>
              Mobile App Developer
            </span>{' '}
            and{' '}
            <span style={{ color: '#3498db', fontWeight: 'bold' }}>
              Web Developer
            </span>{' '}
            who loves turning ideas into smooth, functional apps.
            <br />
            <br />
            Currently exploring{' '}
            <span style={{ color: '#3498db', fontWeight: 'bold' }}>
              AI
            </span>{' '}
            to make my projects even smarter.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
