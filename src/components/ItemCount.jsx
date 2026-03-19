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

  const shop = () => {
    props.onAdd(count);
  };

  return (
    <>
      {props.stock > 0 ? (
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
            
            <button
              className="btn btn-dark flex-grow-1"
              disabled={count === 0 || props.stock === 0}
              onClick={() => props.onAdd(count)}
            >
              <FiShoppingCart fontSize={"1rem"} color="white" /> Agregar al
              carrito
            </button>
          </div>
        </div>
      ) : (
        <p>Lo sentimos, en este momento no contamos con este producto.</p>
      )}
    </>
  );
};

export default ItemCount;
