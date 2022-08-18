import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function NavBar() {
  const { user } = useAuth();
  return (
    <div>
      <header className="header-format">
        <h1>Shoes</h1> <h3>(Shop at Your Own Risk)</h3>
      </header>
      <nav className="navbar">
        <Link className="links" to="/products">
          Store
        </Link>
        {!user?.username && (
          <Link className="links" to="/login">
            Log In
          </Link>
        )}
        {!user?.username && (
          <Link className="links" to="/register">
            Register
          </Link>
        )}
        {user?.username && (
          <Link className="links" to="/logout">
            Log Out
          </Link>
        )}

        {user?.username && (
          <Link className="links" to="/user">
            User Profile
          </Link>
        )}
        {user?.username && (
          <Link className="links" to="/cart">
            Cart
          </Link>
        )}
        {user?.isAdmin && (
          <Link className="links" to="/admin">
            Administrator
          </Link>
        )}
      </nav>
    </div>
  );
}
