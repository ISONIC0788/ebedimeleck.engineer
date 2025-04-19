import React from 'react';
; // Import the CSS file

import "../styles/navbar.scss";

const LoadingDots = () => {
  return (
    // <div className="loading-container d-flex justify-content-center align-items-center mt-5">
    //   <span className="dot">.</span>
    //   <span className="dot">.</span>
    //   <span className="dot">.</span>
    // </div>
    <div className="loading-container">
      <span className="dot">.</span>
      <span className="dot">.</span>
      <span className="dot">.</span>
    </div>
  );
};

export default LoadingDots;
