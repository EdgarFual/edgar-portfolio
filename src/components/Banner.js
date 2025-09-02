import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/t5.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Programador", "UI/UX Diseñador", "Analista de Datos"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Mi PORTAFLIO</span>
                  <h1>{`Soy Edgar Fuentes Alvarado`} <span className="txt-rotate" dataPeriod="100" data-rotate='[ "Programador", "UI/UX Diseñador", "Analista de Datos" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Ingeniero de Sistemas titulado y colegiado en la Universidad Cesar Vallejo con interés en el área de sistemas,
                    enfocado en programación, gestión de base de datos y análisis de datos. Durante mi carrera profesional he
                    obtenido grandes logros locales, nacionales e internacionales concursando en ferias y expoworks quedando en
                    1er puesto de manera constante. Poseo gran habilidad para el desarrollo web y móvil, la obtención y
                    procesamiento de data para la construcción de los distintos reportes, dashboards y presentaciones</p>
                  <button onClick={() =>window.open('https://wa.me/51939462119', '_blank')}>Contáctame <ArrowRightCircle size={25} /></button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
