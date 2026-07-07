import React, { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Nav } from '@/components/layout/nav';
import { Footer } from '@/components/layout/footer';
import { HeroCarousel } from '@/components/hero-carousel';
import { ProductCard } from '@/components/product-card';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, ShoppingCart, Truck, ShieldCheck, CheckCircle2, Leaf, Star, Clock } from 'lucide-react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

const CATEGORIES = ['All', 'Vegetables', 'Fruits', 'Dairy', 'Dry Fruits', 'Grains'];

export default function Home() {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = activeTab === 'All'
    ? products
    : products.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <Nav />

      <main className="flex-grow">
        {/* Hero */}
        <section>
          <HeroCarousel />
        </section>

        {/* Category Quick Links */}
        <section className="py-8 bg-white border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-5 gap-4">
              {[
                { emoji: '🥦', label: 'Vegetables', href: '/vegetables' },
                { emoji: '🍋', label: 'Fruits',     href: '/fruits' },
                { emoji: '🥛', label: 'Dairy',      href: '/products' },
                { emoji: '🥜', label: 'Dry Fruits', href: '/products' },
                { emoji: '🌾', label: 'Grains',     href: '/products' },
              ].map(({ emoji, label, href }) => (
                <Link key={label} href={href}>
                  <div className="flex flex-col items-center gap-2 p-4 rounded-2xl hover:bg-muted transition-colors cursor-pointer text-center group">
                    <span className="text-4xl group-hover:scale-110 transition-transform">{emoji}</span>
                    <span className="text-sm font-bold text-secondary">{label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Products */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-secondary">Popular Products</h2>
                <p className="text-muted-foreground mt-1">Harvested fresh · Delivered daily</p>
              </div>
              <Link href="/products">
                <Button variant="outline" className="rounded-full border-border font-bold px-6 hover:border-primary hover:text-primary">
                  See All Products
                </Button>
              </Link>
            </div>

            <Tabs defaultValue="All" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="mb-8 bg-muted p-1 rounded-full inline-flex flex-wrap gap-1 h-auto">
                {CATEGORIES.map(cat => (
                  <TabsTrigger
                    key={cat}
                    value={cat}
                    className="rounded-full px-5 font-bold data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm"
                  >
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                {filtered.slice(0, 10).map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            </Tabs>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-3">How It Works?</h2>
            <p className="text-muted-foreground text-lg mb-16">From our farms to your table in 3 easy steps</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-4xl mx-auto">
              <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-border z-0" />

              {[
                { icon: Search,      title: 'Browse Fresh Produce',   desc: 'Explore hundreds of farm-fresh items across categories.' },
                { icon: ShoppingCart, title: 'Add to Cart & Checkout', desc: 'Secure checkout with UPI, cards, and cash on delivery.' },
                { icon: Truck,       title: 'Early Morning Delivery',  desc: 'Receive your order fresh before 7 AM.' },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center relative z-10">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm border-4 border-muted mb-6">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm max-w-[200px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Sunotal */}
        <section className="py-16 md:py-24 bg-[#F0F7E8]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">Why Choose Sunotal Farms</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We partner with 500+ verified farmers to bring you the freshest produce with zero compromises.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Leaf,         title: 'Farm Fresh Quality',    desc: 'Produce picked within 24 hours of your order — never stored for days.' },
                { icon: ShieldCheck,  title: 'Verified Farmers',      desc: '500+ certified farmer partners, quality-checked every harvest.' },
                { icon: CheckCircle2, title: 'No Middlemen',          desc: 'Direct farm-to-home pricing — you save, farmers earn more.' },
                { icon: Clock,        title: 'Before 7 AM Delivery',  desc: 'Wake up to fresh produce at your doorstep every morning.' },
              ].map((f, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 mx-auto bg-[#F0F7E8] text-primary rounded-full flex items-center justify-center mb-6">
                    <f.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-black text-secondary text-center mb-12">What Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Priya S.',     city: 'Hyderabad', text: 'The tomatoes are so fresh! Much better than the local market and delivered before I wake up.', rating: 5 },
                { name: 'Ravi K.',     city: 'Bengaluru',  text: 'Alphonso mangoes were outstanding — perfectly ripe and at a great price. Will order every season.', rating: 5 },
                { name: 'Ananya M.',   city: 'Mumbai',     text: 'Finally a service that actually delivers farm-fresh. The milk is noticeably better quality.', rating: 5 },
              ].map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-muted p-6 rounded-2xl"
                >
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 text-[#F4A017] fill-[#F4A017]" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">"{t.text}"</p>
                  <div>
                    <p className="font-bold text-secondary text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.city}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyIiBmaWxsPSIjZmZmZmZmIi8+PC9zdmc+')]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Get the Sunotal App</h2>
              <p className="text-gray-300 text-lg mb-10">
                Schedule daily deliveries, track your order live, and get exclusive app-only deals on farm-fresh produce.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-white hover:bg-gray-100 text-secondary rounded-full px-8 h-14 text-lg font-bold">
                  Download on App Store
                </Button>
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-lg font-bold">
                  Get it on Google Play
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
