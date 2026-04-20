import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../css/Cart.css";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const CartView = () => {
  const { cart, removeItem, clearCart, total, envio } =
    useContext(CartContext);

  const colorMap = {
    rojo: "#ff0000",
    negro: "#000000",
    blanco: "#ffffff",
    azul: "#0000ff",
    verde: "#00ff00",
    amarillo: "#ffff00",
    rosa: "#ffc0cb",
    violeta: "#8a2be2",
    naranja: "#ffa500",
    gris: "#808080",
  };

  return (
    <div className="cart-page-container">
      <main className="cart-main-content container mt-5">
        <div className="container mt-5">
          <div className="breadcrumb-cart">SHOPPING CART</div>

          <h2 className="cart-title">Tu carrito</h2>

          <div className="row">
            {/* LISTA */}
            <div className="col-lg-8">
              {cart.map((compra, index) => {
                const selectedColor = compra.item.selectedColor;

                const allColors =
                  compra.item.selectedOption?.colors ||
                  compra.item.colors ||
                  [];

                const colorObj = allColors.find((c) =>
                  typeof c === "object"
                    ? c.name === selectedColor
                    : c === selectedColor
                );

                const isObject = typeof colorObj === "object";

                const colorHex = !isObject
                  ? colorMap[selectedColor?.toLowerCase()?.trim()]
                  : null;

                const colorImg = isObject ? colorObj.img : null;

                return (
                  <div key={index} className="cart-item">
                    <div className="cart-product">

                      {/* IMG */}
                      <img
                        src={
                          compra.item.selectedImg ||
                          compra.item.img
                        }
                        alt={compra.item.name}
                        className="cart-img"
                      />

                      {/* INFO */}
                      <div className="cart-info">
                        <h6 className="product-name">
                          {compra.item.name}
                        </h6>

                        {/* MODELO */}
                        {compra.item.selectedOption && (
                          <span className="text-muted d-block">
                            Modelo:{" "}
                            {compra.item.selectedOption.name}
                          </span>
                        )}

                        {/* COLOR */}
                        {selectedColor && (
                          <span className="text-muted d-flex align-items-center gap-2">
                            Color:

                            <span
                              style={{
                                width: "14px",
                                height: "14px",
                                borderRadius: "50%",
                                display: "inline-block",
                                border: "1px solid #ccc",
                                backgroundColor: colorImg
                                  ? "transparent"
                                  : colorHex || "#ccc",
                                backgroundImage: colorImg
                                  ? `url(${colorImg})`
                                  : "none",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            />

                            {selectedColor}
                          </span>
                        )}

                        {/* TEXTO PERSONALIZADO */}
                        {compra.item.customText && (
                          <span className="text-muted d-block">
                            Texto:{" "}
                            <strong>
                              {compra.item.customText}
                            </strong>
                          </span>
                        )}

                        <span className="text-muted d-block">
                          Precio unitario: ${compra.item.price}
                        </span>

                        <span className="text-muted d-block">
                          Cantidad: {compra.quantity}
                        </span>
                      </div>

                      {/* PRECIO */}
                      <div className="cart-price">
                        $
                        {compra.item.price *
                          compra.quantity}
                      </div>

                      {/* DELETE */}
                      <button
                        className="trash-btn"
                        onClick={() =>
                          removeItem(
                            compra.item.id,
                            compra.item.selectedOption?.name,
                            compra.item.selectedColor
                          )
                        }
                      >
                        <FaRegTrashAlt />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RESUMEN */}
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
                    {envio() === 0
                      ? "FREE"
                      : `$${envio()}`}
                  </span>
                </div>

                <hr />

                <div className="summary-row total">
                  <span>Total</span>
                  <span>${total() + envio()}.00</span>
                </div>

                <Link
                  to="/checkout"
                  className="btn checkout-btn w-100 mt-3"
                >
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