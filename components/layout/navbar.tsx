'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Search, BookOpenCheck, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/theme/mode-toggle';

// Add animation keyframes to global CSS via a style tag
const NavbarGlow = () => (
  <style jsx global>{`
    @keyframes glow {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `}</style>
);

const navItems = [
  { name: 'Home', path: '/', icon: BookOpen },
  { name: 'Search', path: '/search', icon: Search },
  { name: 'About', path: '/about', icon: BookOpenCheck },
  { name: 'Contact', path: '/contact', icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <NavbarGlow />
      <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-xl shadow-md' : 'bg-background/50 backdrop-blur-sm'}`}>
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative overflow-hidden rounded-full p-1">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-500 opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-[glow_3s_ease-in-out_infinite]" style={{ backgroundSize: '200% 200%' }} />
              <div className="relative bg-background rounded-full p-1">
                <BookOpen className="h-5 w-5 text-foreground" />
              </div>
            </div>
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-500 animate-[glow_3s_ease-in-out_infinite]" style={{ backgroundSize: '200% 200%' }}>ScholarSearch</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              const Icon = item.icon;
              
              return (
                <Button
                  key={item.path}
                  variant="ghost"
                  asChild
                  className={`text-sm font-medium relative group overflow-hidden ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  <Link href={item.path} className="flex items-center space-x-1">
                    {isActive && (
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-emerald-500/10 opacity-50" />
                    )}
                    <Icon className="h-4 w-4 mr-1" />
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-cyan-500 to-emerald-500 transform origin-left animate-[glow_3s_ease-in-out_infinite]" style={{ backgroundSize: '200% 200%' }} />
                    )}
                  </Link>
                </Button>
              );
            })}
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="relative overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-500 opacity-75 animate-[glow_3s_ease-in-out_infinite]" style={{ backgroundSize: '200% 200%' }} />
              <div className="relative p-[1px]">
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Add a spacer to prevent content from hiding behind the fixed navbar */}
      <div className="h-16" />
    </>
  );
}