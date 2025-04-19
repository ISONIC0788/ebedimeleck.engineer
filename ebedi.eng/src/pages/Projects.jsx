import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'


import ProjectsSection from '../components/ProjectsSection'

function Projects() {
  return (
    <div>
     <Navbar/>
        {/* <ProjectDesc/> */}
        <ProjectsSection/>
     <Footer/>
    </div>
  )
}

export default Projects
