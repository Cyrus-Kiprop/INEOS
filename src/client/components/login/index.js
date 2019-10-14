import React from "react";
// import "./index.css";
// import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <form action="index.html" className="box">
        <h3>Fika Safe</h3>
        <h5>Welcome back! Please login into your account</h5>
        <input type="text" name="" placeholder="Username" />
        <input type="password" name="" placeholder="Password" />
        <span>
          <input type="checkbox" name="" />
          <label>Remember me</label>
          <a href="#!">Forgot Password</a>
        </span>

        <input type="submit" name="" value="login" />
        <input type="submit" name="" value="Sign up" />
      </form>
    </div>
  );
};

export default Login;
