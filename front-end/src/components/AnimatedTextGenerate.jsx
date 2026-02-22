import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const AnimatedTextGenerate = ({
  text,
  className = "",
  textClassName = "",
  blurEffect = false,
  speed = 1,
  highlightWords = [],
  highlightClassName = "",
  linkWords = [],
  linkHrefs = [],
  linkClassNames = [],
}) => {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05 / speed,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      filter: blurEffect ? "blur(10px)" : "none",
      y: 10,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className={className}>
      <motion.div
        className={`flex flex-wrap gap-x-[0.3em] gap-y-1 ${textClassName}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {words.map((word, idx) => {
          // Clean word for matching (remove trailing punctuation for the check)
          const cleanWord = word.replace(/[^a-zA-Z0-9-]/g, "");
          
          const isHighlight = highlightWords.includes(cleanWord);
          const linkIndex = linkWords.indexOf(cleanWord);
          const isLink = linkIndex !== -1;

          // Handle Links
          if (isLink) {
             const href = linkHrefs[linkIndex] || "#";
             const linkClass = linkClassNames[linkIndex] || "underline text-blue-500";
             const isInternal = href.startsWith("/");

             return (
                <motion.span 
                    key={idx} 
                    variants={wordVariants} 
                    className="inline-block"
                >
                     {isInternal ? (
                        <Link to={href} className={linkClass}>{word}</Link>
                     ) : (
                        <a href={href} className={linkClass} target="_blank" rel="noopener noreferrer">{word}</a>
                     )}
                </motion.span>
             );
          }

          // Handle Highlights and Regular Text
          return (
            <motion.span
              key={idx}
              className={`inline-block ${isHighlight ? highlightClassName : "text-inherit"}`}
              variants={wordVariants}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.div>
    </div>
  );
};