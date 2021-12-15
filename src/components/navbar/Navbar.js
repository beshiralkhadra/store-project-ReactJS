import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar({ submitted, logged, setLogged, setSubmitted }) {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="navbar">
      <div className="logo-nav">
        <Link to="/">
          {" "}
          <img src="/sagerLogo.png" alt="logo" />
        </Link>
        <button className="burger-menu" onClick={() => setShowNav(!showNav)}>
          <i className="fas fa-bars"></i>
        </button>
      </div>

      <div className="nav-options">
        <ul id={showNav ? "hidden" : null}>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/products">Products</Link>
          </li>
          <li>
            {" "}
            <Link to="/">Index</Link>
          </li>
        </ul>
      </div>

      <div className="register-btn">
        <ul>
          <li>
            {!logged ? (
              <Link to="/login">
                <button className="login-btn">Login</button>
              </Link>
            ) : (
              <Link to="/">
                <button
                  className="login-btn"
                  onClick={() => {
                    setLogged(false);
                    setSubmitted(false);
                  }}
                >
                  Logout
                </button>
              </Link>
            )}
          </li>
          <li>
            {!submitted ? (
              <Link to="/signup">
                <button className="signup-btn">Signup</button>
              </Link>
            ) : null}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
