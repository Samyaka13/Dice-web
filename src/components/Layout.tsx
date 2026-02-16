import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ExternalLink, ChevronRight, Mail, MapPin, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PARTNERSHIP_INFO, ROUTE_PATHS } from "@/lib";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "The Gap", href: "#why-partnership" },
    { name: "Expertise", href: "#what-sqit-brings" },
    { name: "Solutions", href: "#how-we-solve" },
    { name: "Outcomes", href: "#outcomes" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-primary/20 selection:text-primary">
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "h-16 border-b border-border/40 bg-background/80 backdrop-blur-md shadow-sm"
            : "h-20 bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-full items-center justify-between px-4">
          <Link
            to={ROUTE_PATHS.HOME}
            className="group flex items-center gap-2 font-mono text-xl font-bold tracking-tighter"
          >
            <span className="text-accent">Dice</span>
            <span className="text-muted-foreground/40">×</span>
            <span className="text-primary">SQIT</span>
          </Link>

          <nav className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.name}
              </a>
            ))}
            <Button variant="default" size="sm" className="ml-4 font-semibold shadow-md" asChild>
              <a href="#cta">Contact Experts</a>
            </Button>
          </nav>

          <button
            className="flex p-2 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col space-y-4 p-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <Button className="w-full" asChild>
                  <a href="#cta" onClick={() => setIsMobileMenuOpen(false)}>
                    Get Started
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="border-t border-border bg-secondary/30 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Link to={ROUTE_PATHS.HOME} className="inline-flex items-center gap-2 font-mono text-2xl font-bold tracking-tighter mb-4">
                <span className="text-accent">Dice</span>
                <span className="text-muted-foreground/40">×</span>
                <span className="text-primary">SQIT</span>
              </Link>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                {PARTNERSHIP_INFO.tagline}
              </p>
              <div className="mt-8 flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full border-border/50 bg-background/50">
                  <Globe className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-border/50 bg-background/50">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 lg:col-span-5">
              <div>
                <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-primary">Solutions</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">ERP Integration</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Procurement Automation</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Compliance Engine</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Process Analytics</a></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-primary">Partnership</h4>
                <ul className="space-y-3">
                  <li><a href="#why-partnership" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About the Bridge</a></li>
                  <li><a href="#what-sqit-brings" className="text-sm text-muted-foreground hover:text-foreground transition-colors">SQIT Capabilities</a></li>
                  <li><a href="#what-dice-adds" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Dice Automation</a></li>
                  <li><a href="#mena-market" className="text-sm text-muted-foreground hover:text-foreground transition-colors">MENA Context</a></li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3">
              <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-primary">Global Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 text-accent" />
                  <span className="text-sm text-muted-foreground">
                    Enterprise Hub, Level 12<br />
                    DIFC, Dubai, UAE
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-accent" />
                  <span className="text-sm text-muted-foreground">partnerships@dice-sqit.com</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button variant="secondary" size="sm" className="w-full justify-between font-medium group border border-border/40">
                  Inquire about deployment
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-border/50 pt-8 md:flex-row">
            <p className="text-xs text-muted-foreground">
              © {PARTNERSHIP_INFO.year} {PARTNERSHIP_INFO.name} Partnership. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Service Level Agreement</a>
              <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
