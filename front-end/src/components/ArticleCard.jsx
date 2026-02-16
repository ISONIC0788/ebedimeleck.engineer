import React from "react";
import { Link } from "react-router-dom"; // Or use <a> if external link

const ArticleCard = ({ index, title, date, excerpt, link }) => {
  // Format the index to be 2 digits (e.g., 01, 02)
  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <div className="group mb-10 flex gap-4 md:gap-6 items-start">
      {/* Number Index */}
      <span className="text-sm font-mono text-gray-500 pt-1 flex-shrink-0">
        {formattedIndex}.
      </span>

      <div className="flex-grow">
        {/* Title Link */}
        <a 
          href={link} 
          className="block text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors"
        >
          {title}
        </a>

        {/* Date */}
        <div className="text-sm text-gray-500 font-mono mb-2">
          {date}
        </div>
        
        {/* Optional Excerpt (hidden on small screens if desired, or kept subtle) */}
        {excerpt && (
            <p className="text-gray-400 text-sm leading-relaxed max-w-2xl hidden md:block">
                {excerpt}
            </p>
        )}
      </div>
    </div>
  );
};

export default ArticleCard;