import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Users from "./Components/Users";
// import {BrowserRouter, Routes, Route} from "react-router-dom";

const Index = () => {
  return (
    <div>

      <Navbar />
      {/* <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/Menu" element={<Menu />}/>
          <Route path="/products" element={<Products />} />
          <Route path="/review" element={<Users />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </BrowserRouter> */}

      <Home />

      <About />

      <Menu />

      <Products />

      <Users />

      <Contact />

    </div>
  );
};

export default Index;
