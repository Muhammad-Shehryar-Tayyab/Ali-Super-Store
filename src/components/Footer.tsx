import { Leaf, MapPin, Phone, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          <div className="lg:col-span-1">
            <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-2 mb-6 inline-flex">
              <div className="bg-primary text-white p-2 rounded-lg">
                <Leaf className="h-6 w-6" />
              </div>
              <span className="font-display font-bold text-2xl text-white">
                Ali Super Store
              </span>
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted neighborhood super store in Ghouri Town, providing fresh produce, groceries, and household essentials every day.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold font-display text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, "#about")} className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#products" onClick={(e) => handleNavClick(e, "#products")} className="hover:text-primary transition-colors">Products</a></li>
              <li><a href="#testimonials" onClick={(e) => handleNavClick(e, "#testimonials")} className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold font-display text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>J4CR+7QM, Main Ghouri Town, Street No 10, Ghauri Town, Islamabad</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:03235900737" className="hover:text-white transition-colors">03235900737</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold font-display text-lg mb-6">Business Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-secondary shrink-0" />
                <div>
                  <p className="text-white">Saturday - Friday</p>
                  <p className="text-sm text-gray-400">8:00 AM – 9:00 PM</p>
                </div>
              </li>
              <li className="mt-4">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-sm font-medium">
                  Open Every Day
                </span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            &copy; {currentYear} Ali Super Store. All rights reserved.
          </p>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to top
          </Button>
        </div>
      </div>
    </footer>
  );
}
