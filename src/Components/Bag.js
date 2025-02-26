import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { datatransfer } from '../App';
import data from './Api';

const Bag = () => {
  const { itemsSet, setItemsSet } = useContext(datatransfer);

  const decreaseValueByOne = (map, key) => {
    if (map.has(key)) {
      const currentValue = map.get(key);
      if (currentValue > 0) {
        map.set(key, currentValue - 1);
        setItemsSet(new Map(map));
      }
    }
  };

  const increaseValueByOne = (map, key) => {
    if (map.has(key)) {
      const currentValue = map.get(key);
      map.set(key, currentValue + 1);
      setItemsSet(new Map(map));
    }
  };

  const calculateTotal = () => {
    let total = 0;
    data.forEach((item) => {
      const quantity = itemsSet.get(item.id) || 0;
      total += item.price * quantity;
    });
    return total.toFixed(2);
  };

  return (
    <>
      <ul className="loginul">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/bag">Shopping Bag</NavLink></li>
      </ul>

      <h1 className="heading">ZARA</h1>
      <div className="fav">
        <div className="first">
          <button onClick={() => console.log('Shopping Bag clicked')}>Shopping Bag</button>
        </div>
        <div className="sec">
          <button onClick={() => console.log('Favourites clicked')}>Favourites</button>
        </div>
      </div>

      <div className="cart">
        <h2>Your Cart</h2>
        {
          data.map((item) => {
            const quantity = itemsSet.get(item.id) || 0;

            return quantity > 0 && (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">&#8377;{item.price}</span>
                </div>
                <div className="item-quantity">
                  <button className="quantity-btn" onClick={() => decreaseValueByOne(itemsSet, item.id)}>-</button>
                  <span className="quantity">{quantity}</span>
                  <button className="quantity-btn" onClick={() => increaseValueByOne(itemsSet, item.id)}>+</button>
                </div>
                <span className="item-total">&#8377;{(item.price * quantity).toFixed(2)}</span>
              </div>
            );
          })
        }

        <div className="total-amount">
          {
            itemsSet.size === 0
              ?
              <></>
              :
              <h3 className='total'>Total: &#8377;{calculateTotal()}</h3>
          }
        </div>
      </div>
    </>
  );
};

export default Bag;
