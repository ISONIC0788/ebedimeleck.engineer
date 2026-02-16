import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection'; // Import the new component

function About() {
  return (
    <div className="bg-black min-h-screen">
        <Navbar/>
        <AboutSection/> 
        <Footer/>
    </div>
  )
}

export default About;