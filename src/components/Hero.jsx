import { Container, Button } from "react-bootstrap";
import "../css/Hero.css";

const Hero = () => {
  return (
    <section className="hero d-flex align-items-center text-center">
      <Container className="hero-content">
        <p className="hero-tagline">Hecho a mano con amor</p>

        <h1 className="hero-title">
          Que cada momento
          <span className="d-block">sea unico</span>
        </h1>

        <p className="hero-subtitle">
          Grabados personalizados y creaciones únicas que transforman
          <br />
          objetos comunes en recuerdos especiales
        </p>
      </Container>
    </section>
  );
};

export default Hero;
