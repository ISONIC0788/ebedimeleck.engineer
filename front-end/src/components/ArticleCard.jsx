import React from "react";

const ArticleCard = ({ title, date, excerpt, link }) => {
  return (
    <div className="mb-6 p-6 bg-white dark:bg-dark-card rounded-xl shadow-sm border border-transparent hover:-translate-y-1 hover:shadow-lg hover:border-primary transition-all duration-300">
      <small className="text-light-muted dark:text-dark-muted block mb-2">{date}</small>
      <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-3">{title}</h3>
      <p className="text-light-muted dark:text-dark-muted mb-4">{excerpt}</p>
      <a href={link} className="text-primary font-medium hover:underline">Read article →</a>
    </div>
  );
};

export default ArticleCard;