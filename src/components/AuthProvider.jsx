import { fetchMe } from "../axios-services/index";
import React, { useState, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(process.env.SAVED_USER);

  useEffect(() => {
    async function getUser() {
      // hit the /me route and pass it your token
      const userToSet = await fetchMe();
      setUser(userToSet);
    }
    getUser();
  }, [process.env.SAVED_USER]);

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
