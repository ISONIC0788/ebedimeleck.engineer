import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaShareAlt, FaTimes } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const socialLinks = [
  { href: "https://www.linkedin.com/in/ituze-agacyo-ebed-meleck-65a13b2b7/", icon: <FaLinkedin size={20} />, label: "LinkedIn" },
  { href: "https://github.com/ISONIC0788", icon: <FaGithub size={20} />, label: "GitHub" },
  { href: "https://x.com/EbediMeleck", icon: <FaXTwitter size={20} />, label: "Twitter" },
  { href: "https://wa.me/YOUR_NUMBER", icon: <FaWhatsapp size={20} />, label: "WhatsApp" },
  { href: "mailto:ituzeebedi12@gmail.com", icon: <FaEnvelope size={20} />, label: "Email" },
];

// Helper: Reusable Icon Component
const SocialIcon = ({ href, icon, label, isMobile }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`p-2.5 rounded-full flex items-center justify-center transition-colors ${
      isMobile 
        ? "bg-zinc-800 text-white shadow-lg border border-white/10" // Mobile icons remain dark for contrast
        : "bg-transparent hover:bg-white/20 text-gray-400 hover:text-white" // Desktop transparent
    }`}
    title={label}
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.a>
);

const SocialDock = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Animation Config
  const desktopContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 1.5 
      }
    }
  };

  const desktopItemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  return (
    <>
      {/* --- DESKTOP VIEW --- */}
      <motion.div 
        className="fixed bottom-8 right-8 z-50 hidden md:flex flex-col gap-3 bg-zinc-900/90 backdrop-blur-md border border-white/10 p-2.5 rounded-full shadow-2xl"
        variants={desktopContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {socialLinks.map((link, index) => (
          <motion.div key={index} variants={desktopItemVariants}>
            <SocialIcon {...link} isMobile={false} />
          </motion.div>
        ))}
      </motion.div>

      {/* --- MOBILE VIEW --- */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden flex flex-col items-end gap-3">
        
        {/* Expanded List */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div 
              className="flex flex-col gap-3 mb-2"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, scale: 0.5, transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.1 } }
              }}
            >
              {socialLinks.map((link, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.5 },
                    visible: { opacity: 1, y: 0, scale: 1 }
                  }}
                >
                  <SocialIcon {...link} isMobile={true} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button (FAB) - NOW WHITE/SILVER */}
        <motion.button
          onClick={() => setMobileOpen(!mobileOpen)}
          // Updated classes: bg-white, text-black, white shadow
          className="p-3.5 bg-white text-black rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] border border-white/20 flex items-center justify-center"
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaTimes size={22} />
              </motion.div>
            ) : (
              <motion.div
                key="share"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaShareAlt size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
};

export default SocialDock;