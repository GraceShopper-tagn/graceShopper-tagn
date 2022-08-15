import { fetchMe } from "../axios-services/index";
import React, { useState, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    async function getUser() {
      // hit the /me route and pass it your token
      if (localStorage.token) {
        // hit the /me route and pass it your token
        const userToSet = await fetchMe();
        setUser(userToSet);
      } else {
        setUser({});
      }
    }
    getUser();
  }, [localStorage.token]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
