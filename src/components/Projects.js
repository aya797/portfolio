import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Card } from "./Card";
import project1 from "../assets/images/project-img1.png";
import project2 from "../assets/images/project-img2.png";
import project3 from "../assets/images/project-img3.png";
import project4 from "../assets/images/project-img4.png";
import project5 from "../assets/images/project-img5.png";
import project6 from "../assets/images/project-img6.png";
import skillsbg from "../assets/images/skills-bg.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      url: project1,
      description: "Design & Development",
    },
    {
      title: "Business Startup",
      url: project2,
      description: "Design & Development",
    },
    {
      title: "Business Startup",
      url: project3,
      description: "Design & Development",
    },
    {
      title: "Business Startup",
      url: project4,
      description: "Design & Development",
    },
    {
      title: "Business Startup",
      url: project5,
      description: "Design & Development",
    },
    {
      title: "Business Startup",
      url: project6,
      description: "Design & Development",
    },
  ];

  return (
    <section className="projects" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>My name is Aya and this is my project using react.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" id="pills-tab" className="nav-tabs mb-5 align-items-center justify-content-center" >
                    <Nav.Item>
                      <Nav.Link eventKey="section1">section 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="section2">section 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="section3">section 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="section1">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <Card
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                   
                    <Tab.Pane eventKey="section3">
                    <p>My name is Aya and this is my project using react.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image2" src={skillsbg}></img>
    </section>
  )
}
