import React from "react";
import { Link } from "react-router-dom";
import { FullNav, LinkNav, SearchBar } from "./styles/navbar";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./styles/navbar.css";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <nav>
      <div className={styles.searchNav}>
        <FullNav>
          <div>
            <img
              onClick={() => navigate("/products")}
              src="logo.png"
              alt="group logo"
              class="rounded"
              style={{ cursor: "pointer", height: "100px", width: "175px" }}
            />
          </div>
          <SearchBar>
            <input type="search" placeholder="Find your soles" />
            <button> SEARCH </button>
          </SearchBar>
        </FullNav>
      </div>

      <LinkNav>
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

        <Link className="links" to="/cart">
          Cart
        </Link>

        {user?.isAdmin && (
          <Link className="links" to="/admin">
            Administrator
          </Link>
        )}
      </LinkNav>
    </nav>
  );
}
