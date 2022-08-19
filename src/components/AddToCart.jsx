import React, { useState, useEffect } from "react";
import { getProduct } from "../api/products";
import { Navigate, useLocation, useParams } from "react-router-dom";
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
  const [orderId, setOrderId] = useState([]);
  const [cartItem, setCartItem] = useState();
  const [quantity, setQuantity] = useState();
  const localShoeId = JSON.parse(localStorage.getItem("shoeid"));
  const localSizeId = JSON.parse(localStorage.getItem("sizeid"));
  let navigate = useNavigate();

  useEffect(() => {
    const getOneProduct = async () => {
      const product = await getProduct(localShoeId);
      console.log("PRODUCT IN CART ITEM: ", product);
      setProduct(product);
    };
    getOneProduct();
  }, []);

  useEffect(() => {
    const getCart = async () => {
      const currentCart = await fetchCart();
      setOrderId(currentCart[0].id);
    };
    getCart();
  }, []);

  useEffect(() => {
    const getCartItem = async () => {
      const currentItem = await addToCart(2, +localSizeId);
      console.log("CURRENT ITEM: ", currentItem);
      setCartItem(currentItem);
    };
    getCartItem();
  }, []);
  console.log("cart item", cartItem);
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
        {/* <output name="calculate" for={cartItem}></output> */}
        <h4>{quantity}</h4>

        <button
          onClick={() => {
            decreaseQty(12);
          }}
        >
          -
        </button>
        <button
          onClick={async () => {
            await increaseQty(2); // increase decrease and delete all work in thunder but still need to get it working on front end
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            removeFromCart(12);
          }}
        >
          Delete
        </button>
      </form>
    </div>
  );
}
