import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import profilephoto from "../../public/profilephoto.jpg"; 

const Hero = () => {
  return (
    <section className="relative bg-black min-h-screen flex flex-col items-center justify-start pt-24 pb-10 px-4 overflow-hidden">
      
      {/* 1. Main Text Section */}
      <div className="text-center z-10 max-w-3xl mx-auto mb-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Hello <span className="inline-block animate-wave origin-bottom-right">👋🏼</span>, I'm Ebedi Meleck
          <br />
          <span className="text-gray-400 text-2xl md:text-3xl mt-3 block font-medium">
            and I'm a Software Engineer
          </span>
        </h1>
      </div>

      {/* 2. Photo Container (Minimized & Visible) */}
      <div className="w-full max-w-lg z-10">
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-2xl border border-white/20">
          
          {/* Removed heavy gradient and grayscale for maximum visibility */}
          <img
            src={profilephoto}
            alt="Ebedi Meleck"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          
          {/* Subtle inner border/shadow for depth without blocking the image */}
          <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.3)] pointer-events-none"></div>
        </div>
      </div>

      {/* 3. Floating Social Dock */}
      <div className="fixed bottom-8 right-8 z-50 hidden md:flex flex-col gap-3 bg-zinc-900/90 backdrop-blur-md border border-white/10 p-2.5 rounded-full shadow-2xl">
        <SocialIcon href="https://www.linkedin.com/in/ituze-agacyo-ebed-meleck-65a13b2b7/" icon={<FaLinkedin size={20} />} label="LinkedIn" />
        <SocialIcon href="https://github.com/ISONIC0788" icon={<FaGithub size={20} />} label="GitHub" />
        <SocialIcon href="https://x.com/EbediMeleck" icon={<FaXTwitter size={20} />} label="Twitter" />
        <SocialIcon href="https://wa.me/YOUR_NUMBER" icon={<FaWhatsapp size={20} />} label="WhatsApp" />
        <SocialIcon href="mailto:ituzeebedi12@gmail.com" icon={<FaEnvelope size={20} />} label="Email" />
      </div>

      {/* 4. Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
         <svg className="absolute top-12 left-10 w-24 h-24 text-gray-500" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <path d="M10 10 Q 50 50 90 10" strokeWidth="2" />
         </svg>
         <svg className="absolute bottom-24 right-20 w-32 h-32 text-gray-600" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <path d="M10 90 Q 50 10 90 90" strokeWidth="1" />
         </svg>
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