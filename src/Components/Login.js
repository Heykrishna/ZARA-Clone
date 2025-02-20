import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validateForm = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Both fields must be filled out");
      return;
    }
    navigate("/index");
  };

  return (
    <div>
      <ul className="loginul">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/help">Help</NavLink></li>
        <li><NavLink to="/bag">Shopping Bag</NavLink></li>
      </ul>
      <h1 className="heading">ZARA</h1>
      <div className="outerdiv">
        <div className="logindiv">
          <div className="divgreen"></div>
          <div>
            <form className="logininfo" onSubmit={validateForm}>
              <h3>Email</h3>
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
              <h3>Password</h3>
              <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <input className="submit" type="submit" value="Login" />
              <h4 style={{ textAlign: "center" }}>
                Don't have an account? <NavLink to="/signup">Sign up</NavLink>
              </h4>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;