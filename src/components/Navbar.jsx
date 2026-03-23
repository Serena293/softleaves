// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <h1 className="logo">
        <Link to="/">SoftLeaves</Link>
      </h1>
      <button
        className="hamburger-btn"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

  <ul className={`nav-links ${isOpen ? "open" : ""}`}>
  <li><Link to="memorygame" onClick={() => setIsOpen(false)}>Memory Game</Link></li>
  <li><Link to="puzzle" onClick={() => setIsOpen(false)}>Puzzle</Link></li>
  <li><Link to="sensorymode" onClick={() => setIsOpen(false)}>Sensory Mode</Link></li>
</ul>
    </nav>
  );
}
