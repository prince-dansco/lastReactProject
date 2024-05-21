import React, { useContext, useState } from "react";
import "../cssPages/navbar.css"
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../image/reshot-icon-code-CZ2NMXUGQ8.svg";
import { FaLinkedin } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import { AuthContext } from "../context/contextProvider";
const NavBar = () => {
  const [click, setClick] = useState(false);
  const { isLogin, logout, postId } = useContext(AuthContext);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="nav-bar">
      <div className="nav-content">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h1>Lorddansco</h1>
        </div>
        <div className={!click ? "links" : "links  return"}>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About Us</NavLink>
            <NavLink to="Blog">Blog</NavLink>
            <NavLink to="service"> Services</NavLink>
            <NavLink to={`single/${postId}`}> SinglePost</NavLink>
            {isLogin ? (
              <Link className="login" onClick={logout}>
                Logout
              </Link>
            ) : (
              <Link to="signup" className="login">
                Login
              </Link>
            )}
          </nav>
          <div className="socials">
            <FaLinkedin size={25} color="blue" />
            <IoDiamond size={25} />
            <NavLink to="contact">Contact Us</NavLink>
          </div>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {!click ? (
            <FaBars size={30} color="blue" />
          ) : (
            <FaTimes size={30} color="blue" />
          )}
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default NavBar;
