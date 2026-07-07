import React from 'react';
import { Link, useLocation } from 'wouter';
import { User, ShoppingCart, Headphones, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export function Nav() {
  const [location] = useLocation();
  const isActive = (path: string) => location === path;

  return (
    <div className="hidden md:flex w-full bg-white border-b border-border sticky top-20 z-40">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">

        {/* Left Links */}
        <div className="flex items-center gap-8">
          {[
            { href: '/products', label: 'All Products' },
            { href: '/vegetables', label: 'Vegetables' },
            { href: '/fruits', label: 'Fruits' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-medium transition-colors hover:text-primary ${
                isActive(href) ? 'text-primary border-b-2 border-primary py-4' : 'text-secondary'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Center CTA */}
        <div className="flex-1 flex justify-center">
          <Link href="/farmer">
            <Button
              variant="outline"
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-colors h-10 px-6 font-bold flex items-center gap-2"
            >
              <Leaf className="h-4 w-4" />
              Become a Farmer Partner
            </Button>
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
            <Headphones className="h-5 w-5" />
            <span className="text-sm font-medium">Support</span>
          </button>

          <Sheet>
            <SheetTrigger asChild>
              <button className="flex items-center gap-2 text-secondary hover:text-primary transition-colors relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
                <span className="text-sm font-medium ml-1">Cart</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Your Cart</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col items-center justify-center h-[70vh] text-center gap-4">
                <ShoppingCart className="h-16 w-16 text-gray-200" />
                <h3 className="text-lg font-medium text-secondary">Your cart is empty</h3>
                <p className="text-muted-foreground text-sm">Add fresh produce to your cart to checkout.</p>
                <Button className="mt-4 rounded-full" asChild>
                  <Link href="/products">Browse Products</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          <button className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
            <User className="h-5 w-5" />
            <span className="text-sm font-medium">Account</span>
          </button>
        </div>
      </div>
    </div>
  );
}
