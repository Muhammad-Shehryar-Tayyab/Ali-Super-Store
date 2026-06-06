import { motion } from "framer-motion";
import { PhoneCall, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-primary text-white rounded-[2rem] shadow-xl overflow-hidden border border-primary/20 p-12 flex flex-col items-center text-center relative"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-secondary/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10 w-full">
            <h3 className="text-3xl font-display font-bold mb-3">Get in Touch</h3>
            <p className="text-primary-foreground/80 mb-10 text-lg max-w-sm mx-auto">
              Need something specific? Want to inquire about home delivery? Reach out to us directly.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <motion.a
                href="tel:03235900737"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-4 bg-white/20 hover:bg-white/30 transition-colors rounded-2xl px-7 py-5 group"
              >
                <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-primary-foreground/70 mb-0.5">Call Us Direct</p>
                  <p className="font-bold text-lg">03235900737</p>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/923235900737"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-4 bg-white/20 hover:bg-white/30 transition-colors rounded-2xl px-7 py-5 group"
              >
                <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-primary-foreground/70 mb-0.5">WhatsApp Us</p>
                  <p className="font-bold text-lg">03235900737</p>
                </div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
