import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import Signup from "./components/registration/Signup";
import Login from "./components/registration/Login";

function App() {
  const [userSignupInformation, setUserSignupInformation] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [userLoginInformation, setUserLoginInformation] = useState({
    loginEmail: "",
    loginPassword: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [logged, setLogged] = useState(false);

  return (
    <Router>
      <Navbar
        submitted={submitted}
        logged={logged}
        setLogged={setLogged}
        setSubmitted={setSubmitted}
      />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signup">
          <Signup
            userSignupInformation={userSignupInformation}
            setUserSignupInformation={setUserSignupInformation}
            submitted={submitted}
            setSubmitted={setSubmitted}
            setLogged={setLogged}
          />
        </Route>
        <Route exact path="/login">
          <Login
            userLoginInformation={userLoginInformation}
            setUserLoginInformation={setUserLoginInformation}
            logged={logged}
            setLogged={setLogged}
            setSubmitted={setSubmitted}
          />
        </Route>
        <Route exact path="/products">
          <div className="products-style">
            <Products />
          </div>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
