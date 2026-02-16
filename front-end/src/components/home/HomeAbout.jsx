import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import SkillsGrid from '../SkillsGrid'; // Centralized skills component

const HomeAbout = () => {
  return (
    <section className="bg-black py-24 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        
        {/* --- Bio Section --- */}
        <div className="flex flex-col md:flex-row items-start gap-12 max-w-6xl mx-auto mb-20">
          {/* Left: Section Header */}
          <div className="w-full md:w-1/3">
            <h2 className="text-sm font-mono text-[#00bfa6] uppercase tracking-widest mb-4">
              01. About Me
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Code with Purpose, <br /> Create with Impact.
            </h3>
          </div>

          {/* Right: Summary Text */}
          <div className="w-full md:w-2/3 space-y-6">
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
          </div>
        </div>

        {/* --- Tools and Platforms Grid --- */}
        <div className="max-w-6xl mx-auto pt-16 border-t border-white/5">
          <h4 className="text-xl font-bold text-gray-200 mb-12 text-center md:text-left tracking-wide">
            Technical Expertise & Tools
          </h4>
          
          {/* Using the reusable grid component with left alignment to match headers */}
          <SkillsGrid alignment="left" />
        </div>

      </div>
    </section>
  );
};

export default HomeAbout;