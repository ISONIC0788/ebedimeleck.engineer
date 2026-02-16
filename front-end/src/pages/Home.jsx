import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HomeAbout from '../components/home/HomeAbout'; // Updated Import

function Home() {
  return (
    <div className="bg-black min-h-screen relative text-white">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Replaced TrustedBy with HomeAbout */}
      <HomeAbout />
      
      {/* Other home sections... */}
      
      <Footer />
    </div>
  );
}

export default Home;