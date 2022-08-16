import React from "react";
import { loginUser } from "../api/auth";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const { user, setUser, setToken } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h4 id="loginTitle">Login Here:</h4>
      <form
        id="loginInfo"
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await loginUser(username, password);
          console.log("Result from login: ", result);
          if (result) {
            alert("You are now logged in!");
            localStorage.setItem("token", result.token);
            setToken(result.token);
            // console.log("token", localStorage.token);
            setPassword("");
            setUsername("");
            // setUser(result.user);
          } else {
            console.log("broke");
            const errorMessage = result.message;
            setErrorMessage(errorMessage);
          }
        }}
      >
        <input
          className="userinput"
          placeholder="Username"
          value={username}
          required={true}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="userinput"
          placeholder="Password"
          value={password}
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button id="loginButton" type="submit">
          LOGIN
        </button>
      </form>
      <button
        id="logoutButton"
        onClick={() => {
          // localStorage.setItem("token", result.token);
          console.log(localStorage.token);
          // setUser({});
          localStorage.clear();
          // setToken(null);
          console.log(localStorage.token);
        }}
      >
        {" "}
        Logout{" "}
      </button>
    </div>
  );
}
