import Badge from "react-bootstrap/Badge";
import { FiShoppingCart } from "react-icons/fi";
import "../css/Cart.css";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart, totalQty } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
        <FiShoppingCart fontSize={"1.5rem"} color="black" />
        {cart.length > 0 && (
          <Badge bg="danger" pill className="cart-badge">
            {totalQty()}
          </Badge>
        )}
      </Link>
    </div>
  );
};

export default CartWidget;
