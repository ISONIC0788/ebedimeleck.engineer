import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link
import "../styles/navbar.css"; // Your styles
import { Card } from 'react-bootstrap';

function Footer() {
  const FooteLink = [
    { name: "About", href: "/about" },
    { name: "Articles", href: "/Articles" },
    { name: "Projects", href: "/Projects" }
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

  // formatting time
  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return { hours, minutes };
  };

  const { hours, minutes } = formatTime(time);

  return (
    <div>
      <footer className='footer border-top'>
        <div className='container d-flex justify-content-between align-items-center flex-wrap py-3'>
          {/* Left links */}
          <div>
            {
              FooteLink.map((link) => (
                <Link
                  key={link.name}  // Use Link instead of <a>
                  to={link.href}  // Use `to` instead of href
                  className="footer-link" // Optional class for styling
                >
                  {link.name}
                </Link>
              ))
            }
            <span className="fs-7 fw-bold ">
              {hours}
              <span
                className="mx-1 text-success shadow-lg fw-bold "
                style={{ opacity: colon ? 1 : 0 }}
              >
                :
              </span>
              {minutes}
            </span>
          </div>

          {/* Right */}
          <div className='text-end text-sm-start mt-2 mt-md-0 lead-text'>
            {/* Text-muted */}
            &copy; {currentYear} {developerName} All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
