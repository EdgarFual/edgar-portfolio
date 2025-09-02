import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo-edgar.png";
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              

              <a
                  href="https://github.com/EdgarFual"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={30} />
                </a>

                <a
                  href="https://www.linkedin.com/in/edgarfual/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin size={30} />
                </a>

                <a
                  href="https://wa.me/51939462119"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp size={30} />
                </a>

            </div>
            <p>Ing. Edgar Lizardo Fuentes Alvarado</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
