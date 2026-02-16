import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaUserTie, FaGlobe } from "react-icons/fa";
import profilephoto from "../../public/profilephoto.jpg";

function PortfolioCard() {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Intro Text */}
        <div className="w-full md:w-7/12 space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-light-text dark:text-dark-text leading-tight">
            Solopreneur, Software Engineer
            <br />
            <span className="text-primary">& IT Student</span>, shaping solutions with open-source.
          </h1>
          
          <div className="text-lg text-light-muted dark:text-dark-muted space-y-4 leading-relaxed">
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
              <strong className="text-light-text dark:text-dark-text">Ebyte Code Labs</strong>, 
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

            <p className="italic border-l-4 border-primary pl-4">
              "I believe in the power of learning—every project, every challenge is
              an opportunity to grow..."
            </p>
          </div>
        </div>

        {/* Right: Profile + Social Links */}
        <div className="w-full md:w-5/12 flex flex-col items-center mt-8 md:mt-0">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <img
              src={profilephoto}
              alt="Profile"
              className="relative w-64 h-auto rounded-lg shadow-2xl border-2 border-primary/50 rotate-3 group-hover:rotate-0 transition-all duration-500 ease-in-out object-cover"
            />
          </div>

          <div className="mt-10 flex flex-col w-full max-w-sm gap-4">
            <SocialLink 
              href="https://x.com/EbediMeleck?s=09" 
              icon={<FaXTwitter />} 
              label="Follow on X" 
            />
            <SocialLink 
              href="https://github.com/ISONIC0788" 
              icon={<FaGithub />} 
              label="Follow on GitHub" 
            />
            <SocialLink 
              href="https://www.linkedin.com/in/ituze-agacyo-ebed-meleck-65a13b2b7/" 
              icon={<FaLinkedin />} 
              label="Follow on LinkedIn" 
            />

            <a
              href="mailto:ituzeebedi12@gmail.com"
              className="flex items-center gap-3 px-4 py-4 border-t border-gray-200 dark:border-gray-700 text-light-text dark:text-dark-text hover:text-primary transition-colors"
            >
              <span className="text-xl">📧</span> ituzeebedi12@gmail.com
            </a>

            <div className="mt-2 pt-4 border-t border-gray-200 dark:border-gray-700 w-full text-left">
              <div className="flex items-center gap-2 mb-2 text-primary">
                <FaUserTie className="text-xl" />
                <span className="font-bold">My Mentor: Karinganire Anathole</span>
              </div>
              <p className="text-sm text-light-muted dark:text-dark-muted mb-3 pl-7">
                Guided by vision and excellence — check out my mentor’s work that inspires my journey.
              </p>
              
              <div className="flex flex-col gap-2 pl-7">
                <a
                  href="https://karinganire-anathole.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-light-text dark:text-dark-text hover:text-primary transition-colors"
                >
                  <FaGlobe /> Personal Website
                </a>
                <a
                  href="https://www.linkedin.com/in/karinganire-anathole"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-light-text dark:text-dark-text hover:text-primary transition-colors"
                >
                  <FaLinkedin /> LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Component for consistency
const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-dark-card rounded-lg hover:bg-gray-100 dark:hover:bg-[#333] hover:translate-x-1 transition-all duration-300 text-light-text dark:text-dark-text shadow-sm"
  >
    <span className="text-xl text-primary">{icon}</span>
    <span className="font-medium">{label}</span>
  </a>
);

export default PortfolioCard;