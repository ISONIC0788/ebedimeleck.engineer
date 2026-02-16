import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const FooterLink = [
    { name: "About", href: "/about" },
    { name: "Articles", href: "/articles" },
    { name: "Projects", href: "/projects" },
    { name: "eMarc.ai", href: "/eMarc.ai" }
  ];

  const currentYear = new Date().getFullYear();
  const developerName = "ITUZE AGACYO Ebed Meleck";

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
    <footer className="border-t border-gray-200 dark:border-gray-700 bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Links & Time */}
        <div className="flex items-center gap-6 text-sm">
          {FooterLink.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-light-text dark:text-dark-text hover:text-primary transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
          
          <span className="font-bold text-light-text dark:text-dark-text ml-4 flex items-center">
            {hours}
            <span className={`mx-1 text-primary transition-opacity duration-200 ${colon ? 'opacity-100' : 'opacity-0'}`}>:</span>
            {minutes}
          </span>
        </div>

        {/* Copyright */}
        <div className="text-sm text-light-muted dark:text-dark-muted">
          &copy; {currentYear} {developerName} All rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;