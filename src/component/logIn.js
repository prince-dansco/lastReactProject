import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../context/contextProvider";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";

const Login = () => {
  const { login, error, setError } = useContext(AuthContext);

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [password, setPassword] = useState(false);
  function handleChange(event) {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    login(data);
    console.log(data);
    setData({
      email: "",
      password: "",
    });
  };

  const handlePassword = () => {
    setPassword(!password);
  };
  const handleFocus = () => {
    setError("");
  };

  return (
    <div className="container">
      {/* <h1 className="page-title">Sign In</h1> */}
      <form onSubmit={handleSubmit} className="form">
        <h2>Login to continue</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          onChange={handleChange}
          name="email"
          id="email"
          value={data.email}
          placeholder="enter email"
          autoFocus
          onFocus={handleFocus}
        />
        <label htmlFor="password">Password</label>
        <div className="password">
          <input
            className="password-input"
            type={password ? "text" : "password"}
            onChange={handleChange}
            name="password"
            id="password"
            placeholder="enter your password"
            value={data.password}
            onFocus={handleFocus}
            autoFocus
          />
          <div className="tooltip">
          {password ? (
            <BiSolidHide size={30} onClick={handlePassword} />
          ) : (
            <BiSolidShow size={30} onClick={handlePassword} />
          )}
          <span className="tooltiptext">
              {password ? "Hide Password" : "Show Password"}
            </span>
          </div>
        </div>

        <button type="submit">Login</button>
        <p className="links">
          Don't have an account? Go to{" "}
          <strong>
            <Link to="/signup">signup</Link>
          </strong>
        </p>
      </form>
    </div>
  );
};

export default Login;
