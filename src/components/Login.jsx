import React from "react";
import { loginUser } from "../api/auth";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  // const [emailPassword, setEmailPassword] = useState("");
  return (
    <div>
      <h4 id="loginTitle">Login Here:</h4>
      <form
        id="loginInfo"
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await loginUser(username, password);
          console.log("Result from email login: ", result);
          if (result.user) {
            alert("You are now logged in!");
            setPassword("");
            setUsername("");
            // setEmail("");
          } else if (result.message) {
            alert(result.message);
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
        {/* <input
          className="userinput"
          placeholder="Email"
          value={email}
          required={false}
          onChange={(e) => setEmail(e.target.value)}
        /> */}
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
      {/* <form
        id="loginInfo"
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await altLoginUser(email, emailPassword);
          console.log("Result from login: ", result);
          if (result) {
            alert("You are now logged in!");
            setEmailPassword("");
            setEmail("");
          } else {
            const errorMessage = result.message;
            setErrorMessage(errorMessage);
          }
        }}
      >
        <input
          className="userinput"
          placeholder="Email"
          value={email}
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="userinput"
          placeholder="Email Password"
          value={emailPassword}
          required={true}
          onChange={(e) => setEmailPassword(e.target.value)}
        />
        <button id="loginButton" type="submit">
          LOGIN
        </button>
      </form> */}
    </div>
  );
}
