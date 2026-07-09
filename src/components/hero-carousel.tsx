import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

// import vegetables from '@/assets/sunotal/vegetables.jpg';
// import mangoes from '@/assets/sunotal/mangoes.jpg';
// import dairy from '@/assets/sunotal/dairy.jpg';
const S3_BASE = "https://jcs-raju-sunotal-final.s3.us-east-1.amazonaws.com/";

const vegetables = `${S3_BASE}/vegetables.jpg`;
const mangoes = `${S3_BASE}/mangoes.jpg`;
const dairy = `${S3_BASE}/dairy.jpg`;

const slides = [
  {
    id: 1,
    bgColor: 'bg-[#F0F7E8]',
    textColor: 'text-[#0B2914]',
    accentColor: 'bg-primary text-white',
    title: 'Farm Fresh Delivered Daily',
    subtitle: 'Direct from our partner farms to your kitchen — harvested this morning.',
    image: vegetables,
    deals: [
      { name: 'FRESH TOMATOES', price: '₹40/kg', mrp: '₹60/kg' },
      { name: 'MIXED VEG BOX 5KG', price: '₹199', mrp: '₹300' },
    ],
  },
  {
    id: 2,
    bgColor: 'bg-[#0B2914]',
    textColor: 'text-white',
    accentColor: 'bg-[#F4A017] text-white',
    title: 'Seasonal Fruits at Best Prices',
    subtitle: 'Premium Alphonso mangoes, apples & more — straight from orchards.',
    image: mangoes,
    deals: [
      { name: 'ALPHONSO MANGOES', price: '₹299/doz', mrp: '₹450' },
    ],
  },
  {
    id: 3,
    bgColor: 'bg-primary',
    textColor: 'text-white',
    accentColor: 'bg-white text-primary',
    title: 'Pure Dairy, Every Morning',
    subtitle: 'Farm-fresh milk, butter & curd — delivered before 7 AM.',
    image: dairy,
    deals: [
      { name: 'FARM FRESH MILK 1L', price: '₹60', mrp: '₹72' },
      { name: 'DAIRY COMBO PACK', price: '₹199', mrp: '₹280' },
    ],
  },
];

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    const autoplay = setInterval(() => emblaApi.scrollNext(), 4500);
    return () => {
      clearInterval(autoplay);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full overflow-hidden" ref={emblaRef}>
      <div className="flex touch-pan-y">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`flex-[0_0_100%] min-w-0 relative ${slide.bgColor} ${slide.textColor}`}
          >
            <div className="container mx-auto px-4 md:px-12 h-[380px] md:h-[480px] flex flex-col md:flex-row items-center justify-between">

              {/* Text */}
              <div className="w-full md:w-1/2 pt-10 md:pt-0 z-10">
                <AnimatePresence mode="wait">
                  {selectedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.55, delay: 0.15 }}
                    >
                      <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-4">
                        {slide.title}
                      </h2>
                      <p className={`text-base md:text-lg mb-8 max-w-md leading-relaxed ${
                        slide.bgColor === 'bg-[#F0F7E8]' ? 'text-gray-600' : 'text-white/75'
                      }`}>
                        {slide.subtitle}
                      </p>
                      <div className="flex flex-col gap-3">
                        {slide.deals.map((deal, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.45, delay: 0.35 + i * 0.1 }}
                            className={`inline-flex items-center self-start gap-4 px-5 py-2.5 rounded-full ${slide.accentColor}`}
                          >
                            <span className="font-bold text-sm md:text-base">{deal.name}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-xs opacity-80">From</span>
                              <span className="font-black text-lg md:text-xl">{deal.price}</span>
                              <span className="text-sm line-through opacity-60 ml-1">{deal.mrp}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2 h-full flex items-center justify-center relative mt-6 md:mt-0 z-10">
                <AnimatePresence mode="wait">
                  {selectedIndex === index && (
                    <motion.img
                      initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.65, type: 'spring' }}
                      src={slide.image}
                      alt="Featured produce"
                      className="max-h-[75%] max-w-[80%] object-contain drop-shadow-2xl rounded-2xl"
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Prev / Next */}
      <Button
        variant="outline"
        size="icon"
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur border-none hover:bg-white text-secondary shadow-lg hidden md:flex"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur border-none hover:bg-white text-secondary shadow-lg hidden md:flex"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === selectedIndex ? 'bg-white w-8 shadow-sm' : 'bg-white/50 w-2.5 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
