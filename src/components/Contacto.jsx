import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase";
import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from "react-icons/fa";
import ContactoHero from "../components/ContactoHero";
import "../css/Contacto.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("El nombre es obligatorio")
    .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/, "El nombre solo puede tener letras")
    .min(3, "El nombre debe tener al menos 3 letras"),
  email: yup.string().email("Email inválido").required("El email es obligatorio"),
  phone: yup
    .string()
    .required("El teléfono es obligatorio")
    .matches(/^\d{7,15}$/, "El teléfono debe tener solo números (7 a 15 dígitos)"),
  subject: yup.string().required("Elige un asunto"),
  message: yup.string().required("El mensaje es obligatorio").min(10, "El mensaje debe tener al menos 10 caracteres"),
});

const Contacto = () => {
  const [contact, setContact] = useState({});
  const [contactId, setContactId] = useState("");
  const [loading, setLoading] = useState(false);

  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const enviarConsulta = async (data) => {
    setLoading(true);
    try {
      const contactColl = collection(db, "contactos");
      const res = await addDoc(contactColl, { contacto: data, fecha: serverTimestamp() });
      setContactId(res.id);
      reset(); // limpia el formulario
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
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

                <form onSubmit={handleSubmit(enviarConsulta)}>
                  <Row>
                    <Col md={6}>
                      <label>
                        Nombre <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control mb-1"
                        placeholder="Juan Pérez"
                        {...register("name")}
                      />
                      <p className="text-danger">{errors.name?.message}</p>
                    </Col>

                    <Col md={6}>
                      <label>
                        Email <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control mb-1"
                        placeholder="correo@email.com"
                        {...register("email")}
                      />
                      <p className="text-danger">{errors.email?.message}</p>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <label>
                        Teléfono <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control mb-1"
                        placeholder="092 123 456"
                        {...register("phone")}
                      />
                      <p className="text-danger">{errors.phone?.message}</p>
                    </Col>

                    <Col md={6}>
                      <label>
                        Asunto <span className="required">*</span>
                      </label>
                      <select
                        className="form-control mb-1"
                        {...register("subject")}
                      >
                        <option value="">Seleccionar asunto</option>
                        <option value="pedido">Consulta sobre un pedido</option>
                        <option value="producto">Consulta sobre un producto</option>
                        <option value="envio">Envíos</option>
                        <option value="pago">Problemas con el pago</option>
                        <option value="otro">Otro</option>
                      </select>
                      <p className="text-danger">{errors.subject?.message}</p>
                    </Col>
                  </Row>

                  <label>
                    Mensaje <span className="required">*</span>
                  </label>
                  <textarea
                    className="form-control mb-1"
                    rows="4"
                    placeholder="¿En qué podemos ayudarte?"
                    {...register("message")}
                  ></textarea>
                  <p className="text-danger">{errors.message?.message}</p>

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