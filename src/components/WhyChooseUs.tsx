import { motion } from "framer-motion";
import { CheckCircle2, ShoppingCart, MapPin, Smile, Truck, ShieldCheck } from "lucide-react";

const benefits = [
  {
    title: "Fresh Products Daily",
    description: "New stock of fruits and vegetables arrives every morning.",
    icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
  },
  {
    title: "Wide Product Variety",
    description: "Thousands of items including local and imported brands.",
    icon: <ShoppingCart className="w-8 h-8 text-secondary" />,
  },
  {
    title: "Convenient Location",
    description: "Heart of Ghouri Town, Street 10, easily accessible.",
    icon: <MapPin className="w-8 h-8 text-accent" />,
  },
  {
    title: "Friendly Service",
    description: "Our staff is always ready to assist you with a smile.",
    icon: <Smile className="w-8 h-8 text-primary" />,
  },
  {
    title: "Free Home Delivery",
    description: "Get your groceries delivered right to your doorstep.",
    icon: <Truck className="w-8 h-8 text-secondary" />,
  },
  {
    title: "Trusted by Locals",
    description: "The preferred shopping destination for families here.",
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-32 relative bg-primary/90 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-secondary/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-accent uppercase mb-3">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            The Ali Super Store Difference
          </h3>
          <p className="text-primary-foreground/80 text-lg">
            We don't just sell groceries; we provide a convenient, pleasant, and reliable shopping experience for our neighbors.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-colors group"
            >
              <div className="bg-white p-3 rounded-xl inline-block mb-5 shadow-lg group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
              <p className="text-white/80 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Top and bottom wave dividers */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-[100%] h-[40px] fill-gray-50">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.3,191.66,101.55Z"></path>
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-[100%] h-[40px] fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.3,191.66,101.55Z"></path>
        </svg>
      </div>
    </section>
  );
}
