import React from 'react';
import { Link } from 'wouter';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/">
              <img src="/sunotal-logo.svg" alt="Sunotal Farms" className="h-10 cursor-pointer object-contain brightness-0 invert" />
            </Link>
            <p className="mt-4 text-gray-300 text-sm max-w-sm leading-relaxed">
              Sunotal Farms connects you directly with local farmers for the freshest produce, delivered to your doorstep every morning — no middlemen, no compromises.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Press</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Farmer Partners</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold mb-4">Categories</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/vegetables" className="hover:text-primary transition-colors">Vegetables</Link></li>
              <li><Link href="/fruits" className="hover:text-primary transition-colors">Fruits</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Dairy</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Dry Fruits</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Grains</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Freshness Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Return Policy</Link></li>
              <li className="flex items-start gap-2 mt-4">
                <Mail className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span>support@sunotal.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span>1800-555-FARM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Sunotal Farms. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
