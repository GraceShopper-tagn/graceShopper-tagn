import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <header className="header-format">
        <h1>Shoes</h1> <h3>(Shop at Your Own Risk)</h3>
      </header>
      <nav className="navbar">
        <Link className="links" to="/login">
          Log In
        </Link>
        <Link className="links" to="/logout">
          Log Out
        </Link>
        <Link className="links" to="/register">
          Register
        </Link>
      </nav>
    </div>
  );
}
