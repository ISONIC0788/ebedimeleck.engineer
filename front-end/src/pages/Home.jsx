import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Sidebar from '../components/Sidebar'
import ArticleCard from '../components/ArticleCard'

function Home() {
  return (
    <div className="bg-light-bg dark:bg-dark-bg min-h-screen transition-colors duration-300">
        <Navbar/>
        <Hero/>
        
        <div className="container mx-auto px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Content - Articles */}
            <div className="lg:col-span-8">
              <ArticleCard 
                date="February 5, 2024"
                title="Why Developers Should Care About Edge Computing"
                excerpt="Edge computing is not just a buzzword—it’s a game-changer for developers building real-time, high-performance applications..."
                link="#"
              />
              <ArticleCard
               date="January 20, 2024"
               title="5 Tips for Scaling Web Apps Smoothly"
               excerpt="From database optimization to CDN usage, learn practical tips to ensure your apps perform well under load..."
               link="#"
               />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <Sidebar />
            </div>
          </div>
        </div>
        
        <Footer/>
    </div>
  )
}

export default Home