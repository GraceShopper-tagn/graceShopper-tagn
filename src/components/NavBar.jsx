import React from "react";
import { Link, Navigate } from "react-router-dom";
import { FullNav, NavP } from "./styles/navbar";
import "bootstrap/dist/css/bootstrap.css";
import { DropdownButton } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "./styles/navbar.css";
import useAuth from "../hooks/useAuth";

export default function NavBar() {
  const { user } = useAuth();
  return (
    <nav>
      <FullNav>
        <DropdownButton style={{ background: "#DA9C6C" }} title="SUPPORT">
          <ListGroupItem key="1">Contact Info</ListGroupItem>
          <ListGroupItem key="2">FAQ</ListGroupItem>
          <ListGroupItem key="2">Give Us Feedback</ListGroupItem>
        </DropdownButton>
        <NavP>
          TAGN specializes in assisting their customers in every way possible!{" "}
          <strong>Enjoy our products</strong>
        </NavP>

        <div className={styles.searchNav}>
          <div>
            <img
              onClick={() => Navigate("/")}
              src="logo.png"
              alt="group logo"
              style={{ cursor: "pointer" }}
              height="125px"
            />
          </div>
          <div>
            <AiOutlineSearch
              style={{ position: "absolute", width: "20px", height: "40px" }}
            />
            <input type="search" placeholder="Find your soles" />
            <button> SEARCH </button>
          </div>
        </div>

        <header className="header-format">
          <h1>Shoes</h1>
        </header>
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
      </FullNav>
    </nav>
  );
}
