import Link from 'next/link';
import { BookOpen, Twitter, Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-background/95 backdrop-blur-xl border-t border-border/50 overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/10 via-cyan-500/10 to-emerald-500/10 animate-gradient-x" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl animate-float opacity-30" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-500/20 to-transparent rounded-full blur-3xl animate-float-slow opacity-30" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/15 to-transparent rounded-full blur-2xl animate-pulse-slow opacity-40" />
      </div>

      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand Section */}
          <div className="md:col-span-1 space-y-6">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative overflow-hidden rounded-full p-2">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-500 opacity-80 group-hover:opacity-100 transition-all duration-500 animate-gradient-x rounded-full animate-glow" />
                <div className="relative bg-background/90 backdrop-blur-sm rounded-full p-2 border border-white/10">
                  <BookOpen className="h-7 w-7 text-foreground group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <div>
                <h2 className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-500 animate-gradient-x">
                  ScholarSearch
                </h2>
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-500 transition-all duration-500 mt-1" />
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Empowering researchers with AI-enhanced academic search tools for breakthrough discoveries.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {[
                { icon: Twitter, href: "#", delay: "0ms" },
                { icon: Github, href: "#", delay: "100ms" },
                { icon: Linkedin, href: "#", delay: "200ms" }
              ].map(({ icon: Icon, href, delay }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="relative group text-muted-foreground hover:text-foreground transition-all duration-300"
                  style={{ animationDelay: delay }}
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-emerald-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse-slow blur-sm" />
                  <div className="relative p-2 rounded-full border border-transparent group-hover:border-purple-500/30 transition-all duration-300 bg-background/50 group-hover:bg-background/80 backdrop-blur-sm">
                    <Icon className="h-5 w-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg relative">
              Product
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-500 animate-gradient-x" />
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Search", href: "/search" },
                { label: "Pricing", href: "/billing" },
                { label: "Features", href: "/features" }
              ].map(({ label, href }, index) => (
                <li key={index}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground transition-all duration-300 group flex items-center space-x-2"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold text-lg relative">
              Company
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 animate-gradient-x" />
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Careers", href: "/careers" },
                { label: "Blog", href: "/blog" }
              ].map(({ label, href }, index) => (
                <li key={index}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground transition-all duration-300 group flex items-center space-x-2"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold text-lg relative">
              Legal
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-purple-500 animate-gradient-x" />
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Cookie Policy", href: "/cookies" },
                { label: "GDPR", href: "/gdpr" }
              ].map(({ label, href }, index) => (
                <li key={index}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground transition-all duration-300 group flex items-center space-x-2"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-emerald-500 to-purple-500 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative mt-16 pt-8">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-muted-foreground">
            <p className="flex items-center space-x-2">
              <span>&copy; {new Date().getFullYear()}</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-500 animate-gradient-x font-semibold">
                ScholarSearch
              </span>
              <span>All rights reserved.</span>
            </p>

            <div className="flex items-center space-x-6 text-xs">
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse" />
                <span>All systems operational</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-purple-500/50 via-cyan-500/50 to-emerald-500/50 animate-gradient-x" />
    </footer>
  );
} 