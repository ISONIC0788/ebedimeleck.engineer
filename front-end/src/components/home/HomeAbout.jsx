import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion'; // 1. Import motion
import SkillsGrid from '../SkillsGrid';

const HomeAbout = () => {
  // 2. Define reusable animation variants
  // "fadeInUp" moves elements from slightly lower (y: 30) to their final position while fading in.
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  // "staggerContainer" helps child elements animate one after another
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
        {/* 3. Wrap the grid in a motion.div to trigger the stagger effect when in view */}
        <motion.div 
          className="flex flex-col md:flex-row items-start gap-12 max-w-6xl mx-auto mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Animates only once when 30% visible
        >
          {/* Left: Section Header */}
          <motion.div className="w-full md:w-1/3" variants={fadeInUp}>
            <h2 className="text-sm font-mono text-[#00bfa6] uppercase tracking-widest mb-4">
              01. About Me
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Code with Purpose, <br /> Create with Impact.
            </h3>
          </motion.div>

          {/* Right: Summary Text */}
          <motion.div className="w-full md:w-2/3 space-y-6" variants={fadeInUp}>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              Ebedi Meleck is a passionate and visionary software developer from Rwanda, dedicated to solving real-world problems through technology.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Every line of code I write is inspired by a deeper mission: to create solutions that leave a lasting impact on my community. I believe in the power of learning—every project and challenge is an opportunity to grow.
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
        {/* 4. Animate the Skills section separately so it triggers when the user scrolls further */}
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