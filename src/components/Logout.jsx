import React from "react";
import { logoutUser } from "../api/auth";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";
import { Button } from "react-bootstrap";

export default function LogOut({}) {
  const { user, setUser } = useAuth();
  const { setCart } = useCart();
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (user) {
          const result = await logoutUser();
          if (!result.loggedIn) {
            localStorage.clear();
            setUser({});
            window.location.reload(false);
          }
          alert(result.message);
        }
      }}
    >
      <Button type="submit">Log Out</Button>
    </form>
  );
}
