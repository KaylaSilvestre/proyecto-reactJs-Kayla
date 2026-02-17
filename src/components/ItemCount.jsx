import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

const ItemCount = (props) => {
  const [count, setCount] = useState(1);

  const sumar = () => {
    if (count < props.stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const shop = () => {};

  return (
    <div className="mt-3">
      <div className="d-flex gap-3 align-items-center">
        {/* Contador */}
        <div className="input-group" style={{ width: "130px" }}>
          <button className="btn btn-outline-dark" onClick={restar}>
            −
          </button>

          <span className="form-control text-center">{count}</span>

          <button className="btn btn-outline-dark" onClick={sumar}>
            +
          </button>
        </div>

        {/*Botón agregar al carrito*/}
        <button className="btn btn-dark flex-grow-1" onClick={shop}>
          <FiShoppingCart fontSize={"1rem"} color="white" /> Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
