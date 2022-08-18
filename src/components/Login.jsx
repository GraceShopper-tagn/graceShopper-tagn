import React from "react";
import { loginUser } from "../api/auth";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const { setUser } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <h4 id="loginTitle">Login Here:</h4>
      <form
        id="loginInfo"
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await loginUser(username, email, password);
          if (result.user) {
            alert("You are now logged in!");
            setPassword("");
            setUsername("");
            setEmail("");
            setUser(result.user);
          } else if (result.message) {
            alert(result.message);
          }
        }}
      >
        <input
          className="userinput"
          placeholder="Username"
          value={username}
          required={false}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="userinput"
          placeholder="Email"
          value={email}
          required={false}
          onChange={(e) => setEmail(e.target.value)}
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
    </div>
  );
}
