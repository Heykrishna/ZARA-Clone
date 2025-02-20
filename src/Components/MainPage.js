import React from "react";
import { NavLink } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <h1 className="heading">ZARA</h1>

      <nav className="navbar">
        <ul>
          <li><NavLink to="/men">Men</NavLink></li>
          <li><NavLink to="/women">Women</NavLink></li>
          <li><NavLink to="/kids">Kids</NavLink></li>
          <li><NavLink to="/perfume">Perfume</NavLink></li>
        </ul>
      </nav>

      <ul className="loginul">
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/help">Help</NavLink></li>
        <li><NavLink to="/bag">Shopping Bag</NavLink></li>
      </ul>

      <div className="searchdiv">
        <div className="searchdivinside">
          <input className="inputsearch" type="text" placeholder="Search" />
        </div>
      </div>

      <div className="div1"></div>
      <div className="div2"></div>
      <div className="div3"></div>
      <div className="div4"></div>
    </div>
  );
};

export default MainPage;