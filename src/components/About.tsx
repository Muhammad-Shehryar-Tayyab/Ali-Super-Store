import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Counter({ end, label, suffix = "" }: { end: number, label: string, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="flex flex-col items-center p-4">
      <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base text-muted-foreground font-medium text-center">
        {label}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-[600px]">
              <img 
                src={`${import.meta.env.BASE_URL}images/about.png`} 
                alt="Inside Ali Super Store" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative block */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-full -z-10 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full -z-10 blur-xl"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-sm font-bold tracking-wider text-secondary uppercase mb-3">About Us</h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Serving the Ghouri Town Community
            </h3>
            
            <div className="space-y-4 text-muted-foreground text-lg mb-8">
              <p>
                Ali Super Store has been a cornerstone of the Ghouri Town community, providing families with access to fresh, high-quality groceries right in their neighborhood.
              </p>
              <p>
                We pride ourselves on offering fresh fruits and vegetables daily, sourced carefully to ensure the best quality. From branded grocery items to household essentials, our shelves are stocked to meet all your daily needs.
              </p>
              <p>
                Our focus has always been on customer satisfaction — creating a warm, clean, and welcoming environment where you can shop with confidence.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <Counter end={500} suffix="+" label="Products" />
              <Counter end={59} suffix="+" label="Reviews" />
              <Counter end={7} label="Days a Week" />
              <Counter end={100} suffix="%" label="Fresh" />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
