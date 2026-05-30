import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
import LoadingDots from './LoadingDots';

// Projects updated with your specific technology stack
const projects = [
  {
    title: 'Ebyte Soft Lab',
    description: 'Technology-focused software lab building open-source solutions and professional software services.',
    tags: ['Open Source', 'Software Services', 'React', 'Node.js'],
    github: '#',
    repoStatus: 'Private',
    live: 'https://ebytesoftlab.dev/',
    image: '/ebytesoftlab.png',
  },
  {
    title: 'Ebedi Meleck Portfolio',
    description: 'Personal portfolio featuring interactive 3D elements, AI chat integration (Gemini), matrix rain effects, and a responsive dark UI.',
    tags: ['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/ISONIC0788/ebedimeleck.engineer',
    live: 'https://ebedimeleck-engineer.vercel.app/',
    image: '/portfolioweb.png',
  },
  {
    title: 'Karebe Platform',
    description: 'Full-stack movie & series management system with streaming, RBAC, and interpreter management.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
    github: '#',
    repoStatus: 'Private',
    live: 'https://www.karebe.online/',
    image: '/karebe_web.png',
  },
  {
    title: 'CropConnect',
    description: 'A phygital agricultural marketplace connecting smallholder farmers with wholesale buyers through SMS, USSD, and a web dashboard.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Spring Boot', 'PostGIS'],
    github: 'https://github.com/ISONIC0788/CropConnect-frontend',
    live: 'https://crop-connect-frontend.vercel.app/',
    image: '/cropconnect.png',
  },
  {
    title: 'Opusify CLI',
    description: 'A full-stack scaffold engine that generates production-ready Next.js and Vite apps with interactive templates, design systems, and dependency injection.',
    tags: ['CLI', 'Scaffolding', 'Next.js', 'Vite', 'TypeScript'],
    github: 'https://github.com/Ebyte-Lab/opusify-cli',
    live: 'https://www.npmjs.com/package/opusify-cli',
    image: '/opusify_npm.png',
  },
  {
    title: 'Umurava Screener',
    description: 'An AI-powered recruiter workspace for screening applicants, parsing job descriptions, ranking candidates, and keeping hiring decisions human-in-the-loop.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Redux Toolkit', 'MongoDB'],
    github: 'https://github.com/Josephat-S/umurava-screener',
    live: 'https://umurava-screener.vercel.app/login',
    image: '/umuravascreen.png',
  },
  {
    title: 'Feedback Board',
    description: 'Public feedback system allowing users to post, upvote, sort, and filter suggestions dynamically.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
    github: 'https://github.com/ISONIC0788/Feedback-Board',
    live: 'https://feedback-board-tau.vercel.app/',
    image: '/feedback_app.png',
  },
  {
    title: 'Career Connect',
    description: 'Comprehensive job portal with a Pure PHP MVC backend and React + Material UI frontend.',
    tags: ['PHP', 'React', 'Material UI', 'MySQL'],
    github: 'https://github.com/ISONIC0788/JobPortal-2',
    live: '#',
    image: '/carrier_connect.png',
  },
  {
    title: 'Driver Trip Log',
    description: 'A PHP and MySQL trip logging system for organizing driver trip records faster and more accurately, with PDF and Excel report generation.',
    tags: ['PHP', 'MySQL', 'PDF Reports', 'Excel Export'],
    github: 'https://github.com/ISONIC0788/DRIVER_TRIP_LOG_V2',
    live: '#',
    image: '/DRIVER_TRIP_LOG_V2.jpeg',
  },
  {
    title: 'Quick Chat',
    description: 'Real-Time MERN Stack Chat Application with Socket.io for instant messaging, online user status, private conversations, unread tracking, and profile management.',
    tags: ['React', 'Socket.io', 'MongoDB', 'Realtime'],
    github: 'https://github.com/ISONIC0788/QuickChat',
    live: '#',
    image: '/quickchat.jpeg',
  },
  {
    title: 'Ebyte Spark Java Compiler CLI',
    description: 'A lightweight command-line tool that checks Java availability and compiles .java files quickly with clear logs for education, automation, and Java learning workflows.',
    tags: ['Node.js', 'Java', 'CLI', 'Automation', 'Cross-platform'],
    github: 'https://github.com/ISONIC0788/ebyte-spark-j-c',
    live: 'https://www.npmjs.com/package/ebyte-spark-j-c',
    image: '/ebyte_spark_j.png',
  },
  {
    title: 'Ebyte Spark CLI',
    description: 'Node.js CLI tool for rapid Java file compilation and execution across platforms.',
    tags: ['Node.js', 'CLI', 'Java', 'Automation'],
    github: 'https://github.com/ISONIC0788/ebyte-spark-j-c',
    live: 'https://www.npmjs.com/package/ebyte-spark-j-c', // Inferred or reserved
    image: '/ebyte_spark_j.png',
  }
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
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

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { type: "spring", stiffness: 50, damping: 20 } 
  }
};

function ProjectsSection() {
  return (
    <section className="py-24 bg-black text-white min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
           <h2 className="text-5xl font-extrabold mb-8 tracking-tight">Projects</h2>
           <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
             A showcase of my recent work in software development, ranging from full-stack web applications to CLI tools.
           </p>
        </motion.div>

        {/* Grid Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariant}
              className="bg-[#111111] border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 group flex flex-col h-full"
            >
              {/* Project Image Preview - Removed Overlay */}
              <div className="relative overflow-hidden aspect-video border-b border-white/5">
                <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col grow">
                {/* Title and Icons on the same line */}
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h3 className="text-2xl font-bold text-white transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Action Icons */}
                  <div className="flex items-center gap-3 shrink-0 mt-1">
                    {project.github && project.github !== '#' ? (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        title="View Source Code"
                      >
                         <FiGithub className="text-xl" />
                      </a>
                    ) : project.repoStatus ? (
                      <span className="text-xs font-bold text-sky-400 bg-sky-400/10 px-2 py-1 rounded border border-sky-400/20 whitespace-nowrap">
                        {project.repoStatus}
                      </span>
                    ) : null}
                    
                    {project.comingSoon ? (
                      <span className="text-xs font-bold text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded border border-yellow-500/20 whitespace-nowrap">
                        Soon
                      </span>
                    ) : project.live && project.live !== '#' ? (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        title="View Live Demo"
                      >
                         <FiExternalLink className="text-xl" />
                      </a>
                    ) : null}
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6 text-base leading-relaxed line-clamp-3 grow">
                  {project.description}
                </p>
                
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
       
       <motion.div 
         className="mt-20 flex justify-center opacity-50"
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 0.5 }}
         transition={{ delay: 1, duration: 1 }}
       >
          <LoadingDots/>
       </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection;