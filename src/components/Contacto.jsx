import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase";
import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from "react-icons/fa";
import ContactoHero from "../components/ContactoHero";
import "../css/Contacto.css";
import { Link } from "react-router-dom";


const Contacto = () => {
  const [contact, setContact] = useState({});
  const [contactId, setContactId] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const contactData = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const enviarConsulta = (e) => {
    e.preventDefault();

    if (
      !contact.name ||
      !contact.email ||
      !contact.phone ||
      !contact.subject ||
      !contact.message
    ) {
      setError("Por favor completa todos los campos");
    } else {
      setError(null);
      setLoading(true);

      let newContact = {
        contacto: contact,
        fecha: serverTimestamp(),
      };

      //creamos ref
      const contactColl = collection(db, "contactos");

      //agrego al doc
      addDoc(contactColl, newContact)
        .then((res) => {
          setContactId(res.id);

          //limpio form
          setContact({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  };

  return (
    <>
      <ContactoHero />

      {contactId ? (
        <div className="d-flex flex-column align-items-center justify-content-center text-center my-5 py-5">
    <h2 className="mb-3">¡Mensaje enviado! 📩</h2>
    <p className="mb-2">Tu número de consulta es:</p>
    <strong className="mb-3">{contactId}</strong>
    <Link className="btn btn-dark mt-3 px-4" to="/">
      Volver a Home
    </Link>
  </div>
      ) : (
        <Container className="my-5">
          <Row>
            {/* FORMULARIO */}
            <Col md={7}>
              <div className="contact-card p-4">
                <h4>Envíanos un mensaje</h4>
                <p className="text-muted">
                  Completa el formulario y te responderemos dentro de 24 horas.
                </p>

                {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={enviarConsulta}>
                  <Row>
                    <Col md={6}>
                      <label>
                        Nombre <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control mb-3"
                        placeholder="Juan Pérez"
                        value={contact.name || ""}
                        onChange={contactData}
                      />
                    </Col>

                    <Col md={6}>
                      <label>
                        Email <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control mb-3"
                        placeholder="correo@email.com"
                        value={contact.email || ""}
                        onChange={contactData}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <label>
                        Teléfono <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="phone"
                        className="form-control mb-3"
                        placeholder="092 123 456"
                        value={contact.phone || ""}
                        onChange={contactData}
                      />
                    </Col>

                    <Col md={6}>
                      <label>
                        Asunto <span className="required">*</span>
                      </label>
                      <select
                        name="subject"
                        className="form-control mb-3"
                        value={contact.subject || ""}
                        onChange={contactData}
                      >
                        <option value="">Seleccionar asunto</option>
                        <option value="pedido">Consulta sobre un pedido</option>
                        <option value="producto">
                          Consulta sobre un producto
                        </option>
                        <option value="envio">Envíos</option>
                        <option value="pago">Problemas con el pago</option>
                        <option value="otro">Otro</option>
                      </select>
                    </Col>
                  </Row>

                  <label>
                    Mensaje <span className="required">*</span>
                  </label>
                  <textarea
                    name="message"
                    className="form-control mb-3"
                    rows="4"
                    placeholder="¿En qué podemos ayudarte?"
                    value={contact.message || ""}
                    onChange={contactData}
                  ></textarea>

                  <button className="btn btn-dark w-100" disabled={loading}>
                    {loading ? "Enviando..." : "Enviar mensaje"}
                  </button>
                </form>
              </div>
            </Col>

            {/* INFO */}
            <Col md={5}>
              <div className="info-card">
                <div className="info-item">
                  <FaMapMarkerAlt className="icon" />
                  <div>
                    <h6>Visítanos</h6>
                    <p>Parque Rodó, Montevideo, Uruguay</p>
                  </div>
                </div>

                <div className="info-item">
                  <FaEnvelope className="icon" />
                  <div>
                    <h6>Email</h6>
                    <p>hechopami@gmail.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <FaPhone className="icon" />
                  <div>
                    <h6>Teléfono</h6>
                    <p>+598 091 507 106</p>
                  </div>
                </div>

                <div className="info-item">
                  <FaClock className="icon" />
                  <div>
                    <h6>Horario</h6>
                    <p>Lun - Sáb: 10 a 13hs y 16 a 22hs</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Contacto;
