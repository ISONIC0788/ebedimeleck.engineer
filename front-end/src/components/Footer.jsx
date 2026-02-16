import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import DottedMapBackground from './DottedMapBackground';

function Footer() {
  const FooterLink = [
    { name: "About", href: "/about" },
    { name: "Articles", href: "/articles" },
    { name: "Projects", href: "/projects" },
    { name: "eMarc.ai", href: "/eMarc.ai" }
  ];

  const currentYear = new Date().getFullYear();
  const developerName = "ITUZE AGACYO Ebed Meleck";

  // --- Clock Logic ---
  const [time, setTime] = useState(new Date());
  const [colon, setColon] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      setColon((prev) => !prev);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return { hours, minutes };
  };
  const { hours, minutes } = formatTime(time);

  return (
    <footer className="bg-black text-white">
      
      {/* 1. GET IN TOUCH SECTION (with Dotted Map Background) */}
      <div className="relative py-24 px-6 overflow-hidden flex flex-col items-center justify-center text-center min-h-[500px]">
        
        {/* Background Layer */}
        <DottedMapBackground />

        {/* Content Layer (Z-10 to sit above map) */}
        <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight uppercase">
              Get In Touch
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
              You can reach out to me anytime by clicking on the bottom right corner button to view my contact info or, click the button below. My inbox is always open, I will try my best to get back to you as soon as possible.
            </p>
            
            <a 
              href="mailto:ituzeebedi12@gmail.com"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:bg-gray-100 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <FaEnvelope /> Send an email
            </a>
        </div>
      </div>

      {/* 2. FOOTER LINKS BAR (Bottom) */}
      <div className="border-t border-gray-900 bg-[#050505] pt-10 pb-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left: Links & Clock */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-sm md:text-base">
            {FooterLink.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-400 hover:text-white transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Live Clock Pill */}
            <span className="font-bold text-white ml-4 flex items-center bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
              {hours}
              <span className={`mx-0.5 text-[#00bfa6] transition-opacity duration-200 ${colon ? 'opacity-100' : 'opacity-0'}`}>:</span>
              {minutes}
              <span className="text-[10px] ml-1.5 text-gray-500 font-mono">CAT</span>
            </span>
          </div>

          {/* Right: Copyright */}
          <div className="text-sm text-gray-600 text-center md:text-right">
            &copy; {currentYear} <span className="text-gray-400 font-medium">{developerName}</span>. <br className="hidden md:block"/>All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;