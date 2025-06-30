/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */

import { useState } from "react";
import { Container, Row, Col, Tab, Nav, Modal, Button } from "react-bootstrap";
import { ProjectCard } from "./CertificateCard";
import projImg1 from "../assets/img/dipex.jpeg";
import projImg2 from "../assets/img/dk.jpeg";
import projImg3 from "../assets/img/Pursullence.jpeg";
import projImg4 from "../assets/img/motioncut.jpeg";
import projImg5 from "../assets/img/postman.JPG";
import projImg6 from "../assets/img/be10x.jpeg";
import projImg7 from "../assets/img/dyp.jpeg";
import projImg8 from "../assets/img/skncoe.jpeg";
import projImg9 from "../assets/img/Techmanthan.jpg";
import projImg10 from "../assets/img/gen_ai.jpeg";
import projImg11 from "../assets/img/leadership.jpeg";
import projImg12 from "../assets/img/cpp.jpeg";
import projImg13 from "../assets/img/Agile.jpeg";
import projImg14 from "../assets/img/GEN AI.JPG";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Certificates = () => {

  const certificates = [
    {
      title: "Dipex",
      description: "Dipex-2025",
      imgUrl: projImg1,   
    },
    {
      title: "DK Robotics Internship",
      description: "Web-application",
      imgUrl: projImg2,
    },
    {
      title: "Pursullence Internship",
      description: "Agile Learn Six Sigma Yellow Belt",
      imgUrl: projImg3,
    },
    {
      title: "MotionCut Internship",
      description: "Frontend Web Development Intern",
      imgUrl: projImg4,
    },
    {
      title: "Postman API",
      description: "Postman API Fundamentals Student Expert",
      imgUrl: projImg5,
    },
    {
      title: "Be10x",
      description: "Be10x AI Tools and ChatGPT Workshop",
      imgUrl: projImg6,
    },
  ];

  const project2 = [
    {
      title: "FutureTech Innovations Challenge",
      description: "National Level Project Competition",
      imgUrl: projImg7,
    },
    {
      title: "CONVENE-2025",
      description: "National Level Project Competition at SKNCOE",
      imgUrl: projImg8,
    },
    {
      title: "Techmanthan-2025",
      description: "National Level Project Competition at JSPM",
      imgUrl: projImg9,
    },
    {
      title: "Gen AI",
      description: "Generative AI Workshop by NXTWave",
      imgUrl: projImg10,
    },
    {
      title: "Leadership Certification",
      description: "Gen AI Workshop by NXTWave",
      imgUrl: projImg11,
    },
    {
      title: "CPP Certification",
      description: " C++ Programming Certification by Spoken Tutorial",
      imgUrl: projImg12,
    },
  ];

  const project3 = [
    {
      title: "Agile Scrum Foundation",
      description: "Agile Scrum Foundation Certification by SkillUp",
      imgUrl: projImg13,
    },
    {
      title: "GEN AI Workshop",
      description: "GENAI 101 with Pieces of Code",
      imgUrl: projImg14,
      texturl: "Click here for live demo ",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleCardClick = (certificate) => {
    setSelectedCertificate(certificate);
    setShowModal(true);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>My Certificates</h2>
                  <p>Explore my certificates to see real-world examples of my work, showcasing my ability to tackle complex challenges and deliver efficient, scalable, and user-friendly solutions.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            certificates.map((project, index) => (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => handleCardClick(project)}
                              />
                            ))
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            project2.map((project, index) => (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => handleCardClick(project)}
                              />
                            ))
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            project3.map((project, index) => (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => handleCardClick(project)}
                              />
                            ))
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedCertificate?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>
          <img
            src={selectedCertificate?.imgUrl}
            alt={selectedCertificate?.title}
            style={{ maxWidth: "100%", borderRadius: "10px" }}
          />
          <p className="mt-3">{selectedCertificate?.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};
