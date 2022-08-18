import { fetchMe } from "../api/carts";
import React, { useState, useEffect } from "react";
import CartContext from "../contexts/CartContext";
import { fetchCart } from "../api/orders";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState({});

  useEffect(() => {
    async function getCart() {
      const cartToSet = await fetchCart();
      if (cartToSet) {
        await setCart(cartToSet.cart);
      } else {
        setCart({});
      }
    }
    getCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
