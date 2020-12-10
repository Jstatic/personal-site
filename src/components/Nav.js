import React from "react";
import {
  Link
} from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h1 className="brand">Brand</h1>
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>

  );
}

export default Nav;
