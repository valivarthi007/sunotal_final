import React from 'react';
import { Product } from '@/data/products';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="h-full group"
    >
      <Card className="overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col relative bg-white">

        {/* Top Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {product.badge && (
            <Badge className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider text-[10px] px-2 py-0.5 shadow-sm">
              {product.badge}
            </Badge>
          )}
          {product.organic && (
            <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200 font-medium text-[10px] px-2 py-0.5 flex items-center gap-1">
              <Leaf className="h-2.5 w-2.5" />
              Organic
            </Badge>
          )}
        </div>

        <div className="absolute top-3 right-3 z-10">
          <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-green-200 font-bold">
            {product.discountPercentage}% OFF
          </Badge>
        </div>

        {/* Image */}
        <div className="aspect-square p-4 flex items-center justify-center bg-muted overflow-hidden group-hover:bg-green-50 transition-colors">
          <motion.img
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.35 }}
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <CardContent className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-secondary text-base leading-tight mb-1 line-clamp-2">
              {product.name}
            </h3>
            <p className="text-xs text-muted-foreground mb-3">
              {product.unit} · {product.category}
            </p>
          </div>

          <div>
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-lg font-black text-primary">{formatPrice(product.price)}</span>
              <span className="text-sm text-gray-400 line-through font-medium">{formatPrice(product.originalPrice)}</span>
            </div>
          </div>
        </CardContent>

        {/* Add to Cart overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 focus-within:translate-y-0 focus-within:opacity-100 transition-all duration-300 bg-white/95 backdrop-blur-sm border-t border-border">
          <Button className="w-full rounded-full gap-2 font-bold shadow-sm bg-primary hover:bg-primary/90 text-white">
            <ShoppingCart className="h-4 w-4" aria-hidden="true" />
            Add to Cart
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
