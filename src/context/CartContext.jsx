import {createContext, useEffect, useState} from 'react'

export const CartContext = createContext();

const carritoLS = JSON.parse(localStorage.getItem('carrito')) || []


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(carritoLS);

  useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(cart))
    },[cart])

  //Agregar un item al carrito (item detail)
  const addItem = (item, qty) => {
    console.log(item, qty);
    console.log({ ...item, quantity: qty });
    if (isInCart(item.id)) {
      setCart(
        cart.map((prod) => {
          if (item.id === prod.item.id) {
            //Sumo cantidades
            return { ...prod, quantity: prod.quantity + qty };
          } else {
            //No modifico el producto
            return prod;
          }
        }),
      );
    } else {
      //No existe el producto en el carrito, lo agrego
      setCart([...cart, { item, quantity: qty }]);
    }
  };

  //Vaciar el carrito (cart view y checkout)
  const clearCart = () => {
    setCart([]);
  };

  //Eliminar un item del carrito (cart view)
  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.item.id !== id));
  };

  //Retronar un booleano (context)
  const isInCart = (id) => {
    return cart.some((prod) => prod.item.id === id);
  };

  //Stock de un producto (item detail)
  const itemQty = (id) => {
    const itemIn = cart.find((prod) => prod.item.id === id);
    return itemIn ? itemIn.quantity : 0;
  };

  //Total a pagar
  const total = () => {
    return cart.reduce(
      (acc, prod) => (acc += prod.item.price * prod.quantity),
      0,
    );
  };

  //Total de items
  const totalQty = () => {
    return cart.reduce((acc, prod) => (acc += prod.quantity), 0);
  };

  //Envio free
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
      {/* {props.children} */}
      {children}
    </CartContext.Provider>
  );
};
