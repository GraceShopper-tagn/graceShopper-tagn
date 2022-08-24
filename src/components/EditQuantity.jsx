import React, { useEffect, useState } from "react";
import {
  decreaseQty,
  getCartitemById,
  increaseQty,
  removeFromCart,
} from "../api/cartItems";

export default function EditQuantity({ cartItemId, productPrice, inventory }) {
  const [cartItem, setCartItem] = useState();
  const [quantity, setQuantity] = useState();

  useEffect(() => {
    const getCartItem = async () => {
      const cartItem = await getCartitemById(cartItemId);
      setCartItem(cartItem);
    };
    getCartItem();
  }, []);

  useEffect(() => {
    const getQuantity = async () => {
      try {
        const quantity = cartItem.quantity;
        setQuantity(quantity);
      } catch {}
    };
    getQuantity();
  }, [cartItem]);

  return (
    <form>
      <h4 className="display-quantity"></h4>

      <button
        onClick={async (e) => {
          e.preventDefault();

          let decreased = await decreaseQty(cartItemId, productPrice);
          if (decreased.quantity === 0) {
            await removeFromCart(cartItemId);
          }
          window.location.reload(false);
        }}
      >
        -
      </button>
      <button
        onClick={async (e) => {
          e.preventDefault();
          if (quantity === inventory) {
            alert(
              `Sorry, there ${
                inventory === 1 ? "is" : "are"
              } only ${inventory} in stock.`
            );
          } else {
            await increaseQty(cartItemId, productPrice);
            window.location.reload(false);
          }
        }}
      >
        +
      </button>
      <button
        onClick={async (e) => {
          e.preventDefault();
          await removeFromCart(cartItemId);
          window.location.reload(false);
        }}
      >
        Remove From Cart
      </button>
    </form>
  );
}
