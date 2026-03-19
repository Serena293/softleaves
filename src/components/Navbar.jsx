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
        <li><a href="#sequences">Sequences</a></li>
        <li><a href="#sensory">Sensory Mode</a></li>
      </ul>
    </nav>
  );
}