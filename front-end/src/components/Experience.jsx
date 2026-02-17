import React from 'react';
import { FiExternalLink, FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion'; // 1. Import motion

const experiences = [
  {
    company: 'Ebyte Code Labs (Self-employed)',
    role: 'Software Engineer & Founder',
    location: 'Remote',
    period: '[MAR 2024 - PRESENT]',
    link: '#',
    points: [
      'Founded and led a tech hub focused on transforming conceptual ideas into meaningful, production-ready digital solutions',
      'Architected and developed diverse platforms including job-matching systems, digital automation tools, and booking applications',
      'Blended clean backend code with thoughtful UI design, incorporating responsive layouts and interactive animations',
      'Leveraged a stack including Java, JavaScript (React, Vite), and Node.js to build scalable and impactful community tools'
    ]
  },
  {
    company: 'SANTECH - RWANDA',
    role: 'Software Developer intern ',
    location: 'Kigali, Rwanda',
    period: '[MAR 2022 - APR 2022]',
    link: '#',
    points: [
      'Contributed to the development and maintenance of core software modules using Java and JavaScript',
      'Collaborated with senior engineers to implement and test new features, ensuring alignment with project requirements',
      'Participated in code reviews and technical discussions to maintain high software quality standards'
    ]
  }
];

const Experience = () => {
  // 2. Define animation variants
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
        staggerChildren: 0.3 // Delay between each experience item appearing
      }
    }
  };

  return (
    <section className="bg-black text-white py-24 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-4xl">
        
        {/* Header Section */}
        {/* 3. Animate Header separately */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Experience</h2>
          <p className="text-gray-400 text-lg">Below is a detailed history of my technical professional work.</p>
        </motion.div>

        {/* Experience List */}
        {/* 4. Use staggerContainer on the wrapper */}
        <motion.div 
          className="space-y-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {experiences.map((exp, index) => (
            /* 5. Animate each item */
            <motion.div 
              key={index} 
              className="group"
              variants={fadeInUp}
            >
              
              {/* Company Info */}
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                  {exp.company}
                </h3>
                <a href={exp.link} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                  <FiExternalLink size={20} />
                </a>
              </div>
              
              <div className="text-gray-300 font-medium mb-1">{exp.role}</div>
              <div className="text-gray-500 text-sm mb-6 uppercase tracking-wider font-mono">
                {exp.location} {exp.period}
              </div>

              {/* Responsibility Points */}
              <ul className="space-y-4">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400 leading-relaxed">
                    <FiCheckCircle className="mt-1 flex-shrink-0 text-white" size={16} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;