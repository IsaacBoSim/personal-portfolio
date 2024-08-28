import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';

import portrait from "../../assets/image/portrait.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

import './WelcomePage.scss';

export const WelcomePage = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const tick = useCallback(() => {
    const toRotate = [ "Aspiring", "Software", "Developer" ]; // Moved inside the tick function
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [isDeleting, loopNum, text.length, period]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, tick]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio Website!</span>
                <h1>{`Isaac B. Sim`} <span className="txt-rotate" dataPeriod="250" data-rotate='[ "Aspiring", "Software", "Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Aspiring Software Developer. Graduated University of Virginia Class of 2025 with a Bachelor of Science in Computer Science & Biomedical Engineering.</p>
                <button>Get to Know Isaac <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                <div className="portrait-container">
                  <img className="portrait" src={portrait} alt="Portrait"/>
                </div>
              </div>}
          </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
