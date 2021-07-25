import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Iship from "../../Assets/Projects/Iship.png";
import Employee from "../../Assets/Projects/Employee.png";
import Weather from "../../Assets/Projects/Weather.png";
import Google from "../../Assets/Projects/GoogleBooks.png";
import JoyHunter from "../../Assets/Projects/JoyHunter.png";
import MoviFree from "../../Assets/Projects/MoviFree.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Google}
              isBlog={false}
              title="Books-Search"
              description="You can search for any book you want. you will see who is the Author and the book's story."
                link="https://github.com/Noreldin-S/Google-Books-Search"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Iship}
              isBlog={false}
              title="Iship"
              description="About
              Iship is allowing you to get rates for a package you want to ship, and also to check the status of your shipments."
               link="https://github.com/Noreldin-S/Iship"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Weather Dashboard"
              description="Search for Current Weather + 5 Day Weather Forecast by Location and view recent searches."
                link="https://github.com/Noreldin-S/weather-dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MoviFree}
              isBlog={false}
              title="MoviFree"
              description="Movie application that recommends movies to the user to watch."
               link="https://github.com/Noreldin-S/Movie-Recommender"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={JoyHunter}
              isBlog={false}
              title="Joy Hunter"
              description="Airsoft and paintball app that allows you to find upcomming games near your area."
                 link="https://github.com/Noreldin-S/joyhunter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Employee}
              isBlog={false}
              title="User Directory"
              description="React Employee Directory with additional Search and Sort Features for names."
              link="https://github.com/Noreldin-S/User-Directory"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
