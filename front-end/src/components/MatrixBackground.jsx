import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Function to set canvas size
    const resizeCanvas = () => {
      // Use document.documentElement.scrollWidth to cover full scrollable width if needed
      // But typically for a background, innerWidth/Height is safer to prevent infinite grow loop
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initial Resize
    resizeCanvas();

    // Matrix characters
    const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charArray = chars.split('');

    const fontSize = 14;
    
    // Initialize drops
    // We need to re-calculate columns whenever we resize, so we'll store drops in a let variable
    let columns = Math.ceil(canvas.width / fontSize);
    let drops = [];

    // Initialize drops array
    const initDrops = () => {
        columns = Math.ceil(canvas.width / fontSize);
        drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100; // Start at random negative y positions for stagger
        }
    };

    initDrops();

    // Handle Resize specifically to reset columns
    const handleResize = () => {
        resizeCanvas();
        initDrops();
    };

    window.addEventListener('resize', handleResize);

    const draw = () => {
      // Semi-transparent black to create fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00bfa6'; // Primary Teal
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };

    // Start loop
    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0 opacity-20"
      style={{ display: 'block' }}
    />
  );
};

export default MatrixBackground;