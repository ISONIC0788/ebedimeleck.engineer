import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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

const SocialDock = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 hidden md:flex flex-col gap-3 bg-zinc-900/90 backdrop-blur-md border border-white/10 p-2.5 rounded-full shadow-2xl">
      <SocialIcon 
        href="https://www.linkedin.com/in/ituze-agacyo-ebed-meleck-65a13b2b7/" 
        icon={<FaLinkedin size={20} />} 
        label="LinkedIn" 
      />
      <SocialIcon 
        href="https://github.com/ISONIC0788" 
        icon={<FaGithub size={20} />} 
        label="GitHub" 
      />
      <SocialIcon 
        href="https://x.com/EbediMeleck" 
        icon={<FaXTwitter size={20} />} 
        label="Twitter" 
      />
      <SocialIcon 
        href="https://wa.me/YOUR_NUMBER" 
        icon={<FaWhatsapp size={20} />} 
        label="WhatsApp" 
      />
      <SocialIcon 
        href="mailto:ituzeebedi12@gmail.com" 
        icon={<FaEnvelope size={20} />} 
        label="Email" 
      />
    </div>
  );
};

export default SocialDock;