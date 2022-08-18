import React from "react";
import { logoutUser } from "../api/auth";
import useAuth from "../hooks/useAuth";

export default function LogOut({}) {
  const { setUser } = useAuth();
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const result = await logoutUser();
        if (!result.loggedIn) setUser({});
        alert(result.message);
      }}
    >
      <button type="submit">Log Out</button>
    </form>
  );
}
