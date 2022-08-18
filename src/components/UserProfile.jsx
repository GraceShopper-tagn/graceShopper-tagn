import React from "react";
import useAuth from "../hooks/useAuth";
import EditUser from "./EditUser";

export default function UserProfile() {
  const { user } = useAuth();

  if (user)
    return (
      <div>
        <h1>UserProfile</h1>
        <h5>First Name: {user.firstname ? user.firstname : "n/a"}</h5>
        <h5>Last Name: {user.lastname ? user.lastname : "n/a"}</h5>
        <h5>Username: {user.username ? user.username : "n/a"}</h5>
        <h5>Email: {user.email ? user.email : "n/a"}</h5>
        <h5>
          Shipping Address:{" "}
          {user.shippingaddress ? user.shippingaddress : "n/a"}
        </h5>
        <h5>
          Billing Address: {user.billingaddress ? user.billingaddress : "n/a"}
        </h5>
        <h5>Payment Info: {user.paymentinfo ? user.paymentinfo : "n/a"}</h5>
        <EditUser />
      </div>
    );
  else
    return (
      <div>
        <h1>UserProfile</h1>
        <h2>Please log in to view profile</h2>
      </div>
    );
}
