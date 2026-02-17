import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion"; // 1. Import motion

// 2. Convert to motion.a for hover/tap effects
const SocialIcon = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2.5 bg-transparent hover:bg-white/20 rounded-full text-gray-400 hover:text-white transition-colors"
    title={label}
    variants={{
      hidden: { scale: 0, opacity: 0 },
      visible: { scale: 1, opacity: 1 }
    }}
    whileHover={{ scale: 1.2, rotate: 10 }} // Scale up and slight tilt on hover
    whileTap={{ scale: 0.9 }} // Scale down on click
  >
    {icon}
  </motion.a>
);

const SocialDock = () => {
  // 3. Define Stagger Animation
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        staggerChildren: 0.1, // Delay between each icon appearing
        delayChildren: 1.5    // Wait until other page elements load
      }
    }
  };

  return (
    <motion.div 
      className="fixed bottom-8 right-8 z-50 hidden md:flex flex-col gap-3 bg-zinc-900/90 backdrop-blur-md border border-white/10 p-2.5 rounded-full shadow-2xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
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
    </motion.div>
  );
};

export default SocialDock;