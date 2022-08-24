import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// getAPIHealth is defined in our axios-services directory index.js
// you can think of that directory as a collection of api adapters
// where each adapter fetches specific info from our express server's /api route

import "../style/App.css";
import Login from "./Login";
import NavBar from "./NavBar";
import Register from "./Register";
import UserProfile from "./UserProfile";
import LogOut from "./Logout";
import Products from "./Products";
import Product from "./Product";
import Cart from "./Cart";
import AddToCart from "./AddToCart";
<<<<<<< HEAD
import Order from "./Order";
=======
import FilteredProducts from "./FilteredProducts";
>>>>>>> tags

const App = () => {
  useEffect(() => {
    // follow this pattern inside your useEffect calls:
    // first, create an async function that will wrap your axios service adapter
    // invoke the adapter, await the response, and set the data
    // const getAPIStatus = async () => {
    //   const { healthy } = await getAPIHealth();
    //   setAPIHealth(healthy ? "api is up! :D" : "api is down :/");
    // };
    // second, after you've defined your getter above
    // invoke it immediately after its declaration, inside the useEffect callback
    // getAPIStatus();
  }, []);

  return (
    <div className="app-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/Logout" element={<LogOut />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/addtocart" element={<AddToCart />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders/:id" element={<Order />} />
        <Route path="/*" element={<Products />} />{" "}
        <Route path="/products/filtered" element={<FilteredProducts />} />
      </Routes>
    </div>
  );
};

export default App;
