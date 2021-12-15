import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "./registration.css";

function Login({
  userLoginInformation,
  setUserLoginInformation,
  history,
  setLogged,
  setSubmitted,
}) {
  const handleonChange = (e) => {
    const { name, value } = e.target;

    setUserLoginInformation({
      ...userLoginInformation,
      [name]: value,
    });
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    let loginUpdatedData = [];
    loginUpdatedData = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : [];

    const checkUser = loginUpdatedData.filter(
      (acc) =>
        acc.email === userLoginInformation.loginEmail &&
        acc.password === userLoginInformation.loginPassword
    );

    const check = checkUser.some(
      (acc) =>
        acc.email === userLoginInformation.loginEmail &&
        acc.password === userLoginInformation.loginPassword
    );

    if (check) {
      history.push({
        pathname: `/products`,
      });
      setLogged(true);
      setSubmitted(true);

      sessionStorage.setItem(
        "loggedAccount",
        JSON.stringify({
          email: checkUser[0].email,
          username: checkUser[0].username,
        })
      );
    } else {
      alert("incorrect email or password ");
    }
  };
  return (
    <div
      className="login"
      style={{
        background: ` rgba(0, 0, 0, 0.7) url("/aaron-burden-0fA3gVTGwjQ-unsplash-min.jpg")`,
        backgroundSize: "cover",
      }}
    >
      <form onSubmit={handleLoginSubmit} className="login-form">
        <h2>Login</h2>
        <label>
          Email
          <input
            className="registretion-input"
            name="loginEmail"
            type="email"
            value={userLoginInformation.loginEmail}
            onChange={handleonChange}
            placeholder="enter your email"
            required
          />
        </label>
        <label>
          password
          <input
            className="registretion-input"
            name="loginPassword"
            type="password"
            value={userLoginInformation.loginPassword}
            onChange={handleonChange}
            placeholder="enetr your password"
            required
          />
        </label>
        <button className="login-btn-form">Login</button>
        <Link to="/signup">i don't have an account</Link>
      </form>
    </div>
  );
}

export default withRouter(Login);
