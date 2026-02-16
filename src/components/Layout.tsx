import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Mail, MapPin, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PARTNERSHIP_INFO, ROUTE_PATHS } from "@/lib";
import { Button } from "@/components/ui/button";
import Dice from "../assets/dice-logo.png"
import SQIT from "../assets/SQIT.webp"

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
    { name: "Compliance Gap", href: "#compliance-gap" },
    { name: "Platform", href: "#dice-platform" },
    { name: "E-Invoicing", href: "#e-invoicing" },
    { name: "Partnership", href: "#sqit-partnership" },
    { name: "Outcomes", href: "#outcomes" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-primary/10 selection:text-primary">
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? "h-20 border-b border-border/60 bg-white/95 backdrop-blur-xl shadow-lg"
            : "h-24 bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto flex h-full items-center justify-between px-6 lg:px-8">
          <Link
            to={ROUTE_PATHS.HOME}
            className="group flex items-center gap-3 font-serif tracking-tight"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src={Dice} alt="Dice" className="h-7 w-auto transition-transform group-hover:scale-105" />
            <span className="text-slate-300 font-light text-2xl">×</span>
            <img src={SQIT} alt="SQIT" className="h-12 w-auto transition-transform group-hover:scale-105" />
          </Link>

          <nav className="hidden lg:flex lg:items-center lg:gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:text-primary hover:bg-slate-50 rounded-lg"
              >
                {link.name}
              </button>
            ))}
            <Button 
              variant="default" 
              size="sm" 
              className="ml-6 font-semibold shadow-md bg-primary hover:bg-primary/90 px-6"
              onClick={() => scrollToSection("#cta")}
            >
              Contact Us
            </Button>
          </nav>

          <button
            className="flex p-2 lg:hidden hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6 text-slate-700" /> : <Menu className="h-6 w-6 text-slate-700" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full overflow-hidden border-b border-border bg-white shadow-xl lg:hidden"
            >
              <div className="flex flex-col space-y-1 p-6">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 px-4 py-3 rounded-lg transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
                <Button 
                  className="w-full mt-4" 
                  onClick={() => scrollToSection("#cta")}
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="grow">{children}</main>

      <footer className="border-t border-slate-200 bg-slate-50 pt-20 pb-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Link 
                to={ROUTE_PATHS.HOME} 
                className="inline-flex items-center gap-3 font-serif tracking-tight mb-6"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <img src={Dice} alt="Dice" className="h-6 w-auto" />
                <span className="text-slate-300 font-light text-xl">×</span>
                <img src={SQIT} alt="SQIT" className="h-10 w-auto" />
              </Link>
              <p className="max-w-md text-base leading-relaxed text-slate-600 font-light">
                {PARTNERSHIP_INFO.tagline}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 lg:col-span-4">
              <div>
                <h4 className="mb-6 text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">Platform</h4>
                <ul className="space-y-3">
                  <li>
                    <button 
                      onClick={() => scrollToSection("#compliance-gap")}
                      className="text-sm text-slate-600 hover:text-primary transition-colors"
                    >
                      Compliance Gap
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection("#dice-platform")}
                      className="text-sm text-slate-600 hover:text-primary transition-colors"
                    >
                      Dice Platform
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection("#e-invoicing")}
                      className="text-sm text-slate-600 hover:text-primary transition-colors"
                    >
                      E-Invoicing
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection("#outcomes")}
                      className="text-sm text-slate-600 hover:text-primary transition-colors"
                    >
                      Outcomes
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-6 text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">Partnership</h4>
                <ul className="space-y-3">
                  <li>
                    <button 
                      onClick={() => scrollToSection("#sqit-partnership")}
                      className="text-sm text-slate-600 hover:text-primary transition-colors"
                    >
                      SQIT Partnership
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection("#compliance-gap")}
                      className="text-sm text-slate-600 hover:text-primary transition-colors"
                    >
                      About the Bridge
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection("#dice-platform")}
                      className="text-sm text-slate-600 hover:text-primary transition-colors"
                    >
                      Capabilities
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3">
              <h4 className="mb-6 text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm text-slate-600 leading-relaxed">
                    Enterprise Hub, Level 12<br />
                    DIFC, Dubai, UAE
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  <a 
                    href="mailto:partnerships@dice-sqit.com"
                    className="text-sm text-slate-600 hover:text-primary transition-colors"
                  >
                    partnerships@dice-sqit.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm text-slate-600">
                    +971 4 XXX XXXX
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-200 pt-10 md:flex-row">
            <p className="text-xs text-slate-500 font-light">
              © {PARTNERSHIP_INFO.year} {PARTNERSHIP_INFO.name} Partnership. All rights reserved.
            </p>
            <div className="flex gap-8">
              <button className="text-xs text-slate-500 hover:text-primary transition-colors font-light">
                Privacy Policy
              </button>
              <button className="text-xs text-slate-500 hover:text-primary transition-colors font-light">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}