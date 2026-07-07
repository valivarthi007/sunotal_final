import React from 'react';
import { Header } from '@/components/layout/header';
import { Nav } from '@/components/layout/nav';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Leaf, TrendingUp, Users, ShieldCheck, Banknote, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Farmer() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Nav />
      <main className="flex-grow">

        {/* Hero */}
        <section className="bg-secondary text-white py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 rounded-full px-4 py-1.5 text-sm font-bold mb-6">
                  <Leaf className="h-4 w-4" /> Farmer Partner Program
                </span>
                <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
                  Sell Your Harvest Directly to 50,000+ Customers
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Join Sunotal's farmer network and earn up to 40% more by cutting out the middlemen. We handle logistics, payments, and customer service — you focus on farming.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="rounded-full bg-primary hover:bg-primary/90 text-white h-12 px-8 font-bold text-base">
                    Register as Farmer
                  </Button>
                  <Button variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10 h-12 px-8 font-bold text-base">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: TrendingUp, val: '40%',  label: 'Higher Earnings' },
                  { icon: Users,      val: '50K+', label: 'Active Customers' },
                  { icon: Banknote,   val: '48hr', label: 'Payment Cycle' },
                  { icon: ShieldCheck, val: '500+', label: 'Farmer Partners' },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/10 rounded-2xl p-6 text-center"
                  >
                    <s.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <p className="text-3xl font-black text-white">{s.val}</p>
                    <p className="text-gray-300 text-sm mt-1">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-black text-secondary text-center mb-12">Why Partner With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Banknote,    title: 'Guaranteed Payments',   desc: 'Receive payment within 48 hours of delivery — no delays, no excuses.' },
                { icon: TrendingUp,  title: 'Fair Price Discovery',   desc: 'Our platform ensures you get market-rate or better for your produce.' },
                { icon: ShieldCheck, title: 'Zero Commission for 6M', desc: 'New partners enjoy zero platform fee for the first 6 months.' },
              ].map((b, i) => (
                <div key={i} className="bg-muted p-8 rounded-2xl text-center">
                  <div className="w-14 h-14 bg-[#F0F7E8] rounded-full flex items-center justify-center mx-auto mb-4">
                    <b.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-2">{b.title}</h3>
                  <p className="text-gray-500 text-sm">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 max-w-xl">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-black text-secondary mb-2">Register Your Farm</h2>
              <p className="text-muted-foreground text-sm mb-8">Our team will contact you within 24 hours.</p>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-bold text-secondary mb-1.5 block">First Name</label>
                    <Input placeholder="Ravi" className="rounded-xl" />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-secondary mb-1.5 block">Last Name</label>
                    <Input placeholder="Kumar" className="rounded-xl" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-bold text-secondary mb-1.5 block">Phone Number</label>
                  <Input type="tel" placeholder="+91 98765 43210" className="rounded-xl" />
                </div>
                <div>
                  <label className="text-sm font-bold text-secondary mb-1.5 block">Village / Town</label>
                  <Input placeholder="e.g. Nashik, Maharashtra" className="rounded-xl" />
                </div>
                <div>
                  <label className="text-sm font-bold text-secondary mb-1.5 block">Primary Produce</label>
                  <Input placeholder="e.g. Tomatoes, Onions, Mangoes" className="rounded-xl" />
                </div>
                <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-white h-12 font-bold text-base mt-2">
                  Submit Application
                </Button>
              </div>

              <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Prefer to call? <strong className="text-secondary">1800-555-FARM</strong> (Mon–Sat, 9AM–6PM)</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
