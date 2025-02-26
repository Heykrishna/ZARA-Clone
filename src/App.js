import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Help from "./Components/Help";
import ShoppingBag from "./Components/ShoppingBag";
import Bag from "./Components/Bag";

// Create a context for data transfer
export const datatransfer = createContext();

const App = () => {
  const [itemsSet, setItemsSet] = useState(new Map());

  return (
    <datatransfer.Provider value={{ itemsSet, setItemsSet }}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/help" element={<Help />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/shoppingbag" element={<ShoppingBag />} />
        </Routes>
      </Router>
    </datatransfer.Provider>
  );
};

export default App;
