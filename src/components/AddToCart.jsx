import React, { useState, useEffect } from "react";
import { getProduct, getProductSize } from "../api/products";
import { fetchCart } from "../api/orders";
import {
  addToCart,
  decreaseQty,
  increaseQty,
  removeFromCart,
} from "../api/cartItems";
import { useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";

export default function AddToCart() {
  const { cart } = useCart();
  const [product, setProduct] = useState([]);
  const [orderId, setOrderId] = useState();
  const [cartItemId, setCartItemId] = useState();
  const [quantity, setQuantity] = useState(1);
  const [productPrice, setProductPrice] = useState();
  const [subTotal, setSubTotal] = useState();
  const [productsize, setProductsize] = useState();
  const localShoeId = JSON.parse(localStorage.getItem("shoeid"));
  const localSizeId = JSON.parse(localStorage.getItem("sizeid"));
  const localInventory = JSON.parse(localStorage.getItem("size-inventory"));
  let navigate = useNavigate();

  useEffect(() => {
    const getOneProduct = async () => {
      const product = await getProduct(localShoeId);
      setProduct(product);
      setProductPrice(product.price);
      setSubTotal(product.price);
      const productSize = await getProductSize(localShoeId, localSizeId);
      setProductsize(productSize);
      setOrderId(cart.id);
    };
    getOneProduct();
  }, []);

  useEffect(() => {
    try {
      const getCartItem = async () => {
        // setProductsize
        const productsizeid = productsize.id;
        const currentItem = await addToCart(
          orderId,
          productsizeid,
          productPrice
        );
        setCartItemId(currentItem.id);
      };
      getCartItem();
    } catch {}
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
          onClick={async (e) => {
            e.preventDefault();
            let decreased = await decreaseQty(cartItemId, productPrice);
            setSubTotal(decreased.subtotal);
            setQuantity(decreased.quantity);
          }}
        >
          -
        </button>
        <button
          onClick={async (e) => {
            e.preventDefault();
            let increased = await increaseQty(cartItemId, productPrice);
            setSubTotal(increased.subtotal);
            setQuantity(increased.quantity);
          }}
        >
          +
        </button>
        <button
          onClick={async (e) => {
            e.preventDefault();
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
