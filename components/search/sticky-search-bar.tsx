'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface StickySearchBarProps {
  initialQuery?: string;
}

export function StickySearchBar({ initialQuery = '' }: StickySearchBarProps) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-background/80 backdrop-blur-xl border-t border-white/10 p-4 shadow-2xl">
      <form onSubmit={handleSearch} className="container mx-auto max-w-3xl">
        <div className="relative flex items-center">
          <Input
            type="text"
            placeholder="Search for academic topics..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pr-24 h-12 rounded-full pl-5 bg-background/70 border-white/20 focus:border-purple-500/50 focus:ring-purple-500/50 text-white placeholder:text-muted-foreground/80"
            autoComplete="off"
          />
          <Button 
            type="submit" 
            size="sm" 
            className="absolute right-1 rounded-full px-4 h-10 bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-500 hover:opacity-90 transition-opacity text-white shadow-md hover:shadow-lg"
          >
            <Search className="h-4 w-4 mr-2" />
            <span>Search</span>
          </Button>
        </div>
      </form>
    </div>
  );
}