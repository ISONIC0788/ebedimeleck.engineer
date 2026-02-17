import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation"; 
import profilephoto from "../../public/profilephoto.jpg"; 
import MatrixBackground from "./MatrixBackground"; 

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 100 } 
  }
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-24 pb-10 px-4 overflow-hidden bg-black">
      <MatrixBackground />

      <motion.div 
        className="relative z-10 text-center max-w-4xl mx-auto mb-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
          variants={itemVariants}
        >
          Hello{" "}
          <motion.span 
            className="inline-block origin-bottom-right"
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              repeatDelay: 1 
            }}
          >
            👋🏼
          </motion.span>
          , I'm Ebedi Meleck
          <br />
          
          {/* Typing Animation Section */}
          <motion.span 
            className="text-gray-400 text-2xl md:text-3xl mt-4 block font-medium"
            variants={itemVariants}
          >
            and I'm a{" "}
            <TypeAnimation
              sequence={[
                'Software Engineer',
                2000,
                'IT Student',
                2000,
                'Solopreneur',
                2000,
                'Open-source enthusiast',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#00bfa6] font-bold"
            />
          </motion.span>
        </motion.h1>
      </motion.div>

      <motion.div 
        className="relative z-10" 
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
      >
        {/* Updated Image Container: Circle shape */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 group mx-auto">
          <img
            src={profilephoto}
            alt="Ebedi Meleck"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Inner shadow for depth */}
          <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.3)] pointer-events-none"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;