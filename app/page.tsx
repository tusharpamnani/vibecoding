import { HeroSection } from '@/components/home/hero-section';
import { FeatureSection } from '@/components/home/feature-section';
import { TestimonialSection } from '@/components/home/testimonial-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your research?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of academics, researchers, and students who are discovering
            new knowledge faster than ever before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/search" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring h-10 px-4 py-2 bg-primary text-primary-foreground shadow hover:bg-primary/90">
              Start Searching
            </a>

          </div>
        </div>
      </section>
    </>
  );
}