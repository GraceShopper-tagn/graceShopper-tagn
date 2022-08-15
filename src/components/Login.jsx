import React from "react";
import { loginUser } from "../api/auth";
import { useState } from "react";

export default function Login() {
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
            console.log("token", localStorage.token);
            setPassword("");
            setUsername("");
          } else {
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
          setToken(null);
          localStorage.clear();
        }}
      >
        {" "}
        Logout{" "}
      </button>
    </div>
  );
}
