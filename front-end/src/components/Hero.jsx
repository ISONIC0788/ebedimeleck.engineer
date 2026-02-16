import React from "react";
import profilephoto from "../../public/profilephoto.jpg"; 
import MatrixBackground from "./MatrixBackground"; 

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-24 pb-10 px-4 overflow-hidden bg-black">
      <MatrixBackground />

      <div className="relative z-10 text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Hello <span className="inline-block animate-wave origin-bottom-right">👋🏼</span>, I'm Ebedi Meleck
          <br />
          <span className="text-gray-400 text-2xl md:text-3xl mt-3 block font-medium">
            and I'm a Software Engineer
          </span>
        </h1>
      </div>

      <div className="relative z-10 w-full max-w-lg">
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-2xl border border-white/20">
          <img
            src={profilephoto}
            alt="Ebedi Meleck"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.3)] pointer-events-none"></div>
        </div>
      </div>
      {/* Social Dock removed from here as it is now global in App.jsx */}
    </section>
  );
};

export default Hero;