import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import profilephoto from "../../public/profilephoto.jpg"; 
import MatrixBackground from "./MatrixBackground"; 

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-24 pb-10 px-4 overflow-hidden bg-black">
      
      {/* 1. Matrix Background (Sits behind everything) */}
      <MatrixBackground />

      {/* 2. Main Text Section */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Hello <span className="inline-block animate-wave origin-bottom-right">👋🏼</span>, I'm Ebedi Meleck
          <br />
          <span className="text-gray-400 text-2xl md:text-3xl mt-3 block font-medium">
            and I'm a Software Engineer
          </span>
        </h1>
      </div>

      {/* 3. Photo Container */}
      <div className="relative z-10 w-full max-w-lg">
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-2xl border border-white/20">
          
          <img
            src={profilephoto}
            alt="Ebedi Meleck"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          
          {/* Inner Shadow */}
          <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.3)] pointer-events-none"></div>
        </div>
      </div>

      {/* 4. Floating Social Dock */}
      <div className="fixed bottom-8 right-8 z-50 hidden md:flex flex-col gap-3 bg-zinc-900/90 backdrop-blur-md border border-white/10 p-2.5 rounded-full shadow-2xl">
        <SocialIcon href="https://www.linkedin.com/in/ituze-agacyo-ebed-meleck-65a13b2b7/" icon={<FaLinkedin size={20} />} label="LinkedIn" />
        <SocialIcon href="https://github.com/ISONIC0788" icon={<FaGithub size={20} />} label="GitHub" />
        <SocialIcon href="https://x.com/EbediMeleck" icon={<FaXTwitter size={20} />} label="Twitter" />
        <SocialIcon href="https://wa.me/YOUR_NUMBER" icon={<FaWhatsapp size={20} />} label="WhatsApp" />
        <SocialIcon href="mailto:ituzeebedi12@gmail.com" icon={<FaEnvelope size={20} />} label="Email" />
      </div>

    </section>
  );
};

// Helper Component
const SocialIcon = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2.5 bg-transparent hover:bg-white/20 rounded-full text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
    title={label}
  >
    {icon}
  </a>
);

export default Hero;