import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import TrackVisibility from 'react-on-screen';
import './ProjectPage.scss';

import aichessbot from "../../assets/image/projectimage/aichessbot.png";
import amazonwebscraper from "../../assets/image/projectimage/amazonwebscraper.png";
import fusion360plugin from "../../assets/image/projectimage/fusion360plugin.png";
import broncosensor from "../../assets/image/projectimage/broncosensor.png";
import qtpybackpack from "../../assets/image/projectimage/qtpybackpack.png";
import vrheadsetattachments from "../../assets/image/projectimage/vrheadsetattachments.png";
import wastewatch from "../../assets/image/projectimage/wastewatch.png";
import bookshelf from "../../assets/image/projectimage/bookshelf.png";
import todolist from "../../assets/image/projectimage/todolist.png";

export const ProjectPage = () => {

  const projects = {
    Software: [
      {
        title: "AI Chess Bot",
        description: "AI/ML Project for personalized chess rival",
        imgUrl: aichessbot,
        projectUrl: "https://github.com/IsaacBoSim/chessbot.git"
      },
      {
        title: "Fusion360 Plugin",
        description: "Custom Fusion360 Plugin for 3D Printing Prototyping",
        imgUrl: fusion360plugin,
        projectUrl: "https://github.com/spencetk37/PseudoWidgets.git"
      },
      {
        title: "Amazon Costpoint WebScraper",
        description: "Program for scraping Amazon into Costpoint for data analysis",
        imgUrl: amazonwebscraper,
        projectUrl: "https://github.com/IsaacBoSim/AmazonScrapeCostpointOrder.git"
      }
    ],
    Hardware: [
      {
        title: "BroncoSensor",
        description: "Benchtop Simulation for measuring pressure gradient after fighter pilot seat ejection",
        imgUrl: broncosensor,
        projectUrl: "https://github.com/IsaacBoSim/benchtop-vacuum-chamber.git"
      },
      {
        title: "QTpyBackpack",
        description: "PCB Design for ESP-32 built-in charger and power bank",
        imgUrl: qtpybackpack,
        projectUrl: "https://github.com/IsaacBoSim/QtPy-ESP32-S2-Backpack-Charger-PCB.git"
      },
      {
        title: "VRHeadsetAttachments",
        description: "Arduino VR Headset attachments for improving interactive user experience",
        imgUrl: vrheadsetattachments,
        projectUrl: "https://github.com/IsaacBoSim/VR-Headset-Interactive-Attachments.git"
      }
    ],
    Webdev: [
      {
        title: "WasteWatch",
        description: "FullStack Django WebApp for waste management",
        imgUrl: wastewatch,
        projectUrl: "https://github.com/IsaacBoSim/WasteWatch.git"
      },
      {
        title: "BookShelf",
        description: "FullStack React WebApp for uploading books into a digital library",
        imgUrl: bookshelf,
        projectUrl: "https://github.com/IsaacBoSim/bookshelf.git"
      },
      {
        title: "ToDo List",
        description: "FullStack PERN WebApp for listing tasks",
        imgUrl: todolist,
        projectUrl: "https://github.com/IsaacBoSim/todolist.git"
      }
    ]
  };

  const renderProjects = (category) => (
    <Row>
      {projects[category].map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Row>
  );

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="Software">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      {Object.keys(projects).map((category) => (
                        <Nav.Item key={category}>
                          <Nav.Link eventKey={category}>{category}</Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {Object.keys(projects).map((category) => (
                        <Tab.Pane eventKey={category} key={category}>
                          {renderProjects(category)}
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
