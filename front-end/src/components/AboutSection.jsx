import React from "react";
import { FaUserTie, FaGlobe, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion"; 
import profilephoto from "../../public/profilephoto.jpg"; 
import SkillsGrid from "./SkillsGrid"; 

const AboutSection = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15 
      }
    }
  };

  return (
    <section className="bg-black min-h-screen text-white py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* --- TOP SECTION: Bio & Profile --- */}
        <div className="flex flex-col md:flex-row items-start gap-12 mb-24">
          
          {/* Left: Intro Text */}
          <motion.div 
            className="w-full md:w-7/12 space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h1 
              className="text-3xl md:text-5xl font-bold text-white leading-tight"
              variants={fadeInUp}
            >
              Solopreneur | Software Engineer | IT Student
              <br />
              <span className="text-primary text-2xl md:text-3xl block mt-2">
                Shaping solutions with open-source
              </span>
            </motion.h1>
            
            <motion.div className="text-lg text-gray-400 space-y-4 leading-relaxed" variants={staggerContainer}>
              <motion.p variants={fadeInUp}>
                I’m Ebedi Meleck, a passionate and purpose-driven software developer from Rwanda. 
                As an Information Technology student, I’m deeply focused on using technology to 
                solve real-world problems, empower communities, and create meaningful digital impact.
              </motion.p>
              
              <motion.p variants={fadeInUp}>
                Every line of code I write is driven by a deeper mission: to build solutions that 
                matter and leave a lasting impact. For me, software development isn’t just about 
                completing assignments—it’s about transforming ideas into tools that improve lives.
              </motion.p>

              <motion.p variants={fadeInUp}>
                I’m currently building my technology empire, <strong className="text-white">Ebyte Code Labs</strong>—a 
                growing tech hub where ideas turn into real solutions. From job-matching platforms and 
                digital automation tools to booking systems and management applications, my projects are 
                stepping stones toward real-world change.
              </motion.p>

              <motion.p variants={fadeInUp}>
                With hands-on experience in Java, JavaScript (React, Vite), Node.js, and more, I focus 
                on writing clean, maintainable code while crafting thoughtful user experiences. I enjoy 
                building responsive interfaces with light/dark modes, smooth animations, and practical 
                designs that put users first. I’m not just a coder—I’m a <strong className="text-primary">problem-solver with purpose.</strong>
              </motion.p>

              <motion.p variants={fadeInUp}>
                I’ve worked on systems like Driver Trip Log Systems, car washing booking platforms, 
                and other real-life applications, while also contributing to open-source and continuously 
                sharpening my skills. My journey is defined by learning, building, and lifting others as I grow.
              </motion.p>

              <motion.p 
                className="italic border-l-4 border-primary pl-4 text-gray-300"
                variants={fadeInUp}
              >
                "I believe in the power of learning—every project, every challenge, and every failure 
                is an opportunity to improve."
              </motion.p>

              <motion.p 
                className="font-bold text-white mt-4"
                variants={fadeInUp}
              >
                Code with purpose. Create with impact. Shape tomorrow, one line of code at a time.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right: Profile + Mentor */}
          <motion.div 
            className="w-full md:w-5/12 flex flex-col items-center mt-8 md:mt-0 sticky top-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInRight}
          >
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
          </motion.div>
        </div>

        {/* --- BOTTOM SECTION: Tools and Platforms --- */}
        <motion.div 
          className="w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16 text-gray-200 border-t border-gray-900 pt-16 uppercase tracking-wide">
            Tools and Platforms
          </h2>

          <SkillsGrid alignment="center" />
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;