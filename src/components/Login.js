import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import auth from "../auth";

export default function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // const history = useHistory();

  // function validateForm() {
  //   return email.length > 0 && password.length > 0;
  // }

  function handleSubmit(event) {
    event.preventDefault();
    let credentials = {
      userName: "hruday@gmail.com",
      password: "hruday123",
    };

    if (
      userName === credentials.userName &&
      password === credentials.password
    ) {
      const token = "123456abcdef";
      sessionStorage.setItem("auth-token", token);
      auth.login(() => {
        props.history.push("/dashboard");
      });
    } else if (!userName && !password) {
      alert("please fill userName and password");
    } else {
      alert("wrong userName or password combination");
    }
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>UserName</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}
