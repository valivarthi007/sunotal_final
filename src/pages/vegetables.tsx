import React from 'react';
import { Header } from '@/components/layout/header';
import { Nav } from '@/components/layout/nav';
import { Footer } from '@/components/layout/footer';
import { ProductCard } from '@/components/product-card';
import { products } from '@/data/products';

export default function Vegetables() {
  const vegs = products.filter(p => p.category === 'Vegetables');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Nav />
      <main className="flex-grow bg-muted py-10">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-black text-secondary">Fresh Vegetables</h1>
            <p className="text-muted-foreground mt-1">Farm-picked, delivered before 7 AM · {vegs.length} items</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {vegs.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
