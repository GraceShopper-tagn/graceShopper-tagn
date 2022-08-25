import React from "react";
import { loginUser } from "../api/auth";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  const { setUser } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <h4 id="loginTitle">Login Here:</h4>

      <Form
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
        <Form.Group
          required={false}
          onChange={(e) => setUsername(e.target.value)}
        >
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Username" />
        </Form.Group>

        <Form.Group required={false} onChange={(e) => setEmail(e.target.value)}>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Example@email.com" />
        </Form.Group>

        <Form.Group
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button id="loginButton" type="submit">
          LOGIN
        </Button>
      </Form>
    </div>
  );
}
