import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { LiaTruckSolid } from "react-icons/lia";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ detail }) => {
  const [purchase, setPurchase] = useState(false);
  const { cart, addItem, itemQty } = useContext(CartContext);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(0); //Guardo la cantiddad

  const onAdd = (cantidad) => {
    setShowAlert(true);
    addItem(detail, cantidad);
    setPurchase(true);
    setSelectedQuantity(cantidad);
  };

  const stockDisponible = detail.stock - itemQty(detail.id); //Calculo el stock disponible restando la cantidad en el carrito

  return (
    <div className="container py-5">
      <div className="row g-5">
        {/*Foto prod*/}
        <div className="col-md-6">
          <div
            className="border rounded d-flex align-items-center justify-content-center mb-3"
            style={{ height: "450px", backgroundColor: "#f5f5f5" }}
          >
            <img src={detail.img} alt={detail.name} className="img-fluid" />
          </div>
        </div>

        {/*Info prod */}
        <div className="col-md-6">
          <p className="text-uppercase text-muted small mb-2">
            {detail.category}
          </p>

          {/* Nombre prod */}
          <p className="fw-bold" style={{ fontSize: "1.8rem" }}>
            {detail.name}
          </p>

          {/*Resenias*/}
          <div className="mb-3">{detail.reviews}</div>

          <h4 className="fw-bold mb-3">${detail.price}.00</h4>

          <hr />

          {/*Info de productos*/}
          {detail?.description && (
            <p className="text-muted" style={{ whiteSpace: "pre-line" }}>
              {detail.description}
            </p>
          )}

          {/*Caracteristicas*/}
          <h6 className="fw-bold mt-4">Características</h6>

          <ul className="list-unstyled">
            {detail.features?.map((feature, index) => (
              <li key={index} className="mb-1">
                <FaCheck /> {feature}
              </li>
            ))}
          </ul>

          <p className="text-success small">
            ● En stock ({stockDisponible} disponibles)
          </p>

          {purchase ? (
            <Link className="btn btn-success mt-3" to="/cart">
              Ir al carrito
            </Link>
          ) : (
            <ItemCount stock={stockDisponible} onAdd={onAdd} />
          )}

          {showAlert && (
            <div className="alert alert-success mt-3">
              Agregaste {selectedQuantity} unidades de {detail.name} al carrito
            </div>
          )}

          <hr className="mt-4" />

          {/*Beneficios*/}
          <div className="d-flex justify-content-between text-center small mt-3">
            <div>
              <LiaTruckSolid fontSize={"1.1rem"} />
              <br /> Envío rápido
            </div>
            <div>
              <RiSecurePaymentLine fontSize={"1.1rem"} />
              <br /> Pago seguro
            </div>
            <div>
              <MdOutlinePublishedWithChanges fontSize={"1.1rem"} />
              <br /> Cambios fáciles
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
