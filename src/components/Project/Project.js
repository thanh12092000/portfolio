import { Col, Row, Container } from "react-bootstrap";

import "./Project.css";

function Project() {
  return (
    <section className="projects" id="project">
      <Container>
        <Row>
          <Col>
            <div className="projects-bx ">
              <h2>Projects</h2>
              <div className="projects-list">
                <div className="project-item">
                  <a
                    href="https://thanh12092000.github.io/w3_band/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Website W3_Band
                  </a>
                  <p>
                    Link github:
                    <a
                      href="https://github.com/thanh12092000/w3_band"
                      target="_blank"
                      rel="noreferrer"
                    >
                      &nbsp; https://github.com/thanh12092000/w3_band
                    </a>
                  </p>
                  <p>My personal project</p>
                  <p>
                    Languages: <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                  </p>
                </div>

                <div className="project-item">
                  <a
                    href="https://thanh12092000.github.io/lovetravel/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Love Travel
                  </a>
                  <p>
                    Link github:
                    <a
                      href="https://github.com/thanh12092000/lovetravel"
                      target="_blank"
                      rel="noreferrer"
                    >
                      &nbsp; https://github.com/thanh12092000/lovetravel
                    </a>
                  </p>
                  <p>My personal project</p>
                  <p>
                    Languages: <span>HTML</span>
                    <span>CSS</span>
                  </p>
                </div>

                <div className="project-item">
                  <a
                    href="https://thanh12092000.github.io/weather/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Weather
                  </a>
                  <p>
                    Link github:
                    <a
                      href="https://github.com/thanh12092000/weather"
                      target="_blank"
                      rel="noreferrer"
                    >
                      &nbsp; https://github.com/thanh12092000/weather
                    </a>
                  </p>
                  <p>My personal project</p>
                  <p>
                    Languages:
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                  </p>
                </div>

                <div className="project-item">
                  <a
                    href="https://github.com/thanh12092000/portfolio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    My Portfolio
                  </a>
                  <p>
                    Link github:
                    <a
                      href="https://github.com/thanh12092000/portfolio"
                      target="_blank"
                      rel="noreferrer"
                    >
                      &nbsp; https://github.com/thanh12092000/portfolio
                    </a>
                  </p>
                  <p>My personal project</p>
                  <p>
                    Languages:
                    <span>ReactJs</span>
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>Boostrap</span>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Project;
