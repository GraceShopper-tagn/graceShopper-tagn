import React, { useState, useEffect } from "react";
import CartContext from "../contexts/CartContext";
import { fetchCart } from "../api/orders";
import useAuth from "../hooks/useAuth";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    async function getCart() {
      const cartToSet = await fetchCart();
      if (cartToSet) {
        await setCart(cartToSet[0]);
      } else {
        setCart({});
      }
    }
    getCart();
  }, []);

  useEffect(() => {
    console.log("cart", cart);
  }, [cart]);

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
