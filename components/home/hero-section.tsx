"use client"
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  HeroSectionProps, 
  MousePosition, 
  FloatingIcon, 
  Statistic, 
  FeatureHighlight,
  AnimatedGradientProps,
  FloatingIconsProps 
} from './types';

// Default data with proper typing
const defaultFeatures: FeatureHighlight[] = [
  { icon: '🚀', text: 'Instant Results' },
  { icon: '🎯', text: 'Smart Summaries' },
  { icon: '📈', text: 'Trend Analysis' },
  { icon: '🔍', text: 'Deep Insights' }
];

const defaultStatistics: Statistic[] = [
  { number: '1M+', label: 'Research Papers' },
  { number: '50K+', label: 'Active Researchers' },
  { number: '99.9%', label: 'Accuracy Rate' }
];

const defaultFloatingIcons: FloatingIcon[] = [
  { icon: "📚", delay: 0 },
  { icon: "🔬", delay: 2 },
  { icon: "📊", delay: 4 },
  { icon: "🧠", delay: 6 },
  { icon: "💡", delay: 8 },
  { icon: "📖", delay: 10 }
];

// Animated gradient background component
const AnimatedGradient: React.FC<AnimatedGradientProps> = ({ className = '' }) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent): void => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
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
      {Array.from({ length: 20 }, (_, i) => (
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
  );
};

// Floating icons component
const FloatingIcons: React.FC<FloatingIconsProps> = ({ 
  icons = defaultFloatingIcons, 
  className = '' 
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

// Main Hero Section component
export const HeroSection: React.FC<HeroSectionProps> = ({
  title = {
    line1: 'Discover Academic',
    line2: 'Excellence',
    subtitle: 'Powered by AI'
  },
  description = "Unlock the world's knowledge with our AI-powered search engine. Get instant summaries, discover hidden insights, and accelerate your research journey.",
  badge = {
    text: 'AI-Powered Research Assistant',
    showIndicator: true
  },
  features = defaultFeatures,
  statistics = defaultStatistics,
  buttons = {
    primary: {
      text: 'Start Searching',
      href: '/search',
      icon: '🔍'
    },
    secondary: {
      text: 'Learn More',
      href: '/about',
      icon: '📖'
    }
  },
  showScrollIndicator = true,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`relative min-h-screen flex items-center justify-center ${className}`}>
      {/* Grid pattern overlay - kept for additional texture */}
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
      
      <div className={`container relative z-10 mx-auto px-4 py-32 text-center sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Glowing badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-200 text-sm font-medium mb-8 backdrop-blur-sm">
          {badge.showIndicator && (
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
          )}
          {badge.text}
        </div>

        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
            {title.line1}
          </span>
          <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x animation-delay-1000">
            {title.line2}
          </span>
          <span className="block mt-2 text-white/90 text-2xl sm:text-3xl md:text-4xl font-light">
            {title.subtitle}
          </span>
        </h1>
        
        <p className="mt-8 max-w-2xl mx-auto text-xl text-slate-300 sm:text-2xl leading-relaxed">
          {description.split('Get instant summaries').map((part, index) => (
            <React.Fragment key={index}>
              {part}
              {index === 0 && (
                <span className="text-purple-300 font-semibold"> Get instant summaries</span>
              )}
            </React.Fragment>
          ))}
        </p>
        
        {/* Feature highlights */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          {features.map((feature, i) => (
            <div key={`feature-${i}`} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              {feature.icon} {feature.text}
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-md mx-auto sm:flex sm:justify-center md:mt-20 gap-4">
          {buttons.primary && (
            <div className="group">
              <Button 
                asChild 
                size="lg" 
                className="w-full sm:w-auto px-12 py-4 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-2xl hover:shadow-purple-500/25 border-0 font-semibold"
              >
                <Link href={buttons.primary.href}>
                  <span className="flex items-center gap-2">
                    {buttons.primary.icon} {buttons.primary.text}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </Link>
              </Button>
            </div>
          )}

          {buttons.secondary && (
            <div className="mt-4 sm:mt-0 group">
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto px-12 py-4 text-lg bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm font-semibold"
              >
                <Link href={buttons.secondary.href}>
                  <span className="flex items-center gap-2">
                    {buttons.secondary.icon} {buttons.secondary.text}
                    <span className="group-hover:rotate-12 transition-transform">✨</span>
                  </span>
                </Link>
              </Button>
            </div>
          )}
        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {statistics.map((stat, i) => (
            <div key={`stat-${i}`} className="text-center group cursor-pointer">
              <div className="text-4xl font-bold text-white group-hover:text-purple-400 transition-colors">
                {stat.number}
              </div>
              <div className="text-slate-400 mt-2 group-hover:text-slate-300 transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center animate-bounce">
          <div className="text-slate-400 text-sm mb-2">Scroll to explore</div>
          <div className="relative">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;