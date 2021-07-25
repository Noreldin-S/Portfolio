import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vQv9fI5OPRZlFbLCs2Lz-BdVHu1UQ4pFg4Yqs2PLHR_L4eGiCUWWUOhYEKKGuNztLGm8Nf-LsM77cpt/pub"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-folder-open" aria-hidden="true" />
            <div className="hiddenText4">Resume</div>
          </a>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Leo Distro, Huntington Beach, CA — Operation Manager"
              date="October 2020 - Present"
              content={[
                "Operation Manager is my current position. Main duties are managing the warehouse employees and solving customers' problems.",
                "Following up with shipping and cargo companies to make sure shipments are arriving on time. Taking orders to be shipped out on the same day. Getting rates for customers. Create invoices.",
                "Buy for me service. My duty is to do the searching and get the customers the best prices possible from suppliers, wholesalers and Manufacturers.",
              ]}
            />
            <Resumecontent
              title="Fedex, Costa Mesa, CA — Courier"
              date="May 2016  - October 2020"
              content={[
                "A courier Who starts as early as 6:30 am, Well organizing the packages in the delivery truck based on service, location and size. ",
                "Making sure I deliver the packages on time, based on the service.",
                "Deliver in all weather conditions and under any circumstances (Coronavirus, Bushfires, and protests). Paying attention all the time to any road hazardous while driving specially when under pressure from time commitment.",
              ]}
            />
            <Resumecontent
              title="Avis, Huntington Beach, CA  — Rental Sales Associate"
              date="February 2013 - December 2015"
              content={[
                "Front desk Position, renting cars to customers based on their needs and budget.",
                "Check and rental cars and make it ready for customers before I hand over the keys.",
              ]}
            />
          </Col>

          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="UCI"
              date=""
              content={["Full Stack Certificate"]}
            />
            <Resumecontent
              title="Fullerton College"
              date=""
              content={["Genereal Education"]}
            />
            <Resumecontent
              title="10TH BOARD [ST Mary's School,Odisha] "
              date=""
              content={["High School Diploma"]}
            />
            <h3 className="resume-title">Skills</h3>
            <Resumecontent
              title=""
              content={[
                "Business Process Improvement",
                "Strategic Planning",
                "Communication Skills",
                "Time Management",
                "Attention to Details",
                "Problem Solving",
                "Confidence",
              ]}
            />
            <h3 className="resume-title">Technical Skills</h3>
            <Resumecontent
              title=""
              content={[
                "Front End: Ajax, Axios, Bootstrap, HTML5, CSS/CSS3, ES6, ReactJS, Responsive Design, JavaScript, jQuery, JSON",
                "Back End: Express.js, Handlebars.js, MongoDB, MySQL, Node.js, Passport, Sequelize ORM, WorkBench",
                "Tools/Other: Git, GitHub,, Heroku, MERN stack, Microsoft Office, MVC, NPM, RESTful, Testing, Error-Handling",
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
