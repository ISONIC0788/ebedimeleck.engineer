import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import profilephoto from "../../public/profilephoto.jpg"; 

const Navbar = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Initialize Theme
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

  // Mobile Menu Animation Variants
  const menuVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      scale: 0.95,
      transition: { duration: 0.15, ease: "easeIn" }
    }
  };

  return (
    // Outer Wrapper
    <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
      
      {/* Main Navbar Entrance */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-5xl bg-[#0a0a0a] border border-white/10 rounded-full px-2 py-2 flex items-center justify-between shadow-2xl relative"
      >
        
        {/* LEFT: Profile & Name */}
        <div className="flex items-center gap-3 pl-2">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="relative w-10 h-10 overflow-hidden rounded-xl border border-white/20"
                >
                    <img 
                        src={profilephoto} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                <span className="text-white font-bold tracking-wide text-sm uppercase hidden sm:block">
                    Ebedi Meleck
                </span>
            </Link>
        </div>

        {/* CENTER: Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
           {navLinks.map((link) => {
             const isActive = link.name === "Home" 
                ? location.pathname === "/" 
                : location.pathname.startsWith(link.path);

             return (
               <Link
                 key={link.name}
                 to={link.path}
                 className="relative px-2 py-1"
               >
                 {/* Text with Hover Effect */}
                 <span className={`relative z-10 text-sm font-medium transition-colors duration-300 ${isActive ? "text-white" : "text-gray-400 hover:text-white"}`}>
                   {link.name}
                 </span>

                 {/* Active State Indicator (Desktop) */}
                 {isActive && (
                   <motion.div 
                     layoutId="activeNav"
                     className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full mx-2"
                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
                   />
                 )}
               </Link>
             );
           })}
        </div>

        {/* RIGHT: Resume & Actions */}
        <div className="flex items-center gap-2 pr-1">
            
            {/* Theme Toggle */}
            <motion.button 
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMode}
                className="p-2 rounded-full text-gray-400 hover:text-white transition-colors"
                title="Toggle Theme"
            >
                {darkMode ? <FaMoon size={14}/> : <FaSun size={14}/>}
            </motion.button>

            {/* Resume Button */}
            <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/file/d/1Q2bWhvHSbnpE6l02ih23k0zASy2eGb9y/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors"
            >
                Resume
            </motion.a>

            {/* Mobile Hamburger */}
            <motion.button
                whileTap={{ scale: 0.9 }}
                className="md:hidden text-white p-2 ml-1"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </motion.button>
        </div>

        {/* 4. Mobile Dropdown Menu with Active State */}
        <AnimatePresence>
         {isMenuOpen && (
            <motion.div 
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute top-full left-0 right-0 mt-3 bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 flex flex-col gap-2 shadow-xl md:hidden overflow-hidden"
            >
                {navLinks.map((link) => {
                    // Check if link is active
                    const isActive = link.name === "Home" 
                        ? location.pathname === "/" 
                        : location.pathname.startsWith(link.path);
                    
                    return (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <motion.div
                                whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.05)" }}
                                className={`px-4 py-3 rounded-xl font-medium transition-all ${
                                    isActive 
                                    ? "bg-white/10 text-white border border-white/5" 
                                    : "text-gray-400 hover:text-white"
                                }`}
                            >
                                {link.name}
                            </motion.div>
                        </Link>
                    );
                })}
            </motion.div>
         )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;