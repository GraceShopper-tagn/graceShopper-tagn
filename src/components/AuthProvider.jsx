import { fetchMe } from "../api/users";
import React, { useState, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getUser() {
      const userToSet = await fetchMe();
      if (userToSet) {
        await setUser(userToSet.user);
      } else {
        setUser({});
      }
    }
    getUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
