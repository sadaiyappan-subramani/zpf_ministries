import React from 'react';

export default function ShinyText({ 
  text, 
  disabled = false, 
  speed = 5, 
  className = '' 
}) {
  const animationDuration = `${speed}s`;

  return (
    <span 
      className={`bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
      style={{
        backgroundImage: 'linear-gradient(120deg, rgba(191, 149, 63, 0.4) 30%, rgba(252, 246, 186, 1) 50%, rgba(191, 149, 63, 0.4) 70%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animationDuration: animationDuration,
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear'
      }}
    >
      {text}
    </span>
  );
}
