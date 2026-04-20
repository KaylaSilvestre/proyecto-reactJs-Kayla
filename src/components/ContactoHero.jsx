import { Container } from "react-bootstrap";
import "../css/Hero.css";

const ContactoHero = () => {
  return (
    <section className="hero hero-category d-flex align-items-center text-start">
      <Container className="hero-content">
        <p style={{ color: "red" }} className="hero-category ">
          Contáctanos
        </p>
        <h1 className="hero-category-title mb-4">Contacto</h1>
        <p className="hero-description mt-1" style={{ textTransform: "none" }}>
  ¿Tienes preguntas sobre nuestros productos personalizados?
  <br className="d-none d-lg-block" />
  Nos encantaría saber de ti. Envíanos un mensaje y te
  <br className="d-none d-lg-block" />
  responderemos lo antes posible.
</p>
      </Container>
    </section>
  );
};

export default ContactoHero;
