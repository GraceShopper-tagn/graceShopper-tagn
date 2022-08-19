import React, { useEffect, useState } from "react";
import { fetchCart } from "../api/orders";
import useCart from "../hooks/useCart";
import { editOrder } from "../api/orders";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { cart, setCart } = useCart();
  const [cartitemsToDisplay, setCartitemsToDisplay] = useState([]);
  const [totalsToDisplay, setTotalsToDisplay] = useState({});
  const [shippingAddress, setShippingAddress] = useState(cart.shippingaddress);
  const [billingAddress, setBillingAddress] = useState(cart.billingaddress);
  const [paymentInfo, setPaymentInfo] = useState(cart.paymentinfo);

  useEffect(() => {
    const getCart = async () => {
      const cart = await fetchCart();
      console.log(cart);
      setCart(cart);
    };
    getCart();
  }, []);

  useEffect(() => {
    const getTotalsToDisplay = async () => {
      const sub = displayPrice(`${cart.subtotal}`);
      const tax = displayPrice(`${cart.tax}`);
      const tot = displayPrice(`${cart.total}`);
      const totalsToDisplay = { sub: sub, tax: tax, tot: tot };
      setTotalsToDisplay(totalsToDisplay);
    };
    getTotalsToDisplay();
  }, [cartitemsToDisplay]);

  const displayPrice = (num) => {
    const str = `${num}`;
    if (str.includes(".")) {
      const i = num.indexOf(".");
      if (num.length - i === 2) {
        return `$${str}0`;
      }
      return `$${str}`;
    }
    return `$${str}.00`;
  };

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
        const subtotal = quantity * price * 1.0;

        return (
          <div className="cartItem" key={`Key ${i}`}>
            <h3>
              <img src={photoUrl} alt={photoName} height="20px"></img>
              {brand} {name} {gender} {activity} Shoe, {color}, Size {size}
            </h3>
            {/* There has to be a way to cast price to a float */}
            <h3>Price: {displayPrice(price)}</h3>
            <h3>Quantity: {quantity}</h3>
            <h3>Subtotal: {displayPrice(subtotal)}</h3>
          </div>
        );
      });
      setCartitemsToDisplay(cartItems);
    } catch {}
  }, [cart]);

  return (
    <div>
      <h1>Cart</h1>
      <h2>Subtotal: {cart ? totalsToDisplay.sub : "$0.00"}</h2>
      <h2>Tax: {cart ? totalsToDisplay.tax : "$0.00"}</h2>
      <h2>Total: {cart ? totalsToDisplay.tot : "$0.00"}</h2>
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
            user.id
          );

          if (result.updatedOrder) {
            alert("Shipping and payment information has been updated.");
          } else alert("Not updated :(");
        }}
      >
        <h4>Edit shipping and payment information</h4>
        <input
          value={shippingAddress}
          placeholder={cart.shippingaddress}
          onChange={(e) => setShippingAddress(e.target.value)}
        />
        <input
          value={billingAddress}
          placeholder={cart.billingaddress}
          onChange={(e) => setBillingAddress(e.target.value)}
        />
        <input
          value={paymentInfo}
          placeholder={cart.paymentinfo}
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
            user.id
          );

          if (result.updatedOrder) {
            alert("Order submitted! Thanks for shopping with us.");
            navigate("/products");
          } else alert("Order not submitted :(");
        }}
      >
        <button type="Submit">Submit Order?</button>
      </form>
    </div>
  );
}
