
import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Sidebar from '../components/Sidebar'
import ArticleCard from '../components/ArticleCard'

function Home() {
  return (
    <div>
        <Navbar/>
        
        <Hero/>
        <div className="container  ">
          {/* py-5    */}
      <div className="row">
        <div className="col-lg-7">
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
        <div className="col-lg-4">
          <Sidebar />
        </div>
      </div>
    </div>
        <Footer/>
      
    </div>
  )
}

export default Home
