import React, { useEffect, useState } from "react";
import { fetchCart } from "../api/orders";
import useCart from "../hooks/useCart";

export default function Cart() {
  const { cart, setCart } = useCart();
  const [cartitemsToDisplay, setCartitemsToDisplay] = useState([]);

  useEffect(() => {
    const getCart = async () => {
      const cart = await fetchCart();
      console.log(cart);
      setCart(cart);
    };
    getCart();
  }, []);

  useEffect(() => {
    try {
      const cartItems = cart.cartitems.map((cartItem, i) => {
        const product = cartItem.productsizes.products;
        const name = product.name;
        const price = product.price;
        const brand = product.producttags[0].tags.name;
        const color = product.producttags[1].tags.name;
        const activity = product.producttags[2].tags.name;
        const gender = product.producttags[3].tags.name;
        const photoUrl = product.productphotos[0].photos.url;
        const photoName = product.productphotos[0].photos.name;
        const quantity = cartItem.quantity;
        const size = cartItem.productsizes.sizes.size;

        // const subtotal = price * quantity;
        // console.log("product", cartItem[0].products);

        return (
          <div key={`Key ${i}`}>
            {/* <h2>{name}</h2>
            <h2>{price}</h2>
            <h2>{brand}</h2> */}
            <h3>
              <img src={photoUrl} alt={photoName} height="20px"></img>
              {brand} {name} {gender} {activity} Shoe, {color}
            </h3>
            <h3>
              Price {price} {quantity} {size}
            </h3>
            {/* <h3>{cartitem.cartitemtags[1].tags.name}</h3> */}
            {/* <h3>{cartitem.products.name}</h3> */}
            {/* <h3>{cartitem.cartitemtags[2].tags.name}</h3> */}
            {/* <h3>{cartitem.cartitemtags[3].tags.name}</h3> */}
            {/* <h3>{cartitem.description}</h3> */}
            {/* <img
              src={cartitem.cartitemphotos[0].photos.url}
              width="250"
              height="250"
            /> */}
          </div>
        );
      });
      setCartitemsToDisplay(cartItems);
    } catch {}
  }, [cart]);

  return (
    <div>
      <h1>Cart</h1>
      {cartitemsToDisplay}
    </div>
  );
}
