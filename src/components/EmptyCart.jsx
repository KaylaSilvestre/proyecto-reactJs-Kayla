// import React from 'react'

// const EmptyCart = () => {
//   return (
//     <div>
//       <h1>Tu carrito esta vacio</h1>
//     </div>
//   )
// }

// export default EmptyCart

import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import "../css/Cart.css";

const EmptyCart = () => {
  return (
    <div className="empty-cart-container">
      <div className="empty-cart-icon">
        <FiShoppingCart size={50} />
      </div>

      <h2 className="empty-cart-title">Tu carrito está vacío</h2>

      <p className="empty-cart-text">
        Parece que aún no has añadido ningún producto. ¡Explora nuestra
        colección de artículos personalizados y encuentra algo especial!
      </p>

      <Link to="/" className="browse-btn">
        <FaArrowLeft /> Buscar productos
      </Link>

      <p className="empty-cart-extra">
        Descubre{""}
        <Link to="/category/decoracion" className="category-link">
          Decoración
        </Link>
        {","}
        <Link to="/category/stickers" className="category-link">
          Stickers
        </Link>
        {"y más!"}
      </p>
    </div>
  );
};

export default EmptyCart;
