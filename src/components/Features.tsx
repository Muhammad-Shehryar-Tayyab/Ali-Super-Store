import { motion } from "framer-motion";
import { Leaf, RefreshCcw, Home, ShoppingBag, Truck, HeadphonesIcon } from "lucide-react";

const features = [
  { name: "Fresh Produce", icon: <Leaf className="w-6 h-6" /> },
  { name: "Daily Stock Updates", icon: <RefreshCcw className="w-6 h-6" /> },
  { name: "Household Products", icon: <Home className="w-6 h-6" /> },
  { name: "Grocery Essentials", icon: <ShoppingBag className="w-6 h-6" /> },
  { name: "Free Delivery", icon: <Truck className="w-6 h-6" /> },
  { name: "Customer Support", icon: <HeadphonesIcon className="w-6 h-6" /> },
];

export default function Features() {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-50"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="text-sm font-semibold text-center text-foreground">{feature.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
