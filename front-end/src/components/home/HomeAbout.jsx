import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiJavascript, 
  SiNestjs, 
  SiQuarkus, 
  SiAntdesign, 
  SiTailwindcss 
} from "react-icons/si";
import { FaJava, FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

// Reusing the skills data from your AboutSection
const skills = [
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "Next Js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Javascript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "React Js", icon: <FaReact className="text-cyan-400" /> },
  { name: "React Native", icon: <TbBrandReactNative className="text-cyan-400" /> },
  { name: "Nest Js", icon: <SiNestjs className="text-red-600" /> },
  { name: "Quarkus", icon: <SiQuarkus className="text-blue-500" /> },
  { name: "Ant design", icon: <SiAntdesign className="text-blue-400" /> },
  { name: "Tailwind Css", icon: <SiTailwindcss className="text-cyan-400" /> },
];

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
              Software Engineer <br /> & IT Student
            </h3>
          </div>

          {/* Right: Summary Text */}
          <div className="w-full md:w-2/3 space-y-6">
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              Ebedi Meleck is a passionate and visionary software developer from Rwanda, dedicated to solving real-world problems through technology. As a student of Information Technology, he is deeply focused on innovation, community impact, and digital empowerment.
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

        {/* --- Tools and Platforms Grid (Integrated) --- */}
        <div className="max-w-6xl mx-auto pt-16 border-t border-white/5">
          <h4 className="text-xl font-bold text-gray-200 mb-12 text-center md:text-left">
            Tools & Platforms
          </h4>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-6 justify-items-center md:justify-items-start">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 group transition-transform duration-300 hover:-translate-y-1 cursor-default"
              >
                <div className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="text-gray-500 font-medium text-sm md:text-base group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeAbout;