import { fetchMe } from "../api/users";
import React, { useState, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    async function getUser() {
      // hit the /me route and pass it your token
      if (localStorage.getItem("token")) {
        // hit the /me route and pass it your token
        console.log("user from useeffect before change", user);

        const userToSet = await fetchMe();
        console.log("userToSet from useeffect", userToSet.user);
        await setToken(localStorage.token);
        console.log(token);
        await setUser(userToSet.user);
      } else {
        console.log("brfoke");
        setUser({});
      }
    }
    getUser();
    console.log("user from useeffect", user);
  }, [token]);

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
