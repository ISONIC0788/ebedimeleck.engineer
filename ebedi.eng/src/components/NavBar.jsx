import React, { useState, useEffect } from "react";
import "../styles/navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState("Home");
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check for system's theme preference or use saved preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      // If there's a saved theme in localStorage, use that
      setDarkMode(savedTheme === "dark");
      if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
    } else {
      // If no saved theme, use system preference
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(systemTheme);
      if (systemTheme) {
        document.body.classList.add("dark-mode");
      }
    }
  }, []);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
    // Save the user's theme preference in localStorage
    localStorage.setItem("theme", darkMode ? "light" : "dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = ["Home", "About", "Articles", "Projects"];

  const getPath = (link) => (link === navLinks ? "/" : `/${link.toLowerCase()}`);

  const currentPath = location.pathname;

  return (
    <div className="container-fluid py-3">
      <div className="d-flex justify-content-around align-items-center flex-wrap">
        {/* Left: Logo and Hamburger */}
        <div>
          <span className="logo"> &lt;/ebedi&gt;</span>

          <button
            className="d-lg-none px-5 hamburger-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Navigation */}
        <div
          className={`nav-container rounded-pill shadow-sm p-2 px-3 ${
            isMenuOpen ? "d-flex flex-column align-item-center text-center w-100 b-drak" : "d-none"
          } d-lg-flex`}
        >
          {navLinks.map((link) => {
            const path = getPath(link);

            return (
              <Link
                key={link}
                to={path}
                className={`nav-link-item px-3 text-decoration-none ${
                  active === link ? "active" : ""
                }`}
                onClick={() => {
                  setActive(link);
                  setIsMenuOpen(false); // Close menu on click (mobile)
                }}
              >
                {link}
              </Link>
            );
          })}
        </div>

        {/* Mode Toggle on the Right */}
        <button className="mode-toggle-btn ms-3 " onClick={toggleMode}>
          {darkMode ? (
            <i className="bi bi-moon-fill"></i>
          ) : (
            <i className="bi bi-sun-fill"></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
