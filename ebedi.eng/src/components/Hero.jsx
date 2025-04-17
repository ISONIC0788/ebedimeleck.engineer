import React from "react";
// import "../styles/hero.scss";
import '../styles/navbar.css'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-section py-5">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center text-white">
        <img
          src="/profile.jpg" // Replace with your image path
          alt="Profile"
          className="rounded-circle hero-img mb-4 mb-md-0"
        />
        <div className="ms-md-5 text-center text-md-start">
          <h1 className="fw-bold mb-3 title-name">
            Software Engineer, <br />
            Solopreneur, and Open-source enthusiast.
          </h1>
          <p className="lead">
            I'm Ebedi Meleck, a software engineer passionate about creating and sharing. I love building software,
            writing insightful articles, and passing on my knowledge.
          </p>

          <div className="social-icons mt-4">
            <a href="#"><FaTwitter size={20} /></a>
            <a href="#"><FaGithub size={20} /></a>
            <a href="#"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
