import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import ArticleCard from '../components/ArticleCard'

function Articles() {
  return (
    <div>
      <Navbar/>
      <div className="container py-5">
      <h2 className="mb-4">Articles</h2>
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
      
      <Footer/>
    </div>
  )
}

export default Articles
