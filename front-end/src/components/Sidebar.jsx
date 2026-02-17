import React from 'react';
import { FaDownload } from "react-icons/fa";
import santech from '../../public/santech.PNG'; // Ensure path is correct

function Sidebar() {
  return (
    <div className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-sm border border-primary/30 mt-10">
      <h5 className="text-lg font-bold text-light-text dark:text-dark-text mb-4">Work</h5>

      {/* Job #1 */}
      <div className="flex items-center mb-4">
        <img src={santech} alt="SANTECH" className="w-10 h-10 rounded-full mr-3 object-cover" />
        <div>
          <strong className="block text-light-text dark:text-dark-text">SANTECH - RWANDA</strong>
          <div className="text-sm text-light-muted dark:text-dark-muted">
            Software Developer — March 2022 - April 2022
          </div>
        </div>
      </div>

      {/* Job #2 */}
      <div className="flex items-center mb-6">
        <img src={santech} alt="Ebyte" className="w-10 h-10 rounded-full mr-3 object-cover" />
        <div>
          <strong className="block text-light-text dark:text-dark-text">Self employed (Ebyte CL)</strong>
          <div className="text-sm text-light-muted dark:text-dark-muted">
            Software engineer — Mar 2024 - Present
          </div>
        </div>
      </div>

      <a 
        href="https://drive.google.com/file/d/1Q2bWhvHSbnpE6l02ih23k0zASy2eGb9y/view?usp=sharing" 
        download 
        target='_blank'
        className='flex items-center justify-center gap-2 w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium'
      >
        <FaDownload/> Download My CV
      </a>
    </div>
  )
}

export default Sidebar;