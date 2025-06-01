"use client"
import { useState, useEffect, useRef } from 'react';
import { BookOpen, Search, Brain, Clock } from 'lucide-react';

const features = [
  {
    name: 'Academic Excellence',
    description: 'Access high-quality scholarly articles from top academic sources and journals worldwide.',
    icon: BookOpen,
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
    hoverGradient: 'from-purple-600 to-pink-600',
    accentColor: 'purple',
  },
  {
    name: 'AI-Powered Search',
    description: 'Our intelligent search understands the context and nuance of your academic queries.',
    icon: Search,
    gradient: 'from-cyan-500 to-blue-500',
    bgGradient: 'from-cyan-500/10 to-blue-500/10',
    hoverGradient: 'from-cyan-600 to-blue-600',
    accentColor: 'cyan',
  },
  {
    name: 'Smart Summaries',
    description: 'Get AI-generated summaries of complex papers to quickly determine relevance.',
    icon: Brain,
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
    hoverGradient: 'from-emerald-600 to-teal-600',
    accentColor: 'emerald',
  },
  {
    name: 'Save Time',
    description: 'Find exactly what you need without wading through pages of irrelevant search results.',
    icon: Clock,
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-500/10 to-red-500/10',
    hoverGradient: 'from-orange-600 to-red-600',
    accentColor: 'orange',
  },
];

// Floating orb component for background decoration
export const FloatingOrb = ({ className, delay, size, position, color }: { className?: string; delay?: number; size?: string; position?: string; color?: string; }) => (
  <div
    className={`absolute ${size} ${position} ${color} rounded-full mix-blend-multiply filter blur-xl animate-float-orb opacity-30 ${className}`}
    style={{ animationDelay: `${delay || 0}s` }}
  />
);

// Original FloatingOrb for internal use if needed, or remove if FloatingOrb above covers all cases.
const InternalFloatingOrb = ({ delay, size, position, color }: { delay: number; size: string; position: string; color: string; }) => (
  <div
    className={`absolute ${size} ${position} ${color} rounded-full mix-blend-multiply filter blur-xl animate-float-orb opacity-30`}
    style={{ animationDelay: `${delay}s` }}
  />
);

// Individual feature card component
const FeatureCard = ({
  feature,
  index,
  isVisible
}: {
  feature: {
    name: string;
    description: string;
    icon: React.ElementType;
    gradient: string;
    bgGradient: string;
    hoverGradient: string;
    accentColor: string;
  };
  index: number;
  isVisible: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      style={{ transitionDelay: `${index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card glow effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`} />

      {/* Main card */}
      <div className={`relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full transition-all duration-500 group-hover:border-slate-600/50 group-hover:bg-slate-800/50 group-hover:scale-105 group-hover:shadow-2xl`}>

        {/* Background gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        {/* Floating particles inside card */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-white/20 rounded-full animate-float-particle opacity-0 group-hover:opacity-100`}
              style={{
                left: `${20 + (i * 15)}%`,
                top: `${30 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Icon container */}
        <div className="relative z-10 -mt-4">
          <div className={`inline-flex items-center justify-center p-4 bg-gradient-to-r ${feature.gradient} rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
            <feature.icon className="h-8 w-8 text-white" />
          </div>

          {/* Icon glow */}
          <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
        </div>

        {/* Content */}
        <div className="relative z-10 mt-8">
          <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-500">
            {feature.name}
          </h3>
          <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-500">
            {feature.description}
          </p>
        </div>

        {/* Hover effect arrow */}
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
          <div className={`w-8 h-8 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center`}>
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export function FeatureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          {/* Floating orbs */}
          <FloatingOrb
            delay={0}
            size="w-64 h-64"
            position="top-20 left-10"
            color="bg-gradient-to-r from-purple-500/20 to-pink-500/20"
          />
          <FloatingOrb
            delay={3}
            size="w-48 h-48"
            position="top-40 right-20"
            color="bg-gradient-to-r from-cyan-500/20 to-blue-500/20"
          />
          <FloatingOrb
            delay={6}
            size="w-56 h-56"
            position="bottom-32 left-1/4"
            color="bg-gradient-to-r from-emerald-500/20 to-teal-500/20"
          />

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px'
              }}
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header section */}
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-200 text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Features
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                A better way to
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                research
              </span>
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed">
              ScholarSearch combines{' '}
              <span className="text-purple-300 font-semibold">AI technology</span>{' '}
              with academic rigor to transform how you find and consume scholarly content.
            </p>
          </div>

          {/* Features grid */}
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.name}
                  feature={feature}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>

          {/* Bottom CTA section */}
          <div className={`mt-20 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 text-slate-400 text-sm">
              <span>Ready to transform your research?</span>
              <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Custom CSS animations */}
        <style jsx>{`
          @keyframes gradient-x {
            0%, 100% {
              background-size: 200% 200%;
              background-position: left center;
            }
            50% {
              background-size: 200% 200%;
              background-position: right center;
            }
          }
          
          @keyframes float-orb {
            0%, 100% { 
              transform: translateY(0px) translateX(0px) rotate(0deg); 
            }
            33% { 
              transform: translateY(-20px) translateX(10px) rotate(120deg); 
            }
            66% { 
              transform: translateY(-10px) translateX(-5px) rotate(240deg); 
            }
          }
          
          @keyframes float-particle {
            0%, 100% { 
              transform: translateY(0px) scale(1); 
              opacity: 0.3;
            }
            50% { 
              transform: translateY(-15px) scale(1.2); 
              opacity: 0.8;
            }
          }
          
          .animate-gradient-x {
            animation: gradient-x 8s ease infinite;
          }
          
          .animate-float-orb {
            animation: float-orb 25s ease-in-out infinite;
          }
          
          .animate-float-particle {
            animation: float-particle 4s ease-in-out infinite;
          }
        `}</style>
      </div>
    </div>
  );
}