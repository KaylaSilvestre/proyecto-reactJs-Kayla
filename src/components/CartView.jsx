import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../css/Cart.css";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const CartView = () => {
  const { cart, removeItem, clearCart, total, envio } = useContext(CartContext);

  return (
    <div className="cart-page-container">
      <main className="cart-main-content container mt-5">
        <div className="container mt-5">
          <div className="breadcrumb-cart">SHOPPING CART</div>

          <h2 className="cart-title">Tu carrito</h2>

          <div className="row">
            {/* Lista dde productos */}

            <div className="col-lg-8">
              {cart.map((compra) => (
                <div key={compra.item.id} className="cart-item">
                  <div className="cart-product">
                    <img
                      src={compra.item.img}
                      alt={compra.item.name}
                      className="cart-img"
                    />

                    <div className="cart-info">
                      <h6 className="product-name">{compra.item.name}</h6>
                      <span className="text-muted">
                        Precio unitario: ${compra.item.price}
                      </span>
                      <span className="text-muted">
                        Cantidad: {compra.quantity}
                      </span>
                    </div>

                    <div className="cart-price">
                      ${compra.item.price * compra.quantity}
                    </div>

                    <button
                      className="trash-btn"
                      onClick={() => removeItem(compra.item.id)}
                    >
                      <FaRegTrashAlt />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Resumen de compra */}

            <div className="col-lg-4">
              <div className="order-summary">
                <h5>Resumen del pedido</h5>

                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${total()}</span>
                </div>

                <div className="summary-row">
                  <span>Envio</span>
                  <span className="text-success">
                    {envio() === 0 ? "FREE" : `$${envio()}`}
                  </span>
                </div>

                <hr />

                <div className="summary-row total">
                  <span>Total</span>
                  <span>${total() + envio()}.00</span>
                </div>

                <Link to="/checkout" className="btn checkout-btn w-100 mt-3">
                  Terminar compra
                </Link>
                
                <button
                  className="btn btn-outline-danger w-100 mt-2"
                  onClick={() => {
                    Swal.fire({
                      title: "¿Estás seguro?",
                      text: "Se va a vaciar todo el carrito",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#d33",
                      cancelButtonColor: "#000000",
                      confirmButtonText: "Sí, vaciar",
                      cancelButtonText: "Cancelar",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        clearCart();

                        Swal.fire("Listo", "El carrito fue vaciado", "success");
                      }
                    });
                  }}
                >
                  Vaciar carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CartView;
