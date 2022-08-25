import React, { useEffect, useState } from "react";
import { fetchCart, fetchOrderById, newOrder } from "../api/orders";
import useCart from "../hooks/useCart";
import { editOrder } from "../api/orders";
import useAuth from "../hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import EditQuantity from "./EditQuantity";
import { editInventory } from "../api/products";

export default function Order() {
  const [order, setOrder] = useState({});
  const { id } = useParams();

  const [cartitemsToDisplay, setCartitemsToDisplay] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const [shippingAddress, setShippingAddress] = useState("");

  const [billingAddress, setBillingAddress] = useState("");
  const [paymentInfo, setPaymentInfo] = useState("");
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const getOrder = async () => {
      try {
        const order = await fetchOrderById(id);
        setOrder(order);
      } catch {}
    };
    getOrder();
  }, []);

  useEffect(() => {
    const getDataToDisplay = async () => {
      const sub = order ? order.subtotal : 0;
      const tax = order ? order.tax : 0;
      const tot = order ? order.total : 0;
      const shipping = order ? order.shippingaddress : "";
      const billing = order ? order.billingaddress : "";
      const payment = order ? order.paymentinfo : "";
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
      const cartItems = order.cartitems ? (
        order.cartitems.map((cartItem, i) => {
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
            </div>
          );
        })
      ) : (
        <h4>No order items to display</h4>
      );
      setCartitemsToDisplay(cartItems);
    } catch {}
  }, [order]);

  return (
    <div>
      <h1>Order from {order.orderdate ? order.orderdate.slice(0, 10) : ""}</h1>
      <h2>Subtotal: ${order ? subtotal : "$0.00"}</h2>
      <h2>Tax: ${order ? tax : "$0.00"}</h2>
      <h2>Total: ${order ? total : "$0.00"}</h2>
      <h2>Shipped To: {order.shippingaddress ? order.shippingaddress : ""}</h2>
      {cartitemsToDisplay}
    </div>
  );
}
