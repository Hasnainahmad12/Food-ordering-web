import React, { useState } from "react";
import {
  FaTimes,
  FaBars,
  FaMoon,
  FaSun,
  FaSearch,
  FaHamburger,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [icon, seticon] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">
        <FaHamburger />
      </div>

      {/*List*/}
      <ul
        className={icon ? "menu active" : "menu"}
        onclick={() => seticon(!icon)}
      >
        {/* <li><Link to="/" onClick={() => seticon(!icon)}>Home</Link></li> 
        <li><Link to="/about" onClick={() => seticon(!icon)}>About</Link></li>
        <li><Link to="/menu" onClick={() => seticon(!icon)}>Menu</Link></li>
       <li><Link to="/products" onClick={() => seticon(!icon)}>Products</Link></li>
        <li><Link to="/review" onClick={() => seticon(!icon)}>Review</Link></li>
        <li><Link to="/contacts" onClick={() => seticon(!icon)}>Contacts</Link></li>  */}

        <li onClick={() => seticon(!icon)}>Home</li>
        <li onClick={() => seticon(!icon)}>About</li>
        <li onClick={() => seticon(!icon)}>Menu</li>
        <li onClick={() => seticon(!icon)}>Products</li>
        <li onClick={() => seticon(!icon)}>Review</li>
        <li onClick={() => seticon(!icon)}>Contacts</li>
      </ul>

      <div className="nav__icons">
        <FaMoon />
        <FaSun className="hover:text-orange-400" />
        <FaSearch className="h-5 w-10 hover:text-white" />
      </div>

      <div className="menu__icon">
        <span className="navbar__icon" onClick={() => seticon(!icon)}>
          {!icon ? <FaBars /> : <FaTimes />}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
