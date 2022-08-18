import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";

export default function Register() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  let navigate = useNavigate();

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (password === confirmPassword && password.length >= 8) {
            const result = await registerUser(
              username,
              password,
              firstname,
              lastname,
              email
            );

            if (result.user) {
              alert("Account created");
              navigate("/login");
            } else {
              alert("Account not created");
            }
          } else {
            if (password !== confirmPassword) {
              alert(`Passwords do not match.`);
            }
            if (password.length < 8) {
              alert(`Password is too short.`);
            }
          }
        }}
      >
        <input
          placeholder="Username"
          value={username}
          required={true}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          placeholder="Password"
          value={password}
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          placeholder="Confirm Password"
          value={confirmPassword}
          required={true}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <input
          placeholder="First Name"
          value={firstname}
          required={true}
          onChange={(e) => setFirstname(e.target.value)}
        />

        <input
          placeholder="Last Name"
          value={lastname}
          required={true}
          onChange={(e) => setLastname(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
