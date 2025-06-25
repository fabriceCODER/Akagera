
import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '../../contexts/CartContext';

const CartButton: React.FC = () => {
  const { cartItemsCount, setIsCartOpen } = useCart();
  
  return (
    <Button 
      variant="ghost" 
      size="icon"
      className="relative" 
      onClick={() => setIsCartOpen(true)}
    >
      <ShoppingBag className="h-5 w-5" />
      {cartItemsCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-akagera-700 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {cartItemsCount}
        </span>
      )}
    </Button>
  );
};

export default CartButton;
