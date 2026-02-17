import React from 'react';
import { 
  SiTypescript, SiNextdotjs, SiJavascript, SiNestjs, SiQuarkus, 
  SiAntdesign, SiTailwindcss, SiC, SiPython, SiCplusplus, 
  SiPhp, SiNodedotjs, SiExpress, SiGo, SiMysql, 
  SiDrizzle, SiSass, SiMui, SiMongodb, SiGit 
} from "react-icons/si";
import { FaJava, FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { motion } from "framer-motion"; // 1. Import motion

// Centralized skills data
const skills = [
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "C", icon: <SiC className="text-blue-600" /> },
  { name: "Python", icon: <SiPython className="text-yellow-500" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-700" /> },
  { name: "PHP", icon: <SiPhp className="text-indigo-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "Go", icon: <SiGo className="text-cyan-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "Drizzle", icon: <SiDrizzle className="text-green-300" /> },
  { name: "SASS", icon: <SiSass className="text-pink-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Material UI", icon: <SiMui className="text-blue-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Git", icon: <SiGit className="text-orange-600" /> },
  { name: "Next Js", icon: <SiNextdotjs className="text-white" /> },
  { name: "React Native", icon: <TbBrandReactNative className="text-cyan-400" /> },
  { name: "Nest Js", icon: <SiNestjs className="text-red-600" /> },
  { name: "Quarkus", icon: <SiQuarkus className="text-blue-500" /> },
  { name: "Ant design", icon: <SiAntdesign className="text-blue-400" /> },
  { name: "Tailwind Css", icon: <SiTailwindcss className="text-cyan-400" /> },
];

const SkillsGrid = ({ alignment = "center" }) => {
  // 2. Define Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Fast ripple effect across the grid
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.3, type: "spring", stiffness: 200 } 
    }
  };

  return (
    <motion.div 
      className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-6 justify-items-center ${alignment === "left" ? "md:justify-items-start" : "md:justify-items-center"}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {skills.map((skill, index) => (
        <motion.div 
          key={index} 
          variants={itemVariants}
          className="flex items-center gap-3 group transition-transform duration-300 hover:-translate-y-1 cursor-default"
        >
          <div className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">
            {skill.icon}
          </div>
          <span className="text-gray-500 font-medium text-sm md:text-base group-hover:text-white transition-colors">
            {skill.name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillsGrid;