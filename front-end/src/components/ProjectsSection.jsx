import React from 'react';
import { FiLink } from 'react-icons/fi';
import LoadingDots from './LoadingDots';

const projects = [
  {
    title: 'Driver Trip Log',
    description: 'Manage and organize the records of the driver trip information.',
    tags: ['Web App', 'Author', 'Core Team'],
    link: 'https://github.com/ISONIC0788/DRIVER_TRIP_LOG_V2.git',
    icon: '🧠',
    linkName:'Driver Trip Log',
  },
  {
    title: 'Net_Tracker',
    description: "Command-line tool written in C that allows users to track network ports.",
    tags: ['CLI', 'Author'],
    link: 'https://github.com/ISONIC0788/Net_Tracker.git',
    icon: '💻',
    linkName:'NetTracker',
  },
  {
    title: 'Car Washing MS',
    description: 'Allows customers to book services online and admins to manage staff.',
    tags: [ 'Web App','Author'],
    link: 'https://github.com/ISONIC0788/CAR_WASHING_M_S',
    icon: '🚍',
    linkName:'Car Washing M S ',
  },
];

function ProjectsSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-[#121212] transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
           <h2 className="text-4xl font-bold text-light-text dark:text-dark-text mb-4">
            Crafting Code, Sparking Change
           </h2>
           <p className="text-light-muted dark:text-dark-muted max-w-2xl mx-auto text-lg">
             My mission is to leave the world better than I found it. Here are the projects I am most proud of.
           </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-primary">
              <div className="text-4xl mb-4">{project.icon}</div>
              <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-light-muted dark:text-dark-muted mb-4 h-20">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-semibold bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-primary font-semibold hover:underline"
              >
                <FiLink className="mr-2" /> {project.linkName}
              </a>
            </div>
          ))}
        </div>
       
       <div className="mt-12">
        <LoadingDots/>
       </div>
      </div>
    </section>
  )
}

export default ProjectsSection