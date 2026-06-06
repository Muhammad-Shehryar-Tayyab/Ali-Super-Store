import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Location() {
  return (
    <section id="location" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-secondary uppercase mb-3">Find Us</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Visit Our Store
          </h3>
          <p className="text-muted-foreground text-lg">
            Conveniently located in the heart of Ghouri Town. We are open every day to serve you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 h-full">
              <h4 className="text-2xl font-bold font-display mb-8">Store Details</h4>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1">Address</h5>
                    <p className="text-muted-foreground">
                      J4CR+7QM, Main Ghouri Town, Street No 10, Ghauri Town, Islamabad, Pakistan
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-secondary/10 text-secondary rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1">Business Hours</h5>
                    <p className="text-muted-foreground">
                      Saturday to Friday<br/>
                      8:00 AM – 9:00 PM<br/>
                      <span className="text-primary font-medium mt-1 inline-block">Open Every Day</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-accent/20 text-yellow-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1">Phone & WhatsApp</h5>
                    <p className="text-muted-foreground">
                      <a href="tel:03235900737" className="hover:text-primary transition-colors block">03235900737</a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <Button asChild className="w-full h-12 rounded-xl text-base shadow-md">
                  <a href="https://maps.google.com/maps?q=J4CR%2B7QM%2C+Main+Ghouri+Town%2C+Street+No+10%2C+Ghauri+Town%2C+Islamabad%2C+Pakistan" target="_blank" rel="noreferrer">
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 h-[400px] lg:h-full min-h-[500px] rounded-3xl overflow-hidden shadow-lg border border-gray-200"
          >
            <iframe 
              src="https://maps.google.com/maps?q=J4CR%2B7QM%2C+Main+Ghouri+Town%2C+Street+No+10%2C+Ghauri+Town%2C+Islamabad%2C+Pakistan&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ali Super Store Map Location"
              className="w-full h-full grayscale-[0.2] contrast-125"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
