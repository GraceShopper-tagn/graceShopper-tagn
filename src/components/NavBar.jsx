import React from "react";
import { Link } from "react-router-dom";
import { FullNav, LinkNav } from "./styles/navbar";
import "bootstrap/dist/css/bootstrap.css";
import { DropdownButton, Container, ListGroupItem } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "./styles/navbar.css";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <nav>
      <FullNav>
        <div className={styles.searchNav}>
          <div class="sticky-top">
            <img
              onClick={() => navigate("/products")}
              src="logo.png"
              alt="group logo"
              class="rounded"
              style={{ cursor: "pointer" }}
              height="90px"
            />
            <AiOutlineSearch
              style={{
                marginLeft: "7.5%",
                width: "20px",
                height: "40px",
              }}
            />
            <input type="search" placeholder="Find your soles" />
            <button> SEARCH </button>
          </div>
        </div>
      </FullNav>
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
