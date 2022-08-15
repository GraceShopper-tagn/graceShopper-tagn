import React from "react";
import { logoutUser } from "../api/auth";

export default function LogOut({}) {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const result = await logoutUser();
        alert(result.message);
      }}
    >
      <button type="submit">Log Out</button>
    </form>
  );
}
