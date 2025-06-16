import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Policy from "./pages/Policy";
import OrderForm from "./components/orderForm/orderForm";
import { Checkout } from "./pages/checkout";
import { createContext, useState } from "react";
export const cartContext = createContext();
function App() {
  let [cartState,setCartState]=useState(
JSON.parse(localStorage.getItem("cart") || "[]"),
  )
  return (
    <cartContext.Provider value={{cartState,setCartState}}>

    <Router basename="/Kurundu">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/checkout" element={<Checkout></Checkout>} />
      </Routes>

      <Footer />
    </Router>
    </cartContext.Provider>
  );
}

export default App;
