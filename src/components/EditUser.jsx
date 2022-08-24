import React, { useState } from "react";
import { editUser } from "../api/users";

import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

export default function EditUser() {
  const { user, setUser } = useAuth();
  const [firstName, setFirstName] = useState(user.firstname);
  const [lastName, setLastName] = useState(user.lastname);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [shippingAddress, setShippingAddress] = useState(user.shippingaddress);
  const [billingAddress, setBillingAddress] = useState(user.billingaddress);
  const [paymentinfo, setPaymentInfo] = useState(user.paymentinfo);
  let navigate = useNavigate();

  return (
    <>
      <h2>Edit User Information</h2>
      <h4>{user.username}</h4>
      <Form
        onSubmit={async (e) => {
          e.preventDefault();

          const result = await editUser(
            firstName,
            lastName,
            username,
            email,
            shippingAddress,
            billingAddress,
            paymentinfo
          );

          if (result.updatedUser) {
            const updatedUser = result.updatedUser;
            await setUser(updatedUser);
            alert("Account edited. Please log back in.");
            navigate("/login");
          } else alert("You must be logged in to edit your profile.");
        }}
      >
        <Form.Group onChange={(e) => setFirstName(e.target.value)}>
          <Form.Label>Firstname</Form.Label>
          <Form.Control type="text" placeholder={user.firstname} />
        </Form.Group>

        <Form.Group onChange={(e) => setLastName(e.target.value)}>
          <Form.Label>Lastname</Form.Label>
          <Form.Control type="text" placeholder={user.lastname} />
        </Form.Group>

        <Form.Group onChange={(e) => setUsername(e.target.value)}>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder={user.username} />
        </Form.Group>

        <Form.Group onChange={(e) => setEmail(e.target.value)}>
          <Form.Label>Email Adress</Form.Label>
          <Form.Control type="email" placeholder={user.email} />
        </Form.Group>

        <Form.Group onChange={(e) => setShippingAddress(e.target.value)}>
          <Form.Label>Shipping Address</Form.Label>
          <Form.Control type="text" placeholder={user.shippingaddress} />
        </Form.Group>

        <Form.Group onChange={(e) => setBillingAddress(e.target.value)}>
          <Form.Label>Billing Address</Form.Label>
          <Form.Control type="text" placeholder={user.billingaddress} />
        </Form.Group>

        <Form.Group onChange={(e) => setPaymentInfo(e.target.value)}>
          <Form.Label>Payment Information</Form.Label>
          <Form.Control type="text" placeholder={user.paymentinfo} />
        </Form.Group>

        <Button type="Submit">Submit!</Button>
      </Form>
    </>
  );
}
