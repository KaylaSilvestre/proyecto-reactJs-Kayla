// import {createContext, useEffect, useState} from 'react'

// export const CartContext = createContext();

// const carritoLS = JSON.parse(localStorage.getItem('carrito')) || []


// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState(carritoLS);

//   useEffect(()=>{
//         localStorage.setItem('carrito', JSON.stringify(cart))
//     },[cart])

//   //Agregar un item al carrito (item detail)
//   const addItem = (item, qty) => {
//     console.log(item, qty);
//     console.log({ ...item, quantity: qty });
//     if (isInCart(item.id)) {
//       setCart(
//         cart.map((prod) => {
//           if (item.id === prod.item.id) {
//             //Sumo cantidades
//             return { ...prod, quantity: prod.quantity + qty };
//           } else {
//             //No modifico el producto
//             return prod;
//           }
//         }),
//       );
//     } else {
//       //No existe el producto en el carrito, lo agrego
//       setCart([...cart, { item, quantity: qty }]);
//     }
//   };

//   //Vaciar el carrito (cart view y checkout)
//   const clearCart = () => {
//     setCart([]);
//   };

//   //Eliminar un item del carrito (cart view)
//   const removeItem = (id) => {
//     setCart(cart.filter((prod) => prod.item.id !== id));
//   };

//   //Retronar un booleano (context)
//   const isInCart = (id) => {
//     return cart.some((prod) => prod.item.id === id);
//   };

//   //Stock de un producto (item detail)
//   const itemQty = (id) => {
//     const itemIn = cart.find((prod) => prod.item.id === id);
//     return itemIn ? itemIn.quantity : 0;
//   };

//   //Total a pagar
//   const total = () => {
//     return cart.reduce(
//       (acc, prod) => (acc += prod.item.price * prod.quantity),
//       0,
//     );
//   };

//   //Total de items
//   const totalQty = () => {
//     return cart.reduce((acc, prod) => (acc += prod.quantity), 0);
//   };

//   //Envio free
//   const envio = () => {
//     const orderTotal = total();
//     return orderTotal > 1500 ? 0 : 150;
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addItem,
//         clearCart,
//         removeItem,
//         itemQty,
//         totalQty,
//         total,
//         envio,
//       }}
//     >
//       {/* {props.children} */}
//       {children}
//     </CartContext.Provider>
//   );
// };

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoLS = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(carritoLS);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cart));
  }, [cart]);

  // Agregar un item al carrito (item detail)
  const addItem = (item, qty) => {
    console.log(item, qty);

    // Buscamos si ya existe el mismo producto con la misma opción
    const index = cart.findIndex(
      (prod) =>
        prod.item.id === item.id &&
        prod.item.selectedOption?.name === item.selectedOption?.name
    );

    if (index !== -1) {
      // Si ya existe, sumamos la cantidad
      const newCart = [...cart];
      newCart[index].quantity += qty;
      setCart(newCart);
    } else {
      // Si no existe, agregamos como nuevo
      setCart([...cart, { item, quantity: qty }]);
    }
  };

  // Vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Eliminar un item del carrito (producto + opción)
  const removeItem = (id, optionName) => {
    setCart(
      cart.filter(
        (prod) =>
          !(prod.item.id === id && prod.item.selectedOption?.name === optionName)
      )
    );
  };

  // Retornar un booleano si existe el producto (solo por ID, opcional)
  const isInCart = (id) => {
    return cart.some((prod) => prod.item.id === id);
  };

  // Stock de un producto
  const itemQty = (id) => {
    const itemIn = cart.find((prod) => prod.item.id === id);
    return itemIn ? itemIn.quantity : 0;
  };

  // Total a pagar
  const total = () => {
    return cart.reduce(
      (acc, prod) => (acc += prod.item.price * prod.quantity),
      0
    );
  };

  // Total de items
  const totalQty = () => {
    return cart.reduce((acc, prod) => (acc += prod.quantity), 0);
  };

  // Envío free
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