import vegetables from '@/assets/sunotal/vegetables.jpg';
import fruits from '@/assets/sunotal/fruits.jpg';
import dairy from '@/assets/sunotal/dairy.jpg';
import dryFruits from '@/assets/sunotal/dry-fruits.jpg';
import grains from '@/assets/sunotal/grains.jpg';
import tomatoes from '@/assets/sunotal/tomatoes.jpg';
import mangoes from '@/assets/sunotal/mangoes.jpg';
import spinach from '@/assets/sunotal/spinach.jpg';
import milk from '@/assets/sunotal/milk.jpg';
import cashews from '@/assets/sunotal/cashews.jpg';
import rice from '@/assets/sunotal/rice.jpg';
import apples from '@/assets/sunotal/apples.jpg';

export type ProductCategory = 'Vegetables' | 'Fruits' | 'Dairy' | 'Dry Fruits' | 'Grains';

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  unit: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  image: string;
  badge?: string;
  organic?: boolean;
  description?: string;
};

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Fresh Tomatoes',
    category: 'Vegetables',
    unit: 'per kg',
    price: 40,
    originalPrice: 60,
    discountPercentage: 33,
    image: tomatoes,
    badge: 'Bestseller',
    organic: true,
    description: 'Farm-fresh ripe tomatoes, picked daily.',
  },
  {
    id: 'p2',
    name: 'Alphonso Mangoes',
    category: 'Fruits',
    unit: 'per dozen',
    price: 299,
    originalPrice: 450,
    discountPercentage: 33,
    image: mangoes,
    badge: 'Seasonal',
    organic: true,
    description: 'Premium GI-tagged Alphonso mangoes.',
  },
  {
    id: 'p3',
    name: 'Fresh Spinach',
    category: 'Vegetables',
    unit: 'per 500g',
    price: 30,
    originalPrice: 45,
    discountPercentage: 33,
    image: spinach,
    organic: true,
    description: 'Tender spinach leaves, pesticide-free.',
  },
  {
    id: 'p4',
    name: 'Farm Fresh Milk',
    category: 'Dairy',
    unit: 'per litre',
    price: 60,
    originalPrice: 72,
    discountPercentage: 17,
    image: milk,
    badge: 'Daily Fresh',
    description: 'Pure cow milk, delivered fresh each morning.',
  },
  {
    id: 'p5',
    name: 'Premium Cashews',
    category: 'Dry Fruits',
    unit: 'per 500g',
    price: 349,
    originalPrice: 499,
    discountPercentage: 30,
    image: cashews,
    description: 'Whole jumbo cashews, naturally dried.',
  },
  {
    id: 'p6',
    name: 'Organic Basmati Rice',
    category: 'Grains',
    unit: 'per kg',
    price: 95,
    originalPrice: 130,
    discountPercentage: 27,
    image: rice,
    organic: true,
    description: 'Long-grain aged basmati, chemical-free farming.',
  },
  {
    id: 'p7',
    name: 'Mixed Vegetables Box',
    category: 'Vegetables',
    unit: '5 kg box',
    price: 199,
    originalPrice: 300,
    discountPercentage: 34,
    image: vegetables,
    badge: 'Value Pack',
    organic: true,
    description: 'Seasonal mix: tomatoes, capsicum, carrots & more.',
  },
  {
    id: 'p8',
    name: 'Seasonal Fruits Basket',
    category: 'Fruits',
    unit: '3 kg basket',
    price: 249,
    originalPrice: 370,
    discountPercentage: 33,
    image: fruits,
    description: 'Curated mix of fresh seasonal fruits.',
  },
  {
    id: 'p9',
    name: 'Dairy Combo Pack',
    category: 'Dairy',
    unit: 'combo',
    price: 199,
    originalPrice: 280,
    discountPercentage: 29,
    image: dairy,
    badge: 'Popular',
    description: 'Milk 2L + Butter 500g + Curd 1kg.',
  },
  {
    id: 'p10',
    name: 'Mixed Dry Fruits',
    category: 'Dry Fruits',
    unit: 'per 500g',
    price: 399,
    originalPrice: 550,
    discountPercentage: 27,
    image: dryFruits,
    description: 'Premium mix: almonds, cashews, raisins & pistachios.',
  },
  {
    id: 'p11',
    name: 'Red Apples',
    category: 'Fruits',
    unit: 'per kg',
    price: 130,
    originalPrice: 180,
    discountPercentage: 28,
    image: apples,
    organic: true,
    description: 'Crispy Shimla apples, imported grade A.',
  },
  {
    id: 'p12',
    name: 'Mixed Grain Pack',
    category: 'Grains',
    unit: '5 kg pack',
    price: 349,
    originalPrice: 480,
    discountPercentage: 27,
    image: grains,
    description: 'Wheat, rice, lentils & chickpeas combo.',
  },
];
