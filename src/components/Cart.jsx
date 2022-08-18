import React, { useEffect } from "react";
import { fetchCart } from "../api/orders";
import useCart from "../hooks/useCart";

export default function Cart() {
  const { cart, setCart } = useCart();

  //   useEffect(() => {
  //     const getCart = async () => {
  //       const cart = await fetchCart();
  //       console.log(cart);
  //       setCart(cart);
  //     };
  //     getCart();
  //   }, []);

  //   useEffect(() => {
  //     const cartItems = cart.cartItems.map((cartItem, i) => {
  //       return (
  //         <div key={`Key ${i}`}>
  //           {/* <h2>{product.name}</h2>
  //           <h2>{product.price}</h2>
  //           <h3>{product.producttags[0].tags.name}</h3>
  //           <h3>{product.producttags[1].tags.name}</h3>
  //           <h3>{product.producttags[2].tags.name}</h3>
  //           <h3>{product.producttags[3].tags.name}</h3>
  //           <h3>{product.description}</h3>
  //           <img
  //             src={product.productphotos[0].photos.url}
  //             width="250"
  //             height="250"
  //           /> */}
  //         </div>
  //       );
  //     });
  //     setProductsToDisplay(getProductsToDisplay);
  //   }, [products]);

  return (
    <div>
      <h1>Cart</h1>
      {cart ? cart.id : null}
    </div>
  );
}
