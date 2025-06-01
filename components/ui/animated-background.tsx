"use client"

import React, { useState, useEffect, useCallback } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

interface AnimatedBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  withGrid?: boolean;
  withFloatingIcons?: boolean;
  withParticles?: boolean;
}

interface FloatingIcon {
  icon: string;
  delay: number;
}

const defaultFloatingIcons: FloatingIcon[] = [
  { icon: "📚", delay: 0 },
  { icon: "🔬", delay: 2 },
  { icon: "📊", delay: 4 },
  { icon: "🧠", delay: 6 },
  { icon: "💡", delay: 8 },
  { icon: "📖", delay: 10 }
];

// Floating icons component
const FloatingIcons = ({ 
  icons = defaultFloatingIcons, 
  className = '' 
}: { 
  icons?: FloatingIcon[];
  className?: string;
}) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {icons.map((item, i) => (
        <div
          key={`floating-icon-${i}`}
          className="absolute text-4xl opacity-20 animate-float-slow"
          style={{
            left: `${15 + (i * 15)}%`,
            top: `${20 + (i % 2) * 30}%`,
            animationDelay: `${item.delay}s`
          }}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  className = '',
  children,
  withGrid = true,
  withFloatingIcons = true,
  withParticles = true
}) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent): void => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className={`relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ${className}`}>
      {/* Main background with animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20" />
        
        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-indigo-400/30 to-purple-400/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000" />
        
        {/* Interactive mouse follower */}
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-white/10 to-transparent rounded-full filter blur-3xl transition-all duration-1000 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
        />
        
        {/* Floating particles */}
        {withParticles && Array.from({ length: 20 }, (_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Optional floating icons */}
      {withFloatingIcons && <FloatingIcons />}
      
      {/* Optional grid pattern overlay */}
      {withGrid && (
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }} 
          />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};