'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Floating orb component for background decoration
const FloatingOrb = ({ delay, size, position, color }: { delay: number; size: string; position: string; color: string; }) => (
  <div
    className={`absolute ${size} ${position} ${color} rounded-full mix-blend-multiply filter blur-xl animate-float-orb opacity-30`}
    style={{ animationDelay: `${delay}s` }}
  />
);

const testimonials = [
  {
    content: "ScholarSearch has revolutionized how I conduct research for my PhD. The AI summaries save me hours of reading irrelevant papers.",
    author: "Dr. Sarah Chen",
    role: "Research Fellow, MIT",
    avatar: "SC"
  },
  {
    content: "As a professor, I recommend ScholarSearch to all my students. It's like having a research assistant that works 24/7.",
    author: "Prof. James Miller",
    role: "Professor of History, Oxford",
    avatar: "JM"
  },
  {
    content: "The quality of search results is outstanding. I've discovered papers I would have missed using traditional search methods.",
    author: "Alex Rodriguez",
    role: "Doctoral Candidate, Stanford",
    avatar: "AR"
  }
];

export function TestimonialSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('testimonial-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonial-section" className="py-24 relative overflow-hidden bg-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingOrb delay={0} size="w-64 h-64" position="-top-20 -left-20" color="bg-purple-400" />
        <FloatingOrb delay={2} size="w-72 h-72" position="top-40 -right-20" color="bg-cyan-400" />
        <FloatingOrb delay={4} size="w-80 h-80" position="bottom-10 left-40" color="bg-emerald-400" />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-3xl" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-600">
            What Researchers Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="h-full bg-background/50 backdrop-blur-lg border border-muted hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="pt-6 relative z-10">
                  <div className="space-y-4">
                    <p className="text-card-foreground italic">&quot;{testimonial.content}&quot;</p>
                    
                    <div className="flex items-center pt-4">
                      <Avatar className="h-10 w-10 mr-4 ring-2 ring-primary/20">
                        <AvatarFallback className="bg-gradient-to-br from-purple-500 to-cyan-500 text-white">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-sm">{testimonial.author}</p>
                        <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}