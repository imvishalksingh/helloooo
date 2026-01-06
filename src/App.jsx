import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About  from "./Pages/About"
import Product from "./Pages/Product";
import ContactUs from"./Pages/ContactUs";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
<Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
      <Footer />
    </Router>
   
  );

};

export default App;
