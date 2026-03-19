import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase";
import EmptyCart from "./EmptyCart";
import "../css/Checkout.css";
import { LuUserRound } from "react-icons/lu";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import CompraConfirm from "./CompraConfirm";

const Checkout = () => {
  const [buyer, setBuyer] = useState({});
  const [validMail, setValidMail] = useState("");
  const [orderId, setOrderId] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { cart, total, envio, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const buyerData = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  console.log(buyer);
  const finalizarCompra = (e) => {
    //Para que no recargue todo
    e.preventDefault();
    //validar
    if (
      !buyer.name ||
      !buyer.lastname ||
      !buyer.address ||
      !buyer.email ||
      !validMail
    ) {
      setError("Por favor completa todos los campos");
    } else if (buyer.email !== validMail) {
      setError("Verificá que ambos correos sean iguales");
    } else {
      setError(null);
      setLoading(true);
      let order = {
        comprador: buyer,
        compras: cart,
        total: total() + envio(),
        fecha: serverTimestamp(),
      };

      //Creamos ref
      const orderColl = collection(db, "orders");

      //Agrego el doc
      addDoc(orderColl, order)
        .then((res) => {
          setOrderId(res.id);
          //Borramos carrito
          clearCart();
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  };

  if (!cart.length && !orderId) {
    return <EmptyCart />;
  }

  return (
    <>
      {orderId ? (
        <div>
          <CompraConfirm orderId={orderId} buyer={buyer} />
        </div>
      ) : (
        <div className="container checkout-page mt-5">
          <Link
            to="/"
            className="back-link d-flex align-items-center gap-2 text-decoration-none"
          >
            <FaArrowLeft /> Volver al carrito
          </Link>

          <h2 className="text-center mb-3">Checkout</h2>

          {/* Formulario */}
          <div className="card shadow-sm p-4">
            <h5 className="mb-3 d-flex align-items-center gap-2">
              <LuUserRound />
              Información de contacto
            </h5>

            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={finalizarCompra}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label style={{ fontWeight: "600" }}>
                    Nombre <span className="required">*</span>
                  </label>
                  <input
                    name="name"
                    className="form-control"
                    onChange={buyerData}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label style={{ fontWeight: "600" }}>
                    Apellido <span className="required">*</span>
                  </label>
                  <input
                    name="lastname"
                    className="form-control"
                    onChange={buyerData}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label style={{ fontWeight: "600" }}>
                  Dirección <span className="required">*</span>
                </label>
                <input
                  name="address"
                  className="form-control"
                  onChange={buyerData}
                />
              </div>

              <div className="mb-3">
                <label style={{ fontWeight: "600" }}>
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  onChange={buyerData}
                />
              </div>

              <div className="mb-3">
                <label style={{ fontWeight: "600" }}>
                  Repetir Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => setValidMail(e.target.value)}
                />
              </div>

              <div className="d-flex justify-content-between mt-4 ">
                <button
                  type="submit"
                  className="btn btn-dark d-flex align-items-center gap-2"
                  disabled={loading}
                >
                  {loading ? "Enviando..." : "Enviar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
