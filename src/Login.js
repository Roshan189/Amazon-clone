import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
        // console.log(auth);
      })
      .catch((error) => alert(error.message));

    // some fancy firebase login shitttt...
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it succesfully created a new user with email and password
        if (auth) {
          navigate("/");
        }
        // console.log(auth);
      })
      .catch((error) => alert(error.message));

    // do some fancy firebase register shittt....
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG23.png"
          alt=""
          className="login-logo"
        />
      </Link>

      <div className="login-container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn} className="login-signInButton">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice
        </p>

        <button onClick={register} className="login-registerButton">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
