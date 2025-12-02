import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/vois.png";
import projImg2 from "../assets/img/dk robotics.png";
import projImg3 from "../assets/img/splashscreen.jpeg";
import projImg4 from "../assets/img/projImg4.png";
import blog from "../assets/img/blog.png";

import bg from "../assets/img/bg4.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const allProjects = [
    {
      title: "VOIS: Smart Voice Assistant for Laptop",
      description: "Web-application & VOIS Software",
      imgUrl: projImg1,
      liveLink: "https://vois-website.vercel.app/",
    },
    {
      title: "DK Robtoics Website",
      description: "Web-application",
      imgUrl: projImg2,
      liveLink: "https://dkrobotics-website.web.app",
    },
    {
      title: "Vibe Commerce: Mock E-Com",
      description: "MERN Stack E-Commerce Application",
      imgUrl: projImg4,
      liveLink: "https://e-com-git-main-shraddha-bondes-projects.vercel.app/",
    },
    {
      title: "PolyStuff App",
      description: "Polytechic Notes App",
      imgUrl: projImg3,
      imgUrls: [
        require("../assets/img/splashscreen.jpeg"),
        require("../assets/img/splash2.jpeg"),
        require("../assets/img/PolyStuff.jpeg"),
        require("../assets/img/2.jpeg"),
        require("../assets/img/3.jpeg"),
        require("../assets/img/4.jpeg"),
        require("../assets/img/5.jpeg"),
        require("../assets/img/6.jpeg"),
        require("../assets/img/7.jpeg"),
        require("../assets/img/8.jpeg"),
      ],
      isApp: true, 
      liveLink: "https://play.google.com/store/apps/details?id=myapp.org.userapp&pcampaignid=web_share",
    },
    {
      title: "Blog Backend API Project",
      description: "Node.js & Express.js Backend API",
      imgUrl: blog,
      liveLink: "https://documenter.getpostman.com/view/45790366/2sB3dMwW2u",
    },
  ];

  return (
    <section
      className="project"
      id="project"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    🚀 Explore my project portfolio to see real-world examples of my work, showcasing my ability to tackle complex challenges and deliver efficient, scalable, and user-friendly solutions.
                  </p>
                  <Row>
                    {allProjects.map((project, index) => (
                      <Col key={index} md={4} className="mb-4 d-flex">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: "none", display: "block", flex: 1 }}
                        >
                          <ProjectCard {...project} />
                        </a>
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={bg} />
    </section>
  );
};
