import { Col, Row, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCakeCandles,
  faBriefcase,
  faCode,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import { faFileCode } from "@fortawesome/free-regular-svg-icons";

import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col>
            <div className="about-bx ">
              <h2>About</h2>
              <Row>
                <Col md={4}>
                  <div className="about-wrap">
                    <div className="about-item">
                      <FontAwesomeIcon icon={faUser} />
                      <p>Nguyễn Chí Thanh</p>
                    </div>
                    <div className="about-item">
                      <FontAwesomeIcon icon={faCakeCandles} />
                      <p>12/09/2000</p>
                    </div>
                    <div className="about-item">
                      <FontAwesomeIcon icon={faBriefcase} />
                      <p>Inter Front-End</p>
                    </div>
                    <div className="about-item">
                      <FontAwesomeIcon icon={faFileCode} />
                      <p>HTML5, CSS3, Bootstrap, JavaScript, React</p>
                    </div>
                  </div>
                </Col>
                <Col md={8}>
                  <p className="about-text">
                    I'm a tech junkie who are willing to learn new things
                    everyday. I love to play around with computers and do
                    problems-solving. Looking forward to work in a professional
                    environment, so i can dedicate myself for the company and be
                    better me each day.
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
