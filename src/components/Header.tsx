import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export function Header() {
  const location = useLocation();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-green-100 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              GreenGlow
            </span>
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              to="/"
              className={`transition-colors hover:text-green-600 ${
                location.pathname === '/' ? 'text-green-600' : 'text-gray-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`transition-colors hover:text-green-600 ${
                location.pathname === '/products' ? 'text-green-600' : 'text-gray-600'
              }`}
            >
              Products
            </Link>
            <Link
              to="/cart"
              className="relative group"
            >
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                location.pathname === '/cart'
                  ? 'bg-green-100 text-green-600'
                  : 'text-gray-600 hover:bg-green-50'
              }`}>
                <ShoppingCart className="w-5 h-5" />
                <span className="hidden sm:inline">Cart</span>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs shadow-lg animate-in zoom-in">
                    {totalItems}
                  </span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
