import React, { useContext, useState } from "react";
import { AuthContext } from "./contextProvider";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { error, setError,signup } = useContext(AuthContext);
  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(data);
    console.log(data);
    setData({
        userName: "",
        email: "",
        password: ""
    })
  };

  const handleFocus = () => {
    setError("");
  };

  return (
    <div>
      <h1 className="page-title">Sign Up</h1>

      <form onSubmit={handleSubmit} className="form">
        <h2>Register to continue</h2>
        {error && (
          <p style={{color: "red", fontSize: "19px",padding: "20px" }}>
            {error}
          </p>
        )}
        <label htmlFor="userName">UserName</label>
        <input
          type="text"
          value={data.userName}
          autoFocus
          name="userName"
          id="userName"
          placeholder=" enter your userName"
          onFocus={handleFocus}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={data.email}
          autoFocus
          name="email"
          placeholder="enter your email"
          onFocus={handleFocus}
          id="email"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={data.password}
          name="password"
          id="password"
          placeholder="enter your password"
          autoFocus
          onFocus={handleFocus}
          onChange={handleChange}
        />
        <button type="submit" className="btn">Sign Up</button>

        <p className="links">
          Already have an account? Go to <span><Link to="/login">login</Link></span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
