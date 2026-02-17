import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MatrixBackground from "../components/MatrixBackground";

function NoteFound() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-black text-white px-4 overflow-hidden">
      
      {/* 1. Matrix Background Layer */}
      <MatrixBackground />

      {/* 2. Content Container (z-10 to sit above background) */}
      <motion.div 
        className="relative z-10 text-center max-w-2xl"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Large 404 Heading */}
        <h1 className="text-9xl md:text-[12rem] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-800 mb-0 select-none drop-shadow-2xl">
          404
        </h1>

        {/* Subheading */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold text-[#00bfa6] uppercase tracking-widest">
            Page Not Found
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            It looks like you've ventured into the digital void. <br className="hidden md:block" />
            The page you are looking for has been disconnected from the matrix.
          </p>

          {/* Action Button */}
          <div className="pt-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-[#00bfa6] hover:text-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,191,166,0.4)]"
            >
              Return to Safety
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Decorative Glow at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#00bfa6] blur-[150px] opacity-10 pointer-events-none"></div>
    </div>
  )
}

export default NoteFound;