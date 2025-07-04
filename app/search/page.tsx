import { SearchResults } from '@/components/search/search-results';
import { StickySearchBar } from '@/components/search/sticky-search-bar';

// This page uses search parameters and cannot be statically generated
export const dynamic = 'force-dynamic';

export default function SearchPage({
  searchParams
}: {
  searchParams?: { q?: string; type?: string; difficulty?: string }
}) {
  const query = searchParams?.q || '';
  const type = searchParams?.type || 'all';
  const difficulty = searchParams?.difficulty || 'all';
  
  return (
    <div className="relative min-h-screen pb-32">
      <div className="container mx-auto px-4 py-8 pt-12 relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-500 animate-glow" style={{ backgroundSize: '200% 200%' }}>
          Academic Search
        </h1>
        
        {!query && (
          <div className="text-center py-16 bg-background/30 backdrop-blur-md rounded-xl p-8 shadow-xl border border-white/10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-medium mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-cyan-400 to-emerald-400">Discover Knowledge</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Enter a topic, research area, or specific question to discover relevant academic resources.
            </p>
            <p className="text-base text-muted-foreground">
              Example searches: &quot;climate change effects on coral reefs&quot;, &quot;quantum computing applications&quot;,
              &quot;early childhood development theories&quot;
            </p>
          </div>
        )}
        
        <SearchResults query={query} selectedType={type} selectedDifficulty={difficulty} />
      </div>
      
      <StickySearchBar initialQuery={query} />
    </div>
  );
}