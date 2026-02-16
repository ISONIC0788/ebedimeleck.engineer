import React from 'react';

const LoadingDots = () => {
  return (
    <div className="flex justify-center items-center gap-1 text-5xl text-primary font-bold">
      <span className="animate-blink">.</span>
      <span className="animate-blink [animation-delay:0.3s]">.</span>
      <span className="animate-blink [animation-delay:0.6s]">.</span>
    </div>
  );
};

export default LoadingDots;