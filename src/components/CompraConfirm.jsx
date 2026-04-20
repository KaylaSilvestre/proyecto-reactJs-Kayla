import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/CompraConfirm.css";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const CompraConfirm = ({ orderId, order }) => {
  const whatsappNumber = "598091507106"; // sin + y sin espacios

  const customerName =
    order?.comprador
      ? `${order.comprador.name} ${order.comprador.lastname}`
      : "Cliente no registrado";

  const cart = JSON.parse(localStorage.getItem("carrito")) || [];

  const formatCart = cart
    .map((item, i) => {
      const p = item.item;

      return (
        `\n🛍 Producto ${i + 1}:\n` +
        `- Nombre: ${p.name}\n` +
        `- Modelo: ${p.selectedOption?.name || "Sin modelo"}\n` +
        `- Color: ${p.selectedColor || "Sin color"}\n` +
        `- Texto: ${p.customText || "N/A"}\n` +
        `- Cantidad: ${item.quantity}\n` +
        `- Precio: $${p.price * item.quantity}\n`
      );
    })
    .join("\n");

  const total = cart.reduce(
    (acc, i) => acc + i.item.price * i.quantity,
    0
  );

  const message =
    `ORDEN CONFIRMADA\n\n` +
    `Orden nro: ${orderId}\n` +
    `Cliente: ${customerName}\n\n` +
    `PRODUCTOS:` +
    formatCart +
    `\nTOTAL: $${total}\n\n` +
    `Método de pago: Transferencia / Mercado Pago / Giro por abitab (Escriba solo por donde quiera abonar)`;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-sm p-4 text-center compra-card">

        <div className="icon-circle mx-auto mb-2">
          <span className="check">✓</span>
        </div>

        <p className="text-danger small fw-semibold letter-spacing">
          COMPRA CONFIRMADA
        </p>

        <h4 className="fw-bold">¡Gracias por tu compra!</h4>

        <p className="text-muted small">
          Tu pedido fue registrado correctamente.
        </p>

        <p className="text-muted small">
          Envíanos tu orden por WhatsApp para finalizar el pago.
        </p>

        <div className="bg-light rounded p-3 mb-3">
          <p className="text-muted small mb-1">Número de orden</p>
          <p className="fw-bold mb-0">{orderId}</p>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success w-100 mb-2"
        >
          <FaWhatsapp /> Enviar orden por WhatsApp
        </a>

        <Link
          to="/"
          className="btn btn-dark w-100 text-decoration-none"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default CompraConfirm;