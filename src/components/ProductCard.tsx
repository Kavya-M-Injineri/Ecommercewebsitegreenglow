import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ShoppingCart, Check } from 'lucide-react';
import { addToCart, Product } from '../store/cartSlice';
import { RootState } from '../store/store';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const isInCart = cartItems.some(item => item.id === product.id);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    dispatch(addToCart(product));
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <div className="group relative bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-green-100 shadow-lg hover:shadow-2xl hover:shadow-green-200/50 transition-all duration-300 hover:-translate-y-2">
      {/* Category Badge */}
      <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-green-500/90 backdrop-blur-sm text-white text-xs rounded-full shadow-lg">
        {product.category}
      </div>

      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="mb-2 text-gray-800 group-hover:text-green-600 transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between mb-4">
          <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-xs text-gray-500">Free shipping</span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={isInCart}
          className={`w-full py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
            isInCart
              ? 'bg-green-100 text-green-700 cursor-not-allowed'
              : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 hover:shadow-lg hover:shadow-green-200/50 active:scale-95'
          }`}
        >
          {isInCart ? (
            <>
              <Check className="w-5 h-5" />
              <span>Added to Cart</span>
            </>
          ) : (
            <>
              <ShoppingCart className={`w-5 h-5 ${isAdding ? 'animate-bounce' : ''}`} />
              <span>Add to Cart</span>
            </>
          )}
        </button>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-green-400/20 rounded-full blur-3xl group-hover:bg-green-400/30 transition-colors" />
    </div>
  );
}
