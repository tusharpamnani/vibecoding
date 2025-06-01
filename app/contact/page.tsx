import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-muted-foreground">
          Have questions or feedback? We&apos;d love to hear from you. Reach out using any of 
          the methods below and our team will get back to you as soon as possible.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
          <Mail className="h-10 w-10 text-primary mb-4" />
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <p className="text-muted-foreground text-center mb-4">
            For general inquiries and support
          </p>
          <Link href="mailto:support@scholarsearch.example" className="text-primary hover:underline">
            support@vibecoders.dev
          </Link>
        </div>
        
        <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
          <Phone className="h-10 w-10 text-primary mb-4" />
          <h2 className="text-xl font-semibold mb-2">Phone</h2>
          <p className="text-muted-foreground text-center mb-4">
            Available Monday to Friday, 9am - 5pm EST
          </p>
          <Link href="tel:+1-555-123-4567" className="text-primary hover:underline">
            +91 11223 44556
          </Link>
        </div>
        
        <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
          <MapPin className="h-10 w-10 text-primary mb-4" />
          <h2 className="text-xl font-semibold mb-2">Office</h2>
          <p className="text-muted-foreground text-center mb-4">
            Our headquarters
          </p>
          <address className="not-italic text-center">
            Ofis India,
            Trimurtee Nagar
            Nagpur
          </address>
        </div>
      </div>
      
      <div className="max-w-2xl mx-auto p-8 bg-card rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="What is this about?"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Your message here..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}