
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

const CartDrawer: React.FC = () => {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    cartTotal,
    clearCart 
  } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  if (!isCartOpen) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Cart panel */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-xl transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b flex justify-between items-center">
            <div className="flex items-center">
              <ShoppingBag className="h-5 w-5 mr-2" />
              <h2 className="text-lg font-semibold">Your Cart</h2>
              <span className="ml-2 bg-akagera-700 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsCartOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Cart items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900">Your cart is empty</h3>
                <p className="text-gray-500 mt-1">Add items to get started</p>
                <Button 
                  className="mt-4 bg-akagera-700 hover:bg-akagera-800"
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/products');
                  }}
                >
                  Browse Products
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>
            )}
          </div>
          
          {/* Footer with totals and checkout */}
          {cart.length > 0 && (
            <div className="p-4 border-t">
              <div className="flex justify-between items-center mb-4">
                <span className="text-base font-medium text-gray-500">Subtotal</span>
                <span className="text-lg font-semibold text-gray-900">{formatPrice(cartTotal)}</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">Shipping and taxes calculated at checkout.</p>
              <div className="space-y-2">
                <Button 
                  className="w-full bg-akagera-700 hover:bg-akagera-800"
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setIsCartOpen(false)}
                >
                  Continue Shopping
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full text-red-500 hover:text-red-700"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
