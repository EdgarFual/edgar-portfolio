import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/p-pdo.png";
import projImg2 from "../assets/img/p-inventariochul.png";
import projImg3 from "../assets/img/p-personal.png";
import projImg4 from "../assets/img/p-flumovil.png";
import projImg5 from "../assets/img/p-insergeweb.png";
import projImg6 from "../assets/img/p-portafolio.png";
import projImg7 from "../assets/img/p-colegioweb.png";
import projImg8 from "../assets/img/p-vicariato.png";
import projImg9 from "../assets/img/p-memoriesback.png";
import projImg10 from "../assets/img/p-blogcafe.png";
import projImg11 from "../assets/img/p-store.png";
import projImg12 from "../assets/img/p-modelfree.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Web PDO",
      description: "Desarrollo Página Web",
      tecnologias: "Desarrollo Página Web",
      imgUrl: projImg1,
    },
    {
      title: "Inventario CH",
      description: "Sistema Web de Invetario",
      tecnologias: "Desarrollo Página Web",
      imgUrl: projImg2,
    },
    {
      title: "Personal",
      description: "Sistema Web de Personal",
      tecnologias: "Desarrollo Página Web",
      imgUrl: projImg3,
    },
    {
      title: "Gestión INS",
      description: "Aplicativo Movil de Gestión",
      tecnologias: "Desarrollo Página Web",
      imgUrl: projImg4,
    },
    {
      title: "INS Web",
      description: "Sistema Web de Gestión",
      tecnologias: "Desarrollo Página Web",
      imgUrl: projImg5,
    },
    {
      title: "Portafolio Personal",
      description: "Desarrollo Página Web",
      tecnologias: "Desarrollo Página Web",
      imgUrl: projImg6,
    },
    {
      title: "Colegio Web",
      description: "Desarrollo Página Web",
      tecnologias: "Desarrollo Página Web",
      imgUrl: projImg7,
    },
    {
      title: "Institución Web",
      description: "Desarrollo Página Web",
      tecnologias: "Desarrollo Página Web",
      imgUrl: projImg8,
    },
    {
      title: "Memories Back",
      description: "Sistema Software de Escritorio",
      tecnologias: "Desarrollo Página Web",
      imgUrl: projImg9,
    },
    {
      title: "Blog Cafe",
      description: "Desarrollo Página Web",
      tecnologias: "Desarrollo Página Web",
      imgUrl: projImg10,
    },
    {
      title: "Tienda front",
      description: "Desarrollo Página Web",
      tecnologias: "Desarrollo Página Web",
      imgUrl: projImg11,
    },
    {
      title: "Modelo free",
      description: "Desarrollo Página Web",
      tecnologias: "Desarrollo Página Web",
      imgUrl: projImg12,
    },
  ];

  const firstProjects = projects.slice(0, 6);  // Primeros 6
  const secondProjects = projects.slice(6, 12); // Siguientes 6

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Bienvenido a la sección de proyectos. Aquí encontrarás una selección de trabajos que reflejan mis habilidades, creatividad y experiencia</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">2</Nav.Link>
                      </Nav.Item>

                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {firstProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          {secondProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
