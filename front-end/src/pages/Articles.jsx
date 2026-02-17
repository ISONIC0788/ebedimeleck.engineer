import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import { motion } from 'framer-motion'; // 1. Import motion

function Articles() {
  const articlesData = [
    {
      date: "2024-12-14",
      title: "Testing React Applications: A Practical Guide",
      excerpt: "Learn the fundamentals of testing React components using Jest and React Testing Library for robust applications.",
      link: "#"
    },
    {
      date: "2024-12-12",
      title: "REST API Design Principles That Stand the Test of Time",
      excerpt: "Key principles for designing scalable and maintainable RESTful APIs that developers will love to use.",
      link: "#"
    },
    {
      date: "2024-12-10",
      title: "Git Workflow Guide: From Chaos to Clarity",
      excerpt: "Mastering Git branches, pull requests, and merge strategies to keep your team's development workflow smooth.",
      link: "#"
    },
    {
      date: "2024-12-08",
      title: "TypeScript Best Practices for Clean, Maintainable Code",
      excerpt: "Tips and tricks for leveraging TypeScript's type system to write safer and more readable JavaScript code.",
      link: "#"
    },
    {
      date: "2024-12-05",
      title: "10 Next.js Performance Tips for Production Apps",
      excerpt: "Optimize your Next.js application for speed and efficiency with these production-ready performance techniques.",
      link: "#"
    },
  ];

  // 2. Define Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15 // Stagger delay
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <Navbar/>
      
      <main className="container mx-auto px-6 pt-32 pb-20 max-w-4xl">
        
        {/* Header Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl font-bold text-white">Blog</h1>
            <span className="px-3 py-1 rounded-full border border-gray-700 text-xs text-gray-400 bg-[#111]">
              {articlesData.length} posts
            </span>
          </div>
          <p className="text-gray-400 text-lg">
            My thoughts on software development, life, and more.
          </p>
        </motion.div>

        {/* Article List - 3. Wrap in Motion div with stagger */}
        <motion.div 
          className="space-y-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {articlesData.map((article, index) => (
            // 4. Wrap each card in a motion div
            <motion.div key={index} variants={itemVariants}>
              <ArticleCard
                index={index}
                date={article.date}
                title={article.title}
                excerpt={article.excerpt}
                link={article.link}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination (Visual only for now) */}
        <motion.div 
          className="flex justify-between items-center mt-20 pt-10 border-t border-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
            <span className="text-gray-500 text-sm">Page 1 of 2</span>
            <div className="flex gap-2">
                <button className="px-4 py-2 border border-gray-700 rounded-lg text-sm text-gray-500 hover:text-white hover:border-gray-500 transition-colors disabled:opacity-50" disabled>Previous</button>
                <button className="px-4 py-2 border border-gray-700 rounded-lg text-sm text-white hover:border-gray-500 transition-colors">Next</button>
            </div>
        </motion.div>

      </main>

      <Footer/>
    </div>
  )
}

export default Articles;