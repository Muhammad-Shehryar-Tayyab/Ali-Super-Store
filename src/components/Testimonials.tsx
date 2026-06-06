import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    name: "Qammar ud din",
    text: "Good shop for fresh fruits, fresh vegetables, desi and branded items.",
    rating: 4,
  },
  {
    name: "Ghulam Murtaza Mashori",
    text: "Ali Super Store is a convenient grocery store of Ghouri Town, Islamabad.",
    rating: 4,
  },
  {
    name: "Tahir Zaman",
    text: "A good place to shop. All items available.",
    rating: 4,
  },
  {
    name: "Ahmed Luqman Ghumman",
    text: "Home delivery for free.",
    rating: 5,
  },
  {
    name: "Raj Abdul",
    text: "Good services.",
    rating: 4,
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 text-center lg:text-left"
          >
            <h2 className="text-sm font-bold tracking-wider text-secondary uppercase mb-3">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              What Our Neighbors Say
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Don't just take our word for it. Here is what the local community of Ghouri Town has to say about their experience.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-2xl inline-block border border-gray-100">
              <div className="flex items-center gap-2 mb-2 text-accent">
                <Star className="fill-current w-6 h-6" />
                <Star className="fill-current w-6 h-6" />
                <Star className="fill-current w-6 h-6" />
                <Star className="fill-current w-6 h-6" />
                <div className="relative">
                  <Star className="text-gray-300 w-6 h-6" />
                  <div className="absolute inset-0 overflow-hidden w-1/2">
                    <Star className="fill-accent text-accent w-6 h-6" />
                  </div>
                </div>
              </div>
              <p className="text-2xl font-bold">3.5 / 5</p>
              <p className="text-muted-foreground text-sm">Based on 59 Google Reviews</p>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-8">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full h-12 w-12 border-gray-200" 
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full h-12 w-12 border-gray-200" 
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 w-full overflow-hidden" 
            ref={emblaRef}
          >
            <div className="flex">
              {reviews.map((review, index) => (
                <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_80%] min-w-0 pl-6">
                  <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 h-full flex flex-col relative">
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10 rotate-180" />
                    
                    <div className="flex gap-1 mb-6 text-accent">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < review.rating ? "fill-current" : "text-gray-200"}`} />
                      ))}
                    </div>
                    
                    <p className="text-xl text-gray-700 italic mb-8 flex-grow leading-relaxed">
                      "{review.text}"
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl uppercase">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{review.name}</h4>
                        <p className="text-sm text-muted-foreground">Local Customer</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
