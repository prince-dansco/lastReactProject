import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "./contextProvider";



const Login = () => {
  const { login , error, setError} = useContext(AuthContext);



  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  const handleSubmit =  (event) => {
    event.preventDefault();

    login(data);
console.log(data);
setData({
    email: "",
    password: ""
  });
  };


  const handleFocus = () => {
    setError("");
  };


  return (
    <div className="container">
      <h1 className="page-title">Sign In</h1>
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
        <input
          type="password"
          onChange={handleChange}
          name="password"
          id="password"
          placeholder="enter your password"
          value={data.password}
          onFocus={handleFocus}
          autoFocus
        />
        <button type="submit">Login</button>
        <p className="links">
          Don't have an account? Go to <span><Link to="/signup">signup</Link></span>
        </p>
      </form>
    </div>
  );
};

export default Login;
