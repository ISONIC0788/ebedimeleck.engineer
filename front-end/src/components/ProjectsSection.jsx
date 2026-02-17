import React from 'react';
import { FiLink } from 'react-icons/fi';
import { motion } from 'framer-motion'; // 1. Import motion
import LoadingDots from './LoadingDots';

// Projects updated with your specific technology stack
const projects = [
  {
    title: 'Driver Trip Log',
    description: 'Manage and organize the records of the driver trip information.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf'],
    link: 'https://github.com/ISONIC0788/DRIVER_TRIP_LOG_V2.git',
    image: 'https://via.placeholder.com/600x400/111111/FFFFFF?text=Driver+Trip+Log',
  },
  {
    title: 'Net_Tracker',
    description: "Command-line tool written in C that allows users to track network ports.",
    tags: ['C Language', 'Networking', 'Linux'],
    link: 'https://github.com/ISONIC0788/Net_Tracker.git',
    image: 'https://via.placeholder.com/600x400/111111/FFFFFF?text=Net_Tracker',
  },
  {
    title: 'Car Washing MS',
    description: 'Allows customers to book services online and admins to manage staff.',
    tags: ['JavaScript', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com/ISONIC0788/CAR_WASHING_M_S',
    image: 'https://via.placeholder.com/600x400/111111/FFFFFF?text=Car+Washing+MS',
  },
];

// 2. Define Animation Variants
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
      staggerChildren: 0.2 // Cards appear 0.2s after each other
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
        {/* 3. Animate Header on Scroll */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
           <h2 className="text-5xl font-extrabold mb-8 tracking-tight">Projects</h2>
           <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
             Below is some of the projects i have worked on.
           </p>
        </motion.div>

        {/* Grid Layout with Refined Cards */}
        {/* 4. Wrap Grid in Stagger Container */}
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
              variants={cardVariant} // 5. Apply Individual Card Animation
              className="bg-[#111111] border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 group"
            >
              {/* Project Image Preview */}
              <div className="relative overflow-hidden aspect-video border-b border-white/5">
                <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay Link */}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                >
                   <FiLink className="text-white text-3xl" />
                </a>
              </div>

              {/* Card Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-8 text-base leading-relaxed h-12 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-1.5 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/10"
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