// src/components/Navbar.jsx
import React from "react";
import {Link} from "react-router-dom"
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo"><Link to="/">SoftLeaves</Link></h1>
      <ul className="nav-links">
        <li><Link to="memorygame">Memory Game</Link></li>
        <li><Link to="puzzle">Puzzle</Link></li>
        <li><Link to="sensorymode">Sensory Mode</Link></li>
      </ul>
    </nav>
  );
}