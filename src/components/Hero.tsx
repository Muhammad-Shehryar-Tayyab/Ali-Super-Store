import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Apple, Carrot, ShoppingBasket } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-primary/5">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 rounded-l-[100px] -z-10 hidden lg:block transform translate-x-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              Open Every Day 8AM - 9PM
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground leading-[1.1] tracking-tight mb-6">
              Your Trusted <br/>
              <span className="text-primary">Neighborhood</span> <br/>
              Super Store
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-lg">
              Fresh Fruits, Fresh Vegetables, Grocery Essentials & Quality Products Under One Roof in Ghouri Town, Islamabad.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" asChild className="rounded-full px-8 text-base h-12 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1">
                <a href="tel:03235900737">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full px-8 text-base h-12 bg-white hover:bg-gray-50 transition-all hover:-translate-y-1">
                <a href="https://maps.google.com/maps?q=J4CR%2B7QM%2C+Main+Ghouri+Town%2C+Street+No+10%2C+Ghauri+Town%2C+Islamabad%2C+Pakistan" target="_blank" rel="noreferrer">
                  <MapPin className="mr-2 h-5 w-5 text-secondary" />
                  Get Directions
                </a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[600px]">
              <img 
                src="/images/hero.png" 
                alt="Vibrant grocery store display at Ali Super Store" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -left-6 top-1/4 bg-white p-4 rounded-2xl shadow-xl flex items-center justify-center hidden sm:flex"
            >
              <Apple className="h-8 w-8 text-red-500" />
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -right-8 bottom-1/3 bg-white p-4 rounded-2xl shadow-xl flex items-center justify-center hidden sm:flex"
            >
              <Carrot className="h-8 w-8 text-secondary" />
            </motion.div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 2 }}
              className="absolute left-1/4 -bottom-6 bg-white py-3 px-6 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="bg-accent/20 p-2 rounded-full">
                <ShoppingBasket className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">100% Fresh</p>
                <p className="font-bold text-sm">Daily Restocked</p>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Decorative Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-[100%] h-[60px] lg:h-[100px] fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.3,191.66,101.55Z"></path>
        </svg>
      </div>
    </section>
  );
}
