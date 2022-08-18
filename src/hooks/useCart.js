// const useCart = () => {
//   // addItemToCart
//   // if the user is logged in, do something
//   // if the user is a guest, do something else => store the cart in localStorage
//   // { 1: 2, 11: 1 }
//   // removeItemFrom cart
// };

import { useContext } from "react";
import CartContext from "../contexts/CartContext";

const useCart = () => {
  const { cart, setCart } = useContext(CartContext);

  // const addItemToCart = async () => {

  // };

  return {
    cart,
    setCart,
  };
};

export default useCart;
