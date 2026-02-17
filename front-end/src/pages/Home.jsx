import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HomeAbout from '../components/home/HomeAbout';
import ProjectsSection from '../components/ProjectsSection'; // Import Projects
import Experience from '../components/Experience'; // Import Experience

function Home() {
  return (
    <div className="bg-black min-h-screen relative text-white">
      <Navbar />
      
      {/* 1. Hero Section with Matrix Effect */}
      <Hero />
      
      {/* 2. About Me & Tools Summary */}
      <HomeAbout />

       {/* 4. Professional Experience */}
      <Experience />

      {/* 3. Featured Projects */}
      <ProjectsSection />

     
      
      <Footer />
    </div>
  );
}

export default Home;