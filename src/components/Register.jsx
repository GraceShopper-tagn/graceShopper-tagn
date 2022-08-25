import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";
import { claimOrder, editOrder } from "../api/orders";
import useCart from "../hooks/useCart";
import useAuth from "../hooks/useAuth";
import { Button, Form } from "react-bootstrap";

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
      <Form
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
        <Form.Group
          required={true}
          onChange={(e) => setUserName(e.target.value)}
        >
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>

        <Form.Group
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group
          required={true}
          onChange={(e) => setConfirmPassword(e.target.value)}
        >
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder=" Confirm Password" />
        </Form.Group>

        <Form.Group
          required={true}
          onChange={(e) => setFirstname(e.target.value)}
        >
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>

        <Form.Group
          required={true}
          onChange={(e) => setLastname(e.target.value)}
        >
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>

        <Form.Group required={false} onChange={(e) => setEmail(e.target.value)}>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Example@email.com" />
        </Form.Group>

        <Form.Group
          required={false}
          onChange={(e) => setShippingAddress(e.target.value)}
        >
          <Form.Label>Shipping Address</Form.Label>
          <Form.Control type="text" placeholder="Shipping Address" />
        </Form.Group>

        <Form.Group
          required={false}
          onChange={(e) => setBillingAddress(e.target.value)}
        >
          <Form.Label>Billing Address</Form.Label>
          <Form.Control type="text" placeholder="Billing Address" />
        </Form.Group>

        <Form.Group
          required={false}
          onChange={(e) => setPaymentInfo(e.target.value)}
        >
          <Form.Label>Payment Information</Form.Label>
          <Form.Control type="text" placeholder="Payment Information" />
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
