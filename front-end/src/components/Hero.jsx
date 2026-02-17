import React, { useMemo } from "react"; 
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation"; 
import profilephoto from "../../public/profilephoto.jpg"; 
import MatrixBackground from "./MatrixBackground"; 
import IconCloud from "./IconCloud"; 

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

// Tech Stack Slugs
const slugs = [
  "typescript", "javascript", "java", "react", "android", "html5", "css3", 
  "nodedotjs", "express", "nextdotjs", "prisma", "amazonaws", "postgresql", 
  "firebase", "nginx", "vercel", "testinglibrary", "jest", "cypress", "docker", 
  "git", "jira", "github", "gitlab", "visualstudiocode", "androidstudio", 
  "sonarqube", "figma",
];

const Hero = () => {
  const images = useMemo(() => {
    return slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-24 pb-10 px-4 overflow-hidden bg-black">
      <MatrixBackground />

      {/* --- LEFT ICON CLOUD --- */}
      <motion.div 
        className="absolute left-10 top-1/2 -translate-y-1/2 z-20 hidden xl:flex"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <IconCloud images={images} />
      </motion.div>

      {/* --- RIGHT ICON CLOUD --- */}
      <motion.div 
        className="absolute right-10 top-1/2 -translate-y-1/2 z-20 hidden xl:flex"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <IconCloud images={images} />
      </motion.div>

      {/* Center Content */}
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

      {/* --- PROFILE IMAGE & ANIMATED SWOOP LINE --- */}
      <div className="relative z-10 mt-10">
        
        {/* 1. The Swoop Line (SVG) - NOW ANIMATED CONTINUOUSLY */}
        <motion.svg
          width="600"
          height="300"
          viewBox="0 0 600 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none w-[140%] max-w-none md:w-[600px]"
        >
          <motion.path
            d="M50 250 C 150 280, 200 200, 300 150 C 400 100, 450 20, 550 50"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            style={{ filter: "drop-shadow(0px 0px 8px rgba(255,255,255,0.5))" }}
            
            // --- CONTINUOUS LOOP ANIMATION ---
            initial={{ pathLength: 0, opacity: 0.5 }}
            animate={{ 
              pathLength: [0, 1, 1, 0], // Draw -> Hold -> Undraw -> Reset
              opacity: [0.5, 1, 1, 0.5] 
            }}
            transition={{
              duration: 5,         // Total cycle time (seconds)
              ease: "easeInOut",   // Smooth movement
              repeat: Infinity,    // Loop forever
              repeatDelay: 0.5,    // Pause slightly between loops
              times: [0, 0.4, 0.6, 1] // Keyframe timing: Draw(40%), Hold(20%), Undraw(40%)
            }}
          />
        </motion.svg>

        {/* 2. Profile Image Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 group mx-auto bg-black">
            <img
              src={profilephoto}
              alt="Ebedi Meleck"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.3)] pointer-events-none"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;