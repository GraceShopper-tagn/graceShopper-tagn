import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";
import { claimOrder, editOrder } from "../api/orders";
import useCart from "../hooks/useCart";
import useAuth from "../hooks/useAuth";

export default function Register() {
  const { setCart } = useCart();
  const { setUser } = useAuth();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [paymentInfo, setPaymentInfo] = useState("");
  let navigate = useNavigate();

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (password === confirmPassword && password.length >= 8) {
            const result = await registerUser(
              username,
              password,
              firstname,
              lastname,
              email,
              shippingAddress,
              billingAddress,
              paymentInfo
            );

            if (result.user) {
              if (localStorage.cartid) {
                const orderId = localStorage.getItem("cartid");
                const editedOrder = await claimOrder(
                  orderId,
                  result.user.id,
                  result.user.billingaddress
                );
                localStorage.clear();

                setCart(editedOrder[0]);
              }
              setUser(result.user);
              alert("Account created");
              navigate("/products");
            } else {
              alert("Account not created");
            }
          } else {
            if (password !== confirmPassword) {
              alert(`Passwords do not match.`);
            }
            if (password.length < 8) {
              alert(`Password is too short.`);
            }
          }
        }}
      >
        <input
          placeholder="Username"
          value={username}
          required={true}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          placeholder="Password"
          value={password}
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          placeholder="Confirm Password"
          value={confirmPassword}
          required={true}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <input
          placeholder="First Name"
          value={firstname}
          required={true}
          onChange={(e) => setFirstname(e.target.value)}
        />

        <input
          placeholder="Last Name"
          value={lastname}
          required={true}
          onChange={(e) => setLastname(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Shipping Address"
          value={shippingAddress}
          onChange={(e) => setShippingAddress(e.target.value)}
        />

        <input
          placeholder="Billing Address"
          value={billingAddress}
          onChange={(e) => setBillingAddress(e.target.value)}
        />

        <input
          placeholder="Payment Information"
          value={paymentInfo}
          onChange={(e) => setPaymentInfo(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
