import { ProductCard } from '../components/ProductCard';
import { Product } from '../store/cartSlice';
import { Leaf } from 'lucide-react';

const products: Product[] = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1626929252164-27c26d107b00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25zdGVyYSUyMHBsYW50fGVufDF8fHx8MTc2MTI0MjMyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Tropical',
  },
  {
    id: 2,
    name: 'Snake Plant',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmFrZSUyMHBsYW50fGVufDF8fHx8MTc2MTEzOTQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Low-Light',
  },
  {
    id: 3,
    name: 'Golden Pothos',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1596724878582-76f1a8fdc24f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3Rob3MlMjBwbGFudHxlbnwxfHx8fDE3NjEyMDY0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Air-Purifying',
  },
  {
    id: 4,
    name: 'Fiddle Leaf Fig',
    price: 65.99,
    image: 'https://images.unsplash.com/photo-1545239705-1564e58b9e4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWRkbGUlMjBsZWFmJTIwZmlnfGVufDF8fHx8MTc2MTE3MTU4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Tropical',
  },
  {
    id: 5,
    name: 'Assorted Succulents',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1550207477-85f418dc3448?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjdWxlbnQlMjBwbGFudHxlbnwxfHx8fDE3NjExMzk0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Succulents',
  },
  {
    id: 6,
    name: 'Peace Lily',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1621923164562-21d3118adae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZSUyMGxpbHklMjBwbGFudHxlbnwxfHx8fDE3NjEyNDIzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Air-Purifying',
  },
];

const categories = Array.from(new Set(products.map(p => p.category)));

export function ProductListingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50/30 to-green-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Leaf className="w-5 h-5" />
            <span className="text-sm">Premium Plant Collection</span>
          </div>
          <h1 className="mb-4 text-4xl md:text-5xl">
            Our Houseplant Haven
          </h1>
          <p className="text-lg text-green-50 max-w-2xl mx-auto">
            Handpicked selection of beautiful, healthy plants to bring life to your space
          </p>
          
          {/* Category Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <span
                key={category}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm border border-white/30 hover:bg-white/30 transition-colors cursor-pointer"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="container mx-auto px-4 pb-16">
        <div className="relative overflow-hidden bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 md:p-12 text-center border border-green-200 shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-200/50 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-200/50 rounded-full blur-3xl" />
          
          <div className="relative">
            <h2 className="mb-3 bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
              Can't find what you're looking for?
            </h2>
            <p className="text-gray-600 mb-6">
              We're constantly adding new plants to our collection. Check back soon!
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg text-green-600">
              <Leaf className="w-5 h-5" />
              <span>New arrivals coming soon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
