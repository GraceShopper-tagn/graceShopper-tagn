import React, { useState, useEffect } from "react";
import CartContext from "../contexts/CartContext";
import { fetchCart, fetchOrderById, newOrder } from "../api/orders";
import useAuth from "../hooks/useAuth";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    const getCart = async () => {
      try {
        let cartToSet;
        if (user) {
          cartToSet = await fetchCart();
        } else {
          if (localStorage.cartid) {
            cartToSet = await fetchOrderById(localStorage.getItem("cartid"));
          } else {
            cartToSet = await newOrder();
          }
        }
        if (cartToSet) {
          await setCart(cartToSet);
          localStorage.setItem("cartid", cartToSet.id);
        }
      } catch {}
    };
    getCart();
  }, [user]);

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
