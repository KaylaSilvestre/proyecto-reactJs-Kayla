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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("El nombre es obligatorio")
    .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/, "El nombre solo puede tener letras")
    .min(3, "El nombre debe tener al menos 3 letras"),
  
  lastname: yup
    .string()
    .required("El apellido es obligatorio")
    .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/, "El apellido solo puede tener letras")
    .min(3, "El apellido debe tener al menos 3 letras"),
  
  address: yup.string().required("La dirección es obligatoria"),
  
  email: yup.string().email("Email inválido").required("El email es obligatorio"),
  
  validMail: yup
    .string()
    .oneOf([yup.ref("email")], "Los emails deben coincidir")
    .required("Por favor repite tu email"),
});

const Checkout = () => {
  const { cart, total, envio, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const finalizarCompra = (data) => {
    setLoading(true);
    let order = {
      comprador: {
        name: data.name,
        lastname: data.lastname,
        address: data.address,
        email: data.email,
      },
      compras: cart,
      total: total() + envio(),
      fecha: serverTimestamp(),
    };

    const orderColl = collection(db, "orders");

    addDoc(orderColl, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  if (!cart.length && !orderId) {
    return <EmptyCart />;
  }

  return (
    <>
      {orderId ? (
        <CompraConfirm orderId={orderId} buyer={{}} />
      ) : (
        <div className="container checkout-page mt-5">
          <Link
            to="/"
            className="back-link d-flex align-items-center gap-2 text-decoration-none"
          >
            <FaArrowLeft /> Volver al carrito
          </Link>

          <h2 className="text-center mb-3">Checkout</h2>

          <div className="card shadow-sm p-4">
            <h5 className="mb-3 d-flex align-items-center gap-2">
              <LuUserRound />
              Información de contacto
            </h5>

            <form onSubmit={handleSubmit(finalizarCompra)}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label style={{ fontWeight: "600" }}>
                    Nombre <span className="required">*</span>
                  </label>
                  <input
                    className="form-control"
                    {...register("name")}
                  />
                  <p className="text-danger">{errors.name?.message}</p>
                </div>

                <div className="col-md-6 mb-3">
                  <label style={{ fontWeight: "600" }}>
                    Apellido <span className="required">*</span>
                  </label>
                  <input
                    className="form-control"
                    {...register("lastname")}
                  />
                  <p className="text-danger">{errors.lastname?.message}</p>
                </div>
              </div>

              <div className="mb-3">
                <label style={{ fontWeight: "600" }}>
                  Dirección <span className="required">*</span>
                </label>
                <input
                  className="form-control"
                  {...register("address")}
                />
                <p className="text-danger">{errors.address?.message}</p>
              </div>

              <div className="mb-3">
                <label style={{ fontWeight: "600" }}>
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  {...register("email")}
                />
                <p className="text-danger">{errors.email?.message}</p>
              </div>

              <div className="mb-3">
                <label style={{ fontWeight: "600" }}>
                  Repetir Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  {...register("validMail")}
                />
                <p className="text-danger">{errors.validMail?.message}</p>
              </div>

              <div className="d-flex justify-content-between mt-4">
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