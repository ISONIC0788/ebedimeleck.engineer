import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion'; 
import SkillsGrid from '../SkillsGrid';

const HomeAbout = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="bg-black py-24 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        
        {/* --- Bio Section --- */}
        <motion.div 
          className="flex flex-col md:flex-row items-start gap-12 max-w-6xl mx-auto mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left: Section Header */}
          <motion.div className="w-full md:w-1/3" variants={fadeInUp}>
            <h2 className="text-sm font-mono text-[#00bfa6] uppercase tracking-widest mb-4">
              01. About Me
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Solopreneur | Software Engineer | IT Student
              <br />
              <span className="text-[#00bfa6] text-xl md:text-2xl mt-2 block">
                Shaping solutions with open-source.
              </span>
            </h3>
          </motion.div>

          {/* Right: Summary Text */}
          <motion.div className="w-full md:w-2/3 space-y-6" variants={fadeInUp}>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              I’m Ebedi Meleck, a passionate and purpose-driven software developer from Rwanda. As an Information Technology student, I’m deeply focused on using technology to solve real-world problems, empower communities, and create meaningful digital impact.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Every line of code I write is driven by a deeper mission: to build solutions that matter and leave a lasting impact. For me, software development isn’t just about completing assignments—it’s about transforming ideas into tools that improve lives.
            </p>
            
            <div className="pt-4">
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 text-white font-bold hover:text-[#00bfa6] transition-colors group"
              >
                Learn more about my journey 
                <FiArrowRight className="transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* --- Tools and Platforms Grid --- */}
        <motion.div 
          className="max-w-6xl mx-auto pt-16 border-t border-white/5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h4 className="text-xl font-bold text-gray-200 mb-12 text-center md:text-left tracking-wide">
            Technical Expertise & Tools
          </h4>
          
          <SkillsGrid alignment="left" />
        </motion.div>

      </div>
    </section>
  );
};

export default HomeAbout;