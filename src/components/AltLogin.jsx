import React from "react";
import { altLoginUser } from "../api/auth";
import { useState } from "react";

export default function AltLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h4 id="loginTitle">Login Here:</h4>
      <form
        id="loginInfo"
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await altLoginUser(email, password);
          console.log("Result from email login: ", result);
          if (result.user) {
            alert("You are now logged in!");
            setPassword("");
            setEmail("");
          } else if (result.message) {
            alert(result.message);
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
