import { Container, Row, Col } from "react-bootstrap";
import myImage from "../assets/img/Shraddha.jpeg";

function About() {
  return (
    <section className="about-section" id="about">
      <Container>
        <div className="about-box">
          <Row className="align-items-center">
            <Col xs={12} md={5} className="d-flex justify-content-center justify-content-md-end pe-md-5">
              <img
                src={myImage}
                alt="Shraddha Bonde"
                className="about-img"
              />
            </Col>

            <Col xs={12} md={7}>
              <div className="about-text-container">
                <h1>
                  <span>Introduction</span>
                </h1>
                <hr className="about-divider" />
                <p>
                  <span className="about-highlight">Hey there!</span> I’m Shraddha Bonde from Pune, India.
                  <br />
                  <br />
                  I am a <span className="about-highlight">final year B.E CSE student</span> at Sinhgad Academy of Engineering, graduating in 2027.
                  <br />
                  <br />
                  A passionate <span className="about-highlight">Mobile App Developer</span> and <span className="about-highlight">Web Developer</span> who loves turning ideas into smooth, functional apps.
                  <br />
                  <br />
                  Currently exploring <span className="about-highlight">AI</span> to make my projects even smarter.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default About;
