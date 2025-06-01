import { Lightbulb, Award, Users, BookOpen } from 'lucide-react';
import { FloatingOrb } from '@/components/home/feature-section'; // Assuming FloatingOrb is exported and path is correct

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden py-12 px-4">
      {/* Floating Orbs for background decoration */}
      <FloatingOrb className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-purple-600/40 via-cyan-500/40 to-emerald-500/40 blur-3xl opacity-50 animate-pulse-slow" />
      <FloatingOrb className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-tl from-emerald-500/40 via-cyan-500/40 to-purple-600/40 blur-3xl opacity-50 animate-pulse-slow animation-delay-2000" />
      
      <div className="container mx-auto relative z-10">
      <div className="text-center max-w-3xl mx-auto pt-8 pb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-500 animate-glow" style={{ backgroundSize: '200% 200%' }}>
          About ScholarSearch
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10">
          ScholarSearch leverages cutting-edge AI technology to transform how researchers, 
          students, and academics find and interact with scholarly content.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 my-12 bg-background/30 backdrop-blur-md rounded-xl p-8 shadow-xl border border-white/10">
        <div>
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-cyan-400 to-emerald-400">Our Mission</h2>
          <p className="text-muted-foreground mb-6">
            Our mission is to democratize access to academic knowledge by making it easier to find, 
            understand, and utilize scholarly research. We believe that AI can augment human 
            capabilities in research, enabling deeper insights and faster discoveries.
          </p>
          <p className="text-muted-foreground">
            By combining advanced search algorithms with natural language processing, we&apos;re 
            creating tools that understand the nuance and context of academic queries, delivering 
            more relevant results than traditional keyword searches.
          </p>
        </div>
        
        <div className="bg-muted/50 rounded-lg p-8 border border-white/10 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-cyan-400 to-emerald-400">Why Choose ScholarSearch?</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Award className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
              <span>Access to high-quality, peer-reviewed research from reputable sources</span>
            </li>
            <li className="flex items-start">
              <Lightbulb className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
              <span>AI-powered search that understands context and academic terminology</span>
            </li>
            <li className="flex items-start">
              <Users className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
              <span>Built by researchers, for researchers - we understand your needs</span>
            </li>
            <li className="flex items-start">
              <BookOpen className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
              <span>Continuously expanding database of scholarly articles and resources</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="py-16 my-12 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-500 animate-glow" style={{ backgroundSize: '200% 200%' }}>Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Dr. Emily Chen', role: 'Founder & CEO', bio: 'Former professor with expertise in machine learning and information retrieval.' },
            { name: 'Mark Rodriguez', role: 'CTO', bio: 'AI researcher with 15 years of experience in natural language processing.' },
            { name: 'Dr. Sarah Johnson', role: 'Chief Research Officer', bio: 'Academic librarian turned tech innovator, passionate about knowledge accessibility.' }
          ].map((person, idx) => (
            <div key={idx} className="text-center bg-background/30 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/10 hover:shadow-purple-500/20 transition-shadow duration-300">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-600/30 via-cyan-500/30 to-emerald-500/30 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-white/20 shadow-inner">
                {/* Placeholder for image or icon */}
                <Users className="w-16 h-16 text-cyan-400 opacity-70" />
              </div>
              <h3 className="font-bold text-lg">{person.name}</h3>
              <p className="text-primary text-sm mb-2">{person.role}</p>
              <p className="text-muted-foreground text-sm">{person.bio}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}