import React from "react";
import useAuth from "../hooks/useAuth";
import EditUser from "./EditUser";
import { useState, useEffect } from "react";
import { fetchFulfilledOrders } from "../api/orders";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [ordersToDisplay, setOrdersToDisplay] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getOrders = async () => {
      if (user) {
        const orders = await fetchFulfilledOrders();
        setOrders(orders);
      }
    };
    getOrders();
  }, []);

  useEffect(() => {
    console.log(orders);
    if (orders) {
      const getOrdersToDisplay = orders.map((order, i) => {
        return (
          <div
            className="orderCard"
            key={`Key ${i}`}
            onClick={() => navigate(`/orders/${order.id}`)}
          >
            <h5>Total: ${order.total.toFixed(2)}</h5>
            <h5>Order Date: {order.orderdate.slice(0, 10)}</h5>
            <h5>Shipped To: {order.shippingaddress}</h5>
          </div>
        );
      });
      setOrdersToDisplay(getOrdersToDisplay);
    }
  }, [orders]);

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
        <h3>Past Orders:</h3>
        {ordersToDisplay}
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
