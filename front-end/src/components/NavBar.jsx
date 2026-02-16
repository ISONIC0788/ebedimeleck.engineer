import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import profilephoto from "../../public/profilephoto.jpg"; // Using the same image as Hero section

const Navbar = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Initialize Theme (Keeping your existing logic)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && systemTheme)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Articles", path: "/articles" },
    { name: "Projects", path: "/projects" },
    { name: "eMarc.ai", path: "/eMarc.ai" },
  ];

  return (
    // Outer Wrapper for centering the floating pill
    <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
      
      {/* The Floating Pill Container */}
      <nav className="w-full max-w-5xl bg-[#0a0a0a] border border-white/10 rounded-full px-2 py-2 flex items-center justify-between shadow-2xl relative">
        
        {/* LEFT: Profile & Name */}
        <div className="flex items-center gap-3 pl-2">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-white/20">
                    <img 
                        src={profilephoto} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Name - Hidden on very small screens */}
                <span className="text-white font-bold tracking-wide text-sm uppercase hidden sm:block">
                    Ebedi Meleck
                </span>
            </Link>
        </div>

        {/* CENTER: Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
           {navLinks.map((link) => {
             // Logic to determine active state
             const isActive = link.name === "Home" 
                ? location.pathname === "/" 
                : location.pathname.startsWith(link.path);

             return (
               <Link
                 key={link.name}
                 to={link.path}
                 className={`text-sm font-medium transition-colors duration-300 ${isActive ? "text-white" : "text-gray-400 hover:text-white"}`}
               >
                 {link.name}
               </Link>
             );
           })}
        </div>

        {/* RIGHT: Resume & Actions */}
        <div className="flex items-center gap-2 pr-1">
            
            {/* Theme Toggle (Subtle icon) */}
            <button 
                onClick={toggleMode}
                className="p-2 rounded-full text-gray-400 hover:text-white transition-colors"
                title="Toggle Theme"
            >
                {darkMode ? <FaMoon size={14}/> : <FaSun size={14}/>}
            </button>

            {/* Resume Button */}
            <a 
                href="https://drive.google.com/file/d/1Q2bWhvHSbnpE6l02ih23k0zASy2eGb9y/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors"
            >
                Resume
            </a>

            {/* Mobile Hamburger (Visible on small screens) */}
            <button
                className="md:hidden text-white p-2 ml-1"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
        </div>

        {/* Mobile Dropdown Menu */}
         {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-3 bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 flex flex-col gap-2 shadow-xl md:hidden animate-in fade-in slide-in-from-top-2">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className="text-gray-300 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl font-medium transition-all"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
         )}
      </nav>
    </div>
  );
};

export default Navbar;