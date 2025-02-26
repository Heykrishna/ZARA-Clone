import React from 'react';

const ShoppingBag = () => {
  return (
    <div className="shopping-bag-container">
      <h2 className="shopping-bag-header">Shopping Bag</h2>
      <div className="cart-item">
        <img src="path/to/image.jpg" alt="Item" />
        <div className="item-details">
          <div className="item-name">Item Name</div>
          <div className="item-price">$20.00</div>
          <div className="item-quantity">
            <button className="quantity-btn">-</button>
            <div className="quantity">1</div>
            <button className="quantity-btn">+</button>
          </div>
          <div className="item-total">$20.00</div>
        </div>
      </div>
      <div className="total">Total: $20.00</div>
    </div>
  );
};

export default ShoppingBag;