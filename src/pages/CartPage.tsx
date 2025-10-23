import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../store/cartSlice';
import { useNavigate } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingBag, ArrowLeft, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';

export function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [showCheckout, setShowCheckout] = useState(false);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setShowCheckout(true);
    setTimeout(() => setShowCheckout(false), 3000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50/30 to-green-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="mb-6 relative inline-block">
            <div className="absolute inset-0 bg-green-200 blur-3xl opacity-50" />
            <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-full shadow-xl border border-green-100">
              <ShoppingBag className="w-20 h-20 text-green-400" />
            </div>
          </div>
          <h2 className="mb-3 text-gray-800">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any plants yet. Start building your green sanctuary!
          </p>
          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full hover:from-green-600 hover:to-emerald-600 transition-all hover:shadow-lg hover:shadow-green-200/50"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Continue Shopping</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50/30 to-green-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="mb-2 text-4xl">Shopping Cart</h1>
          <p className="text-green-50">
            {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => (
              <div
                key={item.id}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-green-100 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex gap-6">
                  {/* Image */}
                  <div className="flex-shrink-0 w-32 h-32 rounded-xl overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-gray-800 mb-1">{item.name}</h3>
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                            {item.category}
                          </span>
                        </div>
                        <button
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className="text-red-500 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                      <p className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-4">
                      <span className="text-sm text-gray-600">Quantity:</span>
                      <div className="flex items-center gap-2 bg-green-50 rounded-lg p-1 border border-green-100">
                        <button
                          onClick={() => dispatch(decrementQuantity(item.id))}
                          disabled={item.quantity === 1}
                          className="w-8 h-8 rounded-md bg-white hover:bg-green-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center justify-center text-green-600"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center text-gray-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => dispatch(incrementQuantity(item.id))}
                          className="w-8 h-8 rounded-md bg-white hover:bg-green-100 transition-colors flex items-center justify-center text-green-600"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="ml-auto text-gray-800">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-green-100 shadow-xl">
              <h2 className="mb-6 text-gray-800">Order Summary</h2>

              <div className="space-y-3 mb-6 pb-6 border-b border-green-100">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600">FREE</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
              </div>

              <div className="flex justify-between mb-6 text-gray-800">
                <span>Total</span>
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full mb-3 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all hover:shadow-lg hover:shadow-green-200/50 flex items-center justify-center gap-2 active:scale-95"
              >
                <Sparkles className="w-5 h-5" />
                <span>Proceed to Checkout</span>
              </button>

              <button
                onClick={() => navigate('/products')}
                className="w-full py-4 bg-green-50 text-green-600 rounded-xl hover:bg-green-100 transition-colors flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Continue Shopping</span>
              </button>

              {/* Free Shipping Banner */}
              <div className="mt-6 p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl text-center border border-green-200">
                <p className="text-sm text-green-700">
                  🎉 You're getting <strong>FREE shipping</strong> on this order!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Modal */}
      {showCheckout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl animate-in zoom-in slide-in-from-bottom-4">
            <div className="text-center">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2 text-gray-800">Coming Soon!</h3>
              <p className="text-gray-600">
                Checkout functionality will be available soon. Thank you for your patience!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
