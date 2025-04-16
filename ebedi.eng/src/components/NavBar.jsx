import React, { useState } from "react";
import "../styles/navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuIcon , setIsMenuIcon] =useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  const toggleMenu = ()=>{
    setIsMenuIcon(!isMenuIcon);
  }

  const navLinks = ["Home", "About", "Articles", "Projects"];

  return (
    <div className="container-fluid py-3  d-flex justify-content-center">
        {/*  */}
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <div className="d-flex align-items-center gap-3">
            <span className="logo">Ebedi</span>
            <div className="nav-container d-flex justify-content-center align-items-center rounded-pill shadow-sm p-2 px-3">
          {navLinks.map((link) => (
            <span
              key={link}
              className={`nav-link-item px-3 ${active === link ? "active" : ""}`}
              onClick={() => setActive(link)}
            >
              {link}
            </span>
          ))}
        </div>
        <button className="mode-toggle-btn ms-3" onClick={toggleMode}>
          {darkMode ? "🌙" : "🌞"}
        </button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
