import { motion } from "framer-motion";
import { Apple, Carrot, Package, Home, ShoppingBag, ShoppingCart } from "lucide-react";

const categories = [
  {
    title: "Fresh Fruits",
    description: "Daily fresh seasonal and exotic fruits",
    icon: <Apple className="w-6 h-6" />,
    image: "/images/fruits.png",
    color: "from-red-500/20 to-transparent",
  },
  {
    title: "Fresh Vegetables",
    description: "Crisp, healthy, farm-fresh vegetables",
    icon: <Carrot className="w-6 h-6" />,
    image: "/images/vegetables.png",
    color: "from-primary/20 to-transparent",
  },
  {
    title: "Grocery Items",
    description: "Pantry staples and cooking essentials",
    icon: <ShoppingBag className="w-6 h-6" />,
    image: "/images/grocery.png",
    color: "from-yellow-500/20 to-transparent",
  },
  {
    title: "Household Essentials",
    description: "Cleaning supplies and home care",
    icon: <Home className="w-6 h-6" />,
    image: "/images/household.png",
    color: "from-blue-500/20 to-transparent",
  },
  {
    title: "Branded Products",
    description: "Your favorite trusted brands",
    icon: <Package className="w-6 h-6" />,
    image: "/images/grocery.png", // Reusing image
    color: "from-purple-500/20 to-transparent",
  },
  {
    title: "Daily Use",
    description: "Everyday items for the family",
    icon: <ShoppingCart className="w-6 h-6" />,
    image: "/images/household.png", // Reusing image
    color: "from-secondary/20 to-transparent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-secondary uppercase mb-3">Our Offerings</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Everything You Need
          </h3>
          <p className="text-muted-foreground text-lg">
            From farm-fresh produce to your favorite branded household items, we've got your shopping list covered.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {categories.map((category, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-100">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <img 
                    src={`${import.meta.env.BASE_URL}${category.image.replace(/^\//, "")}`} 
                    alt={category.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-sm text-foreground group-hover:text-primary transition-colors">
                    {category.icon}
                  </div>
                </div>
                <div className="p-6 relative z-20 bg-white">
                  <h4 className="text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors">{category.title}</h4>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
