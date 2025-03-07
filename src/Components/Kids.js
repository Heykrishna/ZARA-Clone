import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import data from './Api';
import { datatransfer } from '../App';
import { useNavigate } from "react-router-dom";

const Kids = () => {
  const [cartCount, setCartCount] = useState(0);
  const { CartItems, itemsSet } = useContext(datatransfer);

  const navigate = useNavigate();
  const gotobag = () => {
    navigate("/bag");
  };

  useEffect(() => {
  }, [itemsSet]);

  const handleAddToCart = (productId) => {
    CartItems(productId);
    setCartCount(cartCount + 1);
  };

  // Filter products to show only items from the "kids" category
  const kidsProducts = data.filter(product => product.category === "kids");

  return (
    <div className="showCart">
      <div className="backG">
        <nav className="categoryNAV">
          <ul>
            <li><NavLink to="/men">Men</NavLink></li>
            <li><NavLink to="/women">Women</NavLink></li>
            <li><NavLink to="/kids">Kids</NavLink></li>
            <li><NavLink to="/perfume">Perfume</NavLink></li>
          </ul>
        </nav>
        <ul className="loginul">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/bag">Shopping Bag</NavLink></li>
          <li>{itemsSet.size}</li>
        </ul>
        <div className="cart"></div>
        <div className="container">
          {kidsProducts.map((product, index) => (
            <div key={index}>
              <img className="categoryimg" src={product.image} alt="not found" />
              <h4 className="categoryh4">{product.name}</h4>
              <h4 className="price">
                <span className="prevprice">&#8377;{product.prevPrice}</span> &#8377;{product.price} <span className="discount">{product.discount}</span>
                {
                  !itemsSet.has(product.id)
                    ? <span><button className="cartadd" onClick={() => handleAddToCart(product.id)}>Add to cart</button></span>
                    : <span><button onClick={gotobag} className="cartadd">Go to cart</button></span>
                }
              </h4>
            </div>
          ))}
        </div>

        <footer>
          <div className="footerdiv">
            <h1 className="footerZARA">ZARA</h1>
            <ul className="footerul">
              <li><a href="https://www.instagram.com/zara/">Instagram</a></li>
              <li><NavLink to="/help">Customer Support</NavLink></li>
              <li><a href="https://www.whatshot.in/chandigarh/zara-elante-mall-industrial-area-phase-1-chandigarh-v-156206">Find a Store</a></li>
              <li><NavLink to="/faq">FAQs</NavLink></li>
            </ul>
            <div className="subscribe-div">
              <input id="subscribe" type="email" placeholder="Enter your email to subscribe" />
              <button type="submit">Subscribe</button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Kids;
