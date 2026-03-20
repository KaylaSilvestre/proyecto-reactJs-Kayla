import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/CompraConfirm.css";
import { Link } from "react-router-dom";

const CompraConfirm = ({ orderId, buyer }) => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-sm p-4 text-center compra-card">
        <div className="icon-circle mx-auto mb-2">
          <span className="check">✓</span>
        </div>

        <p className="text-danger small fw-semibold letter-spacing">
          ORDEN CONFIRMADA
        </p>
        <h4 className="fw-bold">Gracias por tu compra!</h4>

        <p className="text-muted small">
          Su pedido se ha realizado correctamente. Nos pondremos en contacto con
          usted a la brevedad.
        </p>

        <div className="bg-light rounded p-3 mb-2">
          <p className="text-muted small mb-1">Numero de orden</p>
          <p className="fw-bold mb-0">{orderId}</p>
        </div>

        <Link to="/" className="btn btn-dark mb-2 w-100 text-decoration-none">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default CompraConfirm;
