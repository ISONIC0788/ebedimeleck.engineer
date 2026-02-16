import React from "react";
import { FaUserTie, FaGlobe, FaLinkedin } from "react-icons/fa";
import profilephoto from "../../public/profilephoto.jpg"; 
import SkillsGrid from "./SkillsGrid"; // Centralized skills component

const AboutSection = () => {
  return (
    <section className="bg-black min-h-screen text-white py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* --- TOP SECTION: Bio & Profile --- */}
        <div className="flex flex-col md:flex-row items-start gap-12 mb-24">
          
          {/* Left: Intro Text */}
          <div className="w-full md:w-7/12 space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Solopreneur, Software Engineer
              <br />
              <span className="text-primary">& IT Student</span>, shaping solutions with open-source.
            </h1>
            
            <div className="text-lg text-gray-400 space-y-4 leading-relaxed">
              <p>
                Ebedi Meleck is a passionate and visionary software developer from
                Rwanda, dedicated to solving real-world problems through technology.
                As a student of Information Technology, he is deeply focused on
                innovation, community impact, and digital empowerment.
              </p>
              <p>
                Every line of code I write is inspired by a deeper mission: to
                create solutions that leave a lasting impact on my community...
              </p>

              <p>
                He's currently Building his empire in technology called{" "}
                <strong className="text-white">Ebyte Code Labs</strong>, 
                a tech hub that transforms ideas into meaningful solutions—whether it's job-matching platforms,
                digital automation tools, or booking systems. His projects aren’t
                just assignments—they’re stepping stones for real impact.
              </p>
              <p>
                With a growing command of languages like Java, JavaScript (React,
                Vite), Node.js, and more, Meleck blends clean code with thoughtful
                UI design, often incorporating light/dark mode, animations, and
                responsive layouts. He’s not only a coder, but also a{" "}
                <strong className="text-primary">problem-solver with purpose.</strong>{" "}
                Code with Purpose. Create with Impact. Shaping Tomorrow One Line of Code at a Time.
              </p>
              <p>
                Whether building systems like the Driver Trip Log, Car washing
                Booking app, or contributing to open-source, Meleck’s journey is
                marked by learning, building, and lifting others as he grows.
              </p>

              <p className="italic border-l-4 border-primary pl-4 text-gray-300">
                "I believe in the power of learning—every project, every challenge is
                an opportunity to grow..."
              </p>
            </div>
          </div>

          {/* Right: Profile + Mentor */}
          <div className="w-full md:w-5/12 flex flex-col items-center mt-8 md:mt-0 sticky top-24">
            {/* Profile Image with Glow */}
            <div className="relative group mb-10">
              <div className="absolute inset-0 bg-primary rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <img
                src={profilephoto}
                alt="Profile"
                className="relative w-72 h-auto rounded-lg shadow-2xl border-2 border-primary/50 rotate-3 group-hover:rotate-0 transition-all duration-500 ease-in-out object-cover"
              />
            </div>

            <div className="flex flex-col w-full max-w-sm gap-4">
              {/* Mentor Section */}
              <div className="pt-4 border-t border-gray-800 w-full text-left">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <FaUserTie className="text-xl" />
                  <span className="font-bold">My Mentor: Karinganire Anathole</span>
                </div>
                <p className="text-sm text-gray-500 mb-3 pl-7">
                  Guided by vision and excellence — check out my mentor’s work that inspires my journey.
                </p>
                
                <div className="flex flex-col gap-2 pl-7">
                  <a
                    href="https://karinganire-anathole.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGlobe /> Personal Website
                  </a>
                  <a
                    href="https://www.linkedin.com/in/karinganire-anathole"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <FaLinkedin /> LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION: Tools and Platforms --- */}
        <div className="w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16 text-gray-200 border-t border-gray-900 pt-16 uppercase tracking-wide">
            Tools and Platforms
          </h2>

          {/* Replaced manual mapping with centralized grid component */}
          <SkillsGrid alignment="center" />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;