import Badge from "react-bootstrap/Badge";
import { FiShoppingCart } from "react-icons/fi";
import "../css/Cart.css";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FiShoppingCart fontSize={"1.5rem"} color="black" />
      <Badge bg="danger" pill className="cart-badge">
        2
      </Badge>
    </div>
  );
};

export default CartWidget;
