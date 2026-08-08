import React, { useState } from "react";
import "../styles/form.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(
        "http://localhost:3000/api/auth/login",
        {
          username,
          password,
        },
        {
          withCredentials: true,
        },
      )
      .then((response) => {
        console.log("User logged in successfully:", response.data);
      });
  }

  return (
    <>
      <main>
        <div className="form-container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account?{" "}
            <Link className="form-link" to="/register">
              Register
            </Link>
          </p>
        </div>
      </main>
    </>
  );
};

export default LoginForm;
