// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MainPage from "./Components/MainPage";
// import Login from "./Components/Login";
// import Signup from "./Components/Signup";
// import Men from "./Components/Men";
// import Women from "./Components/Women";
// import Perfume from "./Components/Perfume";
// import Kids from "./Components/Kids";
// import Bag from "./Components/Bag";
// import Help from "./Components/Help";
// import { createContext, useState } from "react";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// const datatransfer = createContext();
// function App() {
//   const [itemsSet, setItemsSet] = useState(new Set());

//   const CartItems = (id) => {
//     setItemsSet(prevSet => new Set(prevSet).add(id));
//     toast.success('Added successfully', {
//       position: "bottom-center",
//       autoClose: 3000
//   });
//   };
//   return (
//     <>
//       <datatransfer.Provider value={{ CartItems, itemsSet }}>

//         <Router>
//           <Routes>
//             <Route exact path="/" element={<MainPage />}></Route>
//             <Route exact path="/login" element={<Login />}></Route>
//             <Route exact path="/signup" element={<Signup />}></Route>
//             <Route exact path="/men" element={<Men />}></Route>
//             <Route exact path="/women" element={<Women />}></Route>
//             <Route exact path="/kids" element={<Kids />}></Route>
//             <Route exact path="/perfume" element={<Perfume />}></Route>
//             <Route exact path="/bag" element={<Bag />}></Route>
//             <Route exact path="/help" element={<Help />}></Route>
//           </Routes>
//         </Router>

//       </datatransfer.Provider>
//     </>
//   );
// }

// export default App;

// export { datatransfer }


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Perfume from "./Components/Perfume";
import Kids from "./Components/Kids";
import Bag from "./Components/Bag";
import Help from "./Components/Help";
import { createContext, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const datatransfer = createContext();

function App() {
  const [itemsSet, setItemsSet] = useState(new Map());

  const CartItems = (id) => {
    setItemsSet(prevMap => {
      const newMap = new Map(prevMap);

      if (newMap.has(id)) {
        newMap.set(id, newMap.get(id) + 1);
      } else {
        newMap.set(id, 1);
      }
      return newMap;
    });

    toast.success('Added successfully', {
      position: "bottom-center",
      autoClose: 3000,
    });
  };

  return (
    <>
      <datatransfer.Provider value={{ CartItems, itemsSet,setItemsSet }}>
        <Router>
          <Routes>
            <Route exact path="/" element={<MainPage />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
            <Route exact path="/men" element={<Men />}></Route>
            <Route exact path="/women" element={<Women />}></Route>
            <Route exact path="/kids" element={<Kids />}></Route>
            <Route exact path="/perfume" element={<Perfume />}></Route>
            <Route exact path="/bag" element={<Bag />}></Route>
            <Route exact path="/help" element={<Help />}></Route>
          </Routes>
        </Router>
      </datatransfer.Provider>
    </>
  );
}

export default App;
export { datatransfer };
