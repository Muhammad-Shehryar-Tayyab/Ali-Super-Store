import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, Leaf } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Why Us", href: "#why-us" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Location", href: "#location" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />
      <header
        className={`fixed top-1 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-2 group">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg group-hover:scale-105 transition-transform">
                <Leaf className="h-6 w-6" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-foreground">
                Ali Super Store
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isScrolled ? "text-foreground/80" : "text-foreground/90"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <Button asChild className="rounded-full shadow-md hover:shadow-lg transition-all group">
                <a href="tel:03235900737">
                  <Phone className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                  Call Now
                </a>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-border/50 py-4 px-4 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-foreground/80 hover:text-primary px-2 py-1"
              >
                {link.name}
              </a>
            ))}
            <Button asChild className="w-full rounded-lg mt-2">
              <a href="tel:03235900737">
                <Phone className="mr-2 h-4 w-4" />
                Call Now: 03235900737
              </a>
            </Button>
          </motion.div>
        )}
      </header>
    </>
  );
}
