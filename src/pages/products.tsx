import React, { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Nav } from '@/components/layout/nav';
import { Footer } from '@/components/layout/footer';
import { ProductCard } from '@/components/product-card';
import { products, ProductCategory } from '@/data/products';
import { Button } from '@/components/ui/button';

const CATEGORIES: ProductCategory[] = ['Vegetables', 'Fruits', 'Dairy', 'Dry Fruits', 'Grains'];

export default function Products() {
  const [active, setActive] = useState<ProductCategory | 'All'>('All');

  const filtered = active === 'All' ? products : products.filter(p => p.category === active);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Nav />
      <main className="flex-grow bg-muted py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-black text-secondary">All Products</h1>
              <p className="text-muted-foreground mt-1">Showing {filtered.length} items</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {(['All', ...CATEGORIES] as const).map(cat => (
                <Button
                  key={cat}
                  variant={active === cat ? 'default' : 'outline'}
                  className={`rounded-full px-5 font-bold ${active === cat ? 'bg-primary text-white' : 'border-border hover:border-primary hover:text-primary'}`}
                  onClick={() => setActive(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
