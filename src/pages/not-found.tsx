import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-muted">
        <div className="text-center px-4">
          <p className="text-8xl mb-6">🌿</p>
          <h1 className="text-5xl font-black text-secondary mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">Oops! This page seems to have wandered off the farm.</p>
          <Button className="rounded-full bg-primary text-white px-8 h-12 font-bold" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
