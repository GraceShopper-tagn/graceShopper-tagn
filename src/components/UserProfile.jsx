import React from "react";
import useAuth from "../hooks/useAuth";
import EditUser from "./EditUser";

export default function UserProfile() {
  const { user } = useAuth();
  console.log(user);

  return (
    <div>
      <h1>UserProfile</h1>
      <h5>First Name: {user.firstname}</h5>
      <h5>Last Name: {user.lastname}</h5>
      <h5>Username: {user.username}</h5>
      <h5>Email: {user.email}</h5>
      <h5>
        Shipping Address: {user.shippingaddress ? user.shippingaddress : "n/a"}
      </h5>
      <h5>
        Billing Address: {user.billingaddress ? user.billingaddress : "n/a"}
      </h5>
      <h5>Payment Info: {user.paymentinfo ? user.paymentinfo : "n/a"}</h5>
      <EditUser user={user} />
      {/* <Orders />
      <Favorites /> */}
    </div>
  );
}
