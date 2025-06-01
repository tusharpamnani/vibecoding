'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Search, BookOpenCheck, Mail, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/theme/mode-toggle';

const navItems = [
  { name: 'Home', path: '/', icon: BookOpen },
  { name: 'Search', path: '/search', icon: Search },
  { name: 'About', path: '/about', icon: BookOpenCheck },
  { name: 'Contact', path: '/contact', icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav 
        className={`w-full fixed top-0 z-50 transition-all duration-700 ${
          scrolled 
            ? 'bg-background/80 backdrop-blur-xl shadow-2xl border-b border-purple-500/20' 
            : 'bg-background/60 backdrop-blur-sm'
        }`}
      >
        {/* Animated background effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-r from-purple-600/5 via-cyan-500/5 to-emerald-500/5 transition-opacity duration-700 ${scrolled ? 'opacity-100' : 'opacity-50'} animate-gradient-x`} />
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-float opacity-30" />
          <div className="absolute top-0 right-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-float-slow opacity-30" />
        </div>
        
        <div className="container flex h-16 items-center justify-between relative z-10">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative overflow-hidden rounded-full p-2">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-500 opacity-80 group-hover:opacity-100 transition-all duration-500 animate-gradient-x rounded-full" />
              <div className="relative bg-background/90 backdrop-blur-sm rounded-full p-1.5 border border-white/10">
                <BookOpen className="h-5 w-5 text-foreground group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-500 animate-gradient-x">
                ScholarSearch
              </span>
              <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-500 transition-all duration-500 animate-gradient-x" />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => {
              const isActive = pathname === item.path;
              const Icon = item.icon;
              
              return (
                <div key={item.path} className="relative group">
                  <Button
                    variant="ghost"
                    asChild
                    className={`text-sm font-medium relative overflow-hidden px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'text-foreground bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-emerald-500/20' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Link href={item.path} className="flex items-center space-x-2 relative z-10">
                      <Icon className={`h-4 w-4 transition-all duration-300 ${
                        isActive 
                          ? 'text-purple-400 scale-110' 
                          : 'group-hover:scale-110 group-hover:text-cyan-400'
                      }`} />
                      <span className="transition-all duration-300 group-hover:translate-x-0.5">
                        {item.name}
                      </span>
                    </Link>
                  </Button>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-purple-500 via-cyan-500 to-emerald-500 animate-gradient-x rounded-full" />
                  )}
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-emerald-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
                </div>
              );
            })}
          </div>
          
          {/* Right section */}
          <div className="flex items-end justify-end">
            {/* Theme Toggle */}
            <div className="relative overflow-hidden rounded-full group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-500 opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-x rounded-full" />
              <div className="relative p-[1px] rounded-full">
                <div className="bg-background/90 backdrop-blur-sm rounded-full">
                  {/* <ModeToggle /> */}
                </div>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden relative overflow-hidden rounded-full p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-emerald-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full" />
              <div className="relative z-10">
                {mobileMenuOpen ? (
                  // <X className="h-5 w-5 transition-transform duration-300 rotate-90" /> 
                  ""
                ) : (
                  <Menu className="h-5 w-5 transition-transform duration-300" />
                )}
              </div>
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-purple-500/20 transition-all duration-500 ${
          mobileMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-cyan-500/5 to-emerald-500/5 animate-gradient-x" />
          <div className="container py-4 relative z-10">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => {
                const isActive = pathname === item.path;
                const Icon = item.icon;
                
                return (
                  <Button
                    key={item.path}
                    variant="ghost"
                    asChild
                    className={`justify-start text-left relative overflow-hidden transition-all duration-300 ${
                      isActive 
                        ? 'text-foreground bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-emerald-500/20' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                    }`}
                    style={{ 
                      animationDelay: `${index * 50}ms`,
                      transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                      transition: `all 0.3s ease ${index * 50}ms`
                    }}
                  >
                    <Link href={item.path} className="flex items-center space-x-3 w-full py-2">
                      <Icon className={`h-5 w-5 transition-colors duration-300 ${
                        isActive ? 'text-purple-400' : ''
                      }`} />
                      <span>{item.name}</span>
                      {isActive && (
                        <div className="ml-auto w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse" />
                      )}
                    </Link>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
      
      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}