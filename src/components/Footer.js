import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon4 from '../assets/img/nav-icon4.png';
import navIcon5 from '../assets/img/nav-icon5.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
          <h2  >Shraddha Bonde</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
                <a href="https://www.linkedin.com/in/shraddha-bonde-1483a8270"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/Skbonde05"><img src={navIcon4} alt="" /></a>
                <a href="mailto:skbonde05@gmail.com"><img src={navIcon5} alt="" /></a>

              </div>
            <p> @skbonde Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
