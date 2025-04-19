
import React from 'react'
import { Card } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
// import Card from "bootstrap"
import santech  from '../../public/santech.PNG'
function Sidebar() {
  return (
  
       <Card className="p-3 shadow-sm sidebar-card mb-4 mt-5">
      <h5 className="mb-3 fw-bold">Work</h5>

      {/* Job #1 */}
      <div className="d-flex align-items-center mb-3">
        <img
          src={santech}
          alt="SANTECH RWANDA"
          className="rounded-circle me-2"
        />
        <div>
          <strong>SANTECH - RWANDA</strong>
          <div className="text-muted small">
            Software Developer — Match 2022 - April 2022
          </div>
        </div>
      </div>

      {/* Job #2 */}
      <div className="d-flex align-items-center mb-2">
        <img
          src={santech}
          alt="Ebyte Code Labs"
          className="rounded-circle me-2"
        />
        <div>
          <strong>Self employed (Ebyte CL)</strong>
          <div className="text-muted small">
            Software engineer — Mar 2024 - Present
          </div>
        </div>
        
      </div>
      <a href="https://drive.google.com/file/d/1Q2bWhvHSbnpE6l02ih23k0zASy2eGb9y/view?usp=sharing" 
      download 
      target='_blank'
       className='btn btn-success align-items-center mt-3 gap-3'>
            <FaDownload/> Download My CV
    </a>
    </Card>
   
  )
}

export default Sidebar
