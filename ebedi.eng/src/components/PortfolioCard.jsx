import React from "react";
// import "./PortfolioCard.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6'; 
import { FaUserTie  , FaGlobe} from "react-icons/fa";
import profilephoto from '../../public/profilephoto.jpg'

function PortfolioCard() {
  return (
    <div className="portfolio-card container py-5">
      <div className="row align-items-center">
        
        {/* Left: Intro Text */}
        <div className="col-md-7">
          <h1 className="fw-bold title-text">
            Solopreneur , Software Engineer 
            <br />
            & IT Student,
            shaping solutions with open-source.
          </h1>
          <p className="mt-3 lead-text">
          Ebedi Meleck is a passionate and visionary software developer from Rwanda,
           dedicated to solving real-world problems through technology. As a student of 
           Information Technology, he is deeply focused on innovation, community impact,
            and digital empowerment.
             {/* His mission is clear: connect skills to opportunity—helping fresh
             graduates, freelancers, and students gain practical experience and jobs through platforms he */}
          </p>
          <p className="mt-3 lead-text">
            Every line of code I write is inspired by a deeper mission: to create
            solutions that leave a lasting impact on my community...
          </p>

          <p className="mt-3 lead-text">
          He’s the founder of <strong>Ebyte Code Labs</strong>, a tech hub that transforms ideas into meaningful solutions—whether
           it's job-matching platforms, digital automation tools, or booking systems. His projects aren’t just assignments—they’re
            stepping stones for real impact.

          </p>
          <p className="mt-3 lead-text">
          With a growing command of languages like Java, JavaScript (React, Vite), Node.js, and more, Meleck blends clean code with thoughtful UI design, often 
          incorporating light/dark mode, animations, and responsive layouts. He’s not only a coder, but also a <strong>problem-solver with purpose</strong> 
          </p>
          <p className="mt-3 lead-text">
          Whether building systems like the Driver Trip Log , Car washing Booking app, or contributing to open-source, Meleck’s journey is marked by learning, building, and lifting others as he grows
          </p>

          <p className="lead-text">
            I believe in the power of learning—every project, every challenge is an
            opportunity to grow...
          </p>
        </div>

        {/* Right: Profile + Social Links */}
        <div className="col-md-5 text-center mt-4 mt-md-0">
          <img
            src={profilephoto}
            alt="Profile"
            className=" rounded profile-img bounce-on-load animated-shadow"
            
            style={{ transform: "rotate(4deg)" }}
          />

          <div className="mt-5 d-flex flex-column gap-3 align-items-start social-links">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="px-4">
            <FaXTwitter className="me-2"/> Follow on X
            </a>
            <a href="https://github.com/ISONIC0788" target="_blank" rel="noopener noreferrer" className="px-4">
            <FaGithub className="me-2"/>
              Follow on GitHub
            </a>
            <a href="https://www.linkedin.com/in/ituze-agacyo-ebed-meleck-65a13b2b7/" target="_blank" rel="noopener noreferrer" className="px-4">
            <FaLinkedin className="me-2"/> Follow on LinkedIn
            </a>
            
            <a href="mailto:ituzeebedi12@gmail.com " className="mt-3 border-top px-4 py-4">
              <i className="bi bi-envelope me-2"></i> ituzeebedi12@gmail.com
            </a>

            <a 
  href="https://www.linkedin.com/in/mentor-profile" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="mt-3 border-top px-4 py-4 w-100 text-start"
>
 <FaUserTie className="me-2" />  My Mentor: <strong className="fw-bold">karinganire Anathole</strong> <br />
  
  <span className="lead-text d-block mt-2">
    Guided by vision and excellence — check out my mentor’s work that inspires my journey.
  </span>

  {/* Mentor Links */}
  <div className="mt-3 d-flex flex-column gap-2">
    <a 
      href="https://karinganire-anathole.netlify.app/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-decoration-none"
    >
      <FaGlobe className="me-2"/> Personal Website
    </a>
    <a 
      href="https://www.linkedin.com/in/karinganire-anathole" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-decoration-none"
    >
        <FaLinkedin className="me-2"/>
       LinkedIn Profile
    </a>
  </div>
</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default PortfolioCard;
