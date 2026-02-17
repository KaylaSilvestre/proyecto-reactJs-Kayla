import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../css/Hero.css";

const CategoryHero = () => {
  const { type } = useParams();

  return (
    <section className="hero hero-category d-flex align-items-center text-start">
      <Container className="hero-content">
        <p className="hero-category">Categoría</p>
        <h1 className="hero-category-title">{type}</h1>
      </Container>
    </section>
  );
};

export default CategoryHero;
