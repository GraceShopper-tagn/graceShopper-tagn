import React, { useState, useEffect } from "react";
import { getProduct } from "../api/products";
import { fetchCart } from "../api/orders";
import {
  addToCart,
  decreaseQty,
  increaseQty,
  removeFromCart,
} from "../api/cartItems";
import { useNavigate } from "react-router-dom";

export default function AddToCart() {
  const [product, setProduct] = useState([]);
  const [orderId, setOrderId] = useState();
  const [cartItemId, setCartItemId] = useState();
  const [quantity, setQuantity] = useState(1);
  const [productPrice, setProductPrice] = useState();
  const [subTotal, setSubTotal] = useState();
  const localShoeId = JSON.parse(localStorage.getItem("shoeid"));
  const localSizeId = JSON.parse(localStorage.getItem("sizeid"));
  const localInventory = JSON.parse(localStorage.getItem("size-inventory"));
  let navigate = useNavigate();

  // console.log("LOCAL SHOE ID: ", localShoeId);
  // console.log("LOCAL SIZE ID: ", localSizeId);
  // console.log("LOCAL INVENTORY: ", localInventory);

  useEffect(() => {
    const getOneProduct = async () => {
      const product = await getProduct(localShoeId);
      setProduct(product);
      setProductPrice(product.price);
      setSubTotal(product.price);
    };
    getOneProduct();
  }, []);

  useEffect(() => {
    const getCart = async () => {
      const currentCart = await fetchCart();
      console.log("CURRENT CART: ", currentCart);
      let idToSet = currentCart.id;
      console.log("ID TO SET: ", idToSet);
      setOrderId(idToSet);
    };
    getCart();
  }, []);

  // currentCart[0]?.id;

  useEffect(() => {
    const getCartItem = async () => {
      const currentItem = await addToCart(orderId, +localSizeId, +productPrice);
      setCartItemId(currentItem.id);
    };
    getCartItem();
  }, [orderId]);

  return (
    <div>
      <h2>{product.name}</h2>
      <h3>{product.price}</h3>
      <h3>{product.producttags ? product.producttags[0].tags.name : null}</h3>
      <h3>{product.producttags ? product.producttags[1].tags.name : null}</h3>
      <h3>{product.producttags ? product.producttags[2].tags.name : null}</h3>
      <h3>{product.producttags ? product.producttags[3].tags.name : null}</h3>
      <h3>{product.description}</h3>
      <img
        src={product.productphotos ? product.productphotos[0].photos.url : null}
        width="250"
        height="250"
      />

      <form>
        <h4 className="display-quantity">
          Current number of items to add to cart: {quantity}
        </h4>
        <h4>Subtotal: ${subTotal}.00</h4>

        <button
          onClick={async () => {
            event.preventDefault();
            let decreased = await decreaseQty(cartItemId, productPrice);
            setSubTotal(decreased.subtotal);
            setQuantity(decreased.quantity);
          }}
        >
          -
        </button>
        <button
          onClick={async () => {
            event.preventDefault();
            let increased = await increaseQty(cartItemId, productPrice);
            setSubTotal(increased.subtotal);
            setQuantity(increased.quantity);
          }}
        >
          +
        </button>
        <button
          onClick={async () => {
            event.preventDefault();
            let removed = await removeFromCart(cartItemId);
            navigate(`/products/${localShoeId}`);
          }}
        >
          Remove From Cart
        </button>
      </form>
    </div>
  );
}
