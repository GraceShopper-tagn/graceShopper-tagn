import React, { useState } from "react";
import { editUser } from "../api/users";
import useAuth from "../hooks/useAuth";

export default function EditUser() {
  const { user } = useAuth();
  const { firstName, setFirstName } = useState(user.firstname);
  const { lastName, setLastName } = useState(user.lastname);
  const { username, setUsername } = useState(user.username);
  const { email, setEmail } = useState(user.email);
  const { shippingAddress, setShippingAddress } = useState(
    user.shippingaddress
  );
  const { billingAddress, setBillingAddress } = useState(user.billingaddress);
  const { paymentInfo, setPaymentInfo } = useState(user.paymentinfo);
  const { password, setPassword } = useState(user.password);

  async function handleSubmit(e) {
    e.preventDefault();

    const updatedUser = await editUser(
      firstName,
      lastName,
      username,
      email,
      shippingAddress,
      billingAddress
    );
    updatedUser();
  }

  return (
    <>
      <h3>Edit User Information</h3>
      <form onSubmit={handleSubmit}>
        <input
          value={firstName}
          placeholder={user.firstname}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          value={lastName}
          placeholder={user.lastname}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          value={username}
          placeholder={user.username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          value={email}
          placeholder={user.email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={shippingAddress}
          placeholder={user.shippingaddress}
          onChange={(e) => setShippingAddress(e.target.value)}
        />
        <input
          value={billingAddress}
          placeholder={user.billingaddress}
          onChange={(e) => setBillingAddress(e.target.value)}
        />
        <input
          value={paymentInfo}
          placeholder={user.paymentinfo}
          onChange={(e) => setPaymentInfo(e.target.value)}
        />
        <input
          value={password}
          placeholder={user.password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="Submit">Submit!</button>
      </form>
    </>
  );
}
