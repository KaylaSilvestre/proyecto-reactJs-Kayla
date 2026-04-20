import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoLS = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(carritoLS);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cart));
  }, [cart]);

  // 🛒 Agregar item (modelo + color)
  const addItem = (item, qty) => {
    const index = cart.findIndex(
      (prod) =>
        prod.item.id === item.id &&
        prod.item.selectedOption?.name === item.selectedOption?.name &&
        prod.item.selectedColor === item.selectedColor
    );

    if (index !== -1) {
      const newCart = [...cart];
      newCart[index].quantity += qty;
      setCart(newCart);
    } else {
      setCart([...cart, { item, quantity: qty }]);
    }
  };

  // 🧹 Vaciar carrito
  const clearCart = () => {
    setCart([]);
  };

  // 🗑️ Eliminar por id + modelo + color
  const removeItem = (id, optionName, color) => {
    setCart(
      cart.filter(
        (prod) =>
          !(
            prod.item.id === id &&
            prod.item.selectedOption?.name === optionName &&
            prod.item.selectedColor === color
          )
      )
    );
  };

  // 🔍 Ver si está en carrito
  const isInCart = (id) => {
    return cart.some((prod) => prod.item.id === id);
  };

  // 📦 Cantidad por producto (suma todas las variantes)
  const itemQty = (id) => {
    return cart
      .filter((prod) => prod.item.id === id)
      .reduce((acc, prod) => acc + prod.quantity, 0);
  };

  // 💰 Total
  const total = () => {
    return cart.reduce(
      (acc, prod) => acc + prod.item.price * prod.quantity,
      0
    );
  };

  // 🔢 Total de items
  const totalQty = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  };

  // 🚚 Envío
  const envio = () => {
    const orderTotal = total();
    return orderTotal > 1500 ? 0 : 150;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        clearCart,
        removeItem,
        itemQty,
        totalQty,
        total,
        envio,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};