import React, { useState } from "react";
import "../styles/navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = ["Home", "About", "Articles", "Projects"];

  return (
    <div className="container-fluid py-3">
      <div className="d-flex justify-content-around align-items-center flex-wrap">
        {/* Left: Logo and Hamburger */}
        <div>
        <span className="logo">Ebedi</span>

             <button
               className="d-lg-none hamburger-btn"
               onClick={toggleMenu}
                aria-label="Toggle menu"
                     >
                  ☰
             </button>
        </div>


        <div className="d-flex align-items-center gap-3">
         
        </div>

        {/* Navigation */}
        <div
          className={`nav-container rounded-pill shadow-sm  p-2 px-3 ${
            isMenuOpen ? "d-flex flex-column align-item-center text-center w-100 b-drak " : "d-none"
          } d-lg-flex`}
        >
          {navLinks.map((link) => (
            <span
              key={link}
              className={`nav-link-item px-3 ${
                active === link ? "active" : ""
              }`}
              onClick={() => {
                setActive(link);
                setIsMenuOpen(false); // Close menu on click (mobile)
              }}
            >
              {link}
            </span>
          ))}
        </div>

        {/* Mode Toggle on the Right */}
        <button className="mode-toggle-btn ms-3" onClick={toggleMode}>
          {darkMode ? "🌙" : "🌞"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
