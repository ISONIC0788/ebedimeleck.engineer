import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import Experience from '../components/Experience'; // Import the new component

function About() {
  return (
    <div className="bg-black min-h-screen">
        <Navbar/>
        <AboutSection/> 
        {/* Experience section integrated below bio */}
        <Experience />
        <Footer/>
    </div>
  )
}

export default About;