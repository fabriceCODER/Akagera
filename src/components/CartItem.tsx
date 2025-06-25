
import React from 'react';
import { Button } from '@/components/ui/button';
import { MinusCircle, PlusCircle, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import { useCart } from '../contexts/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const handleIncrement = () => {
    if (quantity < product.stock) {
      updateQuantity(product.id, quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <div className="flex py-4 border-b">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3 className="line-clamp-1">{product.name}</h3>
            <p className="ml-4">{formatPrice(product.price * quantity)}</p>
          </div>
          {item.selectedVariants && (
            <div className="mt-1 text-xs text-gray-500">
              {Object.entries(item.selectedVariants).map(([key, value]) => (
                <span key={key} className="mr-2">
                  {key}: {value}
                </span>
              ))}
            </div>
          )}
        </div>
        
        <div className="flex flex-1 items-end justify-between">
          <div className="flex items-center border rounded-md">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDecrement}
              disabled={quantity <= 1}
              className="h-8 w-8"
            >
              <MinusCircle className="h-4 w-4" />
            </Button>
            <span className="px-2 text-gray-900">{quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleIncrement}
              disabled={quantity >= product.stock}
              className="h-8 w-8"
            >
              <PlusCircle className="h-4 w-4" />
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => removeFromCart(product.id)}
            className="text-red-500 hover:text-red-700"
          >
            <Trash2 className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
