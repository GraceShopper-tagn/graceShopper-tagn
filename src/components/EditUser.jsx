import React, { useState } from "react";
import { editUser } from "../api/users";

import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

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
      <h3>Edit User Information</h3>
      <h4>{user.username}</h4>
      <form
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
            const updatedUser = await result.updatedUser;
            await setUser(updatedUser);
            alert("Account edited. Please log back in.");
            // const result2 = await logoutUser();
            localStorage.clear();
            setUser({});
            // window.location.reload(false);
            navigate("/login");
          } else alert("You must be logged in to edit your profile.");
        }}
      >
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
          value={paymentinfo}
          placeholder={user.paymentinfo}
          onChange={(e) => setPaymentInfo(e.target.value)}
        />
        <button type="Submit">Submit!</button>
      </form>
    </>
  );
}
