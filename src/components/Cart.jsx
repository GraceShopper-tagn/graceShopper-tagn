import React, { useEffect, useState } from "react";
import { fetchCart, fetchOrderById, newOrder } from "../api/orders";
import useCart from "../hooks/useCart";
import { editOrder } from "../api/orders";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import EditQuantity from "./EditQuantity";
import { editInventory } from "../api/products";

export default function Cart() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { cart, setCart } = useCart();
  const [cartitemsToDisplay, setCartitemsToDisplay] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const [shippingAddress, setShippingAddress] = useState("");

  const [billingAddress, setBillingAddress] = useState("");
  const [paymentInfo, setPaymentInfo] = useState("");
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const getCart = async () => {
      if (user) {
        const cart = await fetchCart();
      } else cart = await fetchOrderById(localStorage.cartid);
      console.log(cart);
      setCart(cart);
    };
    getCart();
  }, []);

  useEffect(() => {
    const getDataToDisplay = async () => {
      const sub = cart ? cart.subtotal : 0;
      const tax = cart ? cart.tax : 0;
      const tot = cart ? cart.total : 0;
      const shipping = cart
        ? cart.shippingaddress
        : user
        ? user.shippingaddress
        : "";
      const billing = cart
        ? cart.billingaddress
        : user
        ? user.billingaddress
        : "";
      const payment = cart ? cart.paymentinfo : user ? user.paymentinfo : "";
      setSubtotal(sub ? sub.toFixed(2) : 0);
      setTax(tax ? tax.toFixed(2) : 0);
      setTotal(tot ? tot.toFixed(2) : 0);
      setShippingAddress(shipping);
      setBillingAddress(billing);
      setPaymentInfo(payment);
    };
    getDataToDisplay();
  }, [cartitemsToDisplay]);

  useEffect(() => {
    try {
      const cartItems = cart.cartitems ? (
        cart.cartitems.map((cartItem, i) => {
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
          const subtotal = quantity * price * 1.0;
          const inventory = cartItem.productsizes.inventory;

          return (
            <div className="cartItem" key={`Key ${i}`}>
              <h3>
                <img src={photoUrl} alt={photoName} height="20px"></img>
                {brand} {name} {gender} {activity} Shoe, {color}, Size {size}
              </h3>
              <h3>Price: ${price.toFixed(2)}</h3>
              <h3>Quantity: {quantity}</h3>
              <h3>Subtotal: {subtotal.toFixed(2)}</h3>
              <EditQuantity
                cartItemId={cartItem.id}
                productPrice={price}
                inventory={inventory}
              />
            </div>
          );
        })
      ) : (
        <h4>No cart items to display</h4>
      );
      setCartitemsToDisplay(cartItems);
    } catch {}
  }, [cart]);

  return (
    <div>
      <h1>Cart</h1>
      <h2>Subtotal: ${cart ? subtotal : "$0.00"}</h2>
      <h2>Tax: ${cart ? tax : "$0.00"}</h2>
      <h2>Total: ${cart ? total : "$0.00"}</h2>
      {cartitemsToDisplay}
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const result = await editOrder(
            cart.id,
            shippingAddress,
            billingAddress,
            paymentInfo,
            false,
            user.id,
            date
          );

          if (result.updatedOrder) {
            alert("Shipping and payment information has been updated.");
            window.location.reload(false);
          } else alert("Not updated :(");
        }}
      >
        <h4>Edit shipping and payment information</h4>
        <input
          value={shippingAddress}
          placeholder={cart ? cart.shippingaddress : "Shipping Address"}
          onChange={(e) => setShippingAddress(e.target.value)}
        />
        <input
          value={billingAddress}
          placeholder={cart ? cart.billingaddress : "Billing Address"}
          onChange={(e) => setBillingAddress(e.target.value)}
        />
        <input
          value={paymentInfo}
          placeholder={cart ? cart.paymentinfo : "Payment Information"}
          onChange={(e) => setPaymentInfo(e.target.value)}
        />
        <button type="Submit">Submit Changes?</button>
      </form>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const result = await editOrder(
            cart.id,
            shippingAddress,
            billingAddress,
            paymentInfo,
            true,
            user.id,
            date
          );

          if (result.updatedOrder) {
            alert("Order submitted! Thanks for shopping with us.");
            const newCart = await newOrder(user);
            setCart(newCart[0]);
            for (const cartItem of cart.cartitems) {
              const newItem = await editInventory(
                cartItem.productsizeid,
                cartItem.quantity
              );
              console.log(newItem);
            }
            navigate("/products");
          } else alert("Order not submitted :(");
        }}
      >
        <button type="Submit">Submit Order?</button>
      </form>
    </div>
  );
}
