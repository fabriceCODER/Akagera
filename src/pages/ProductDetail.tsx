
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ChevronRight, 
  Star, 
  ShoppingCart, 
  Heart, 
  Share2,
  Check,
  Truck,
  Shield,
  RefreshCcw
} from 'lucide-react';
import { getProductById, getProductsByCategory } from '../lib/data';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';
import ProductGrid from '../components/ProductGrid';
import { ProductVariant } from '../types';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = id ? getProductById(id) : null;
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8">The product you are looking for does not exist.</p>
        <Button 
          onClick={() => navigate('/products')}
          className="bg-akagera-700 hover:bg-akagera-800"
        >
          Browse Products
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    // Check if all variants have been selected
    const allVariantsSelected = !product.variants || 
      product.variants.every(variant => selectedVariants[variant.id]);
    
    if (!allVariantsSelected) {
      toast.error('Please select all options before adding to cart');
      return;
    }
    
    addToCart(product, quantity, selectedVariants);
  };
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };
  
  const handleVariantChange = (variantId: string, value: string) => {
    setSelectedVariants(prev => ({
      ...prev,
      [variantId]: value
    }));
  };
  
  // Get related products from the same category
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <button onClick={() => navigate('/')} className="hover:text-akagera-700">Home</button>
        <ChevronRight className="h-4 w-4 mx-1" />
        <button onClick={() => navigate('/products')} className="hover:text-akagera-700">Products</button>
        <ChevronRight className="h-4 w-4 mx-1" />
        <button onClick={() => navigate(`/products?category=${product.category.toLowerCase()}`)} className="hover:text-akagera-700">
          {product.category}
        </button>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-gray-900 font-medium">{product.name}</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Product Images */}
        <div>
          <div className="aspect-square overflow-hidden rounded-lg mb-4">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <div 
                key={index}
                className={`aspect-square rounded-md overflow-hidden cursor-pointer border-2 ${
                  selectedImage === index ? 'border-akagera-700' : 'border-transparent'
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img 
                  src={image} 
                  alt={`${product.name} - View ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Product Details */}
        <div>
          <div className="mb-4">
            {product.onSale && (
              <span className="inline-block bg-red-500 text-white text-xs font-bold px-2 py-1 rounded mr-2">
                SALE
              </span>
            )}
            {product.isNew && (
              <span className="inline-block bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                NEW
              </span>
            )}
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <span className="ml-2 text-sm font-medium text-gray-700">{product.rating}</span>
            <span className="mx-2 text-gray-500">•</span>
            <span className="text-sm text-gray-500">{product.reviews} reviews</span>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="ml-3 text-gray-500 text-lg line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              {product.originalPrice && (
                <span className="ml-2 text-red-500 font-medium">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% off
                </span>
              )}
            </div>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-700">{product.description}</p>
          </div>
          
          {/* Variants */}
          {product.variants && product.variants.length > 0 && (
            <div className="space-y-4 mb-6">
              {product.variants.map((variant: ProductVariant) => (
                <div key={variant.id}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{variant.name}</label>
                  <div className="flex flex-wrap gap-2">
                    {variant.options.map(option => (
                      <button
                        key={option}
                        type="button"
                        className={`px-3 py-2 border rounded-md text-sm ${
                          selectedVariants[variant.id] === option
                            ? 'bg-akagera-700 text-white border-akagera-700'
                            : 'border-gray-300 text-gray-700 hover:border-akagera-500'
                        }`}
                        onClick={() => handleVariantChange(variant.id, option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Quantity selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
            <div className="flex w-32 h-10">
              <button
                type="button"
                className="w-10 h-10 flex items-center justify-center border border-r-0 rounded-l-md"
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1}
              >
                -
              </button>
              <input
                type="number"
                className="w-12 h-10 text-center border-y focus:outline-none"
                value={quantity}
                onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                min="1"
                max={product.stock}
              />
              <button
                type="button"
                className="w-10 h-10 flex items-center justify-center border border-l-0 rounded-r-md"
                onClick={() => handleQuantityChange(quantity + 1)}
                disabled={quantity >= product.stock}
              >
                +
              </button>
            </div>
          </div>
          
          {/* Stock indicator */}
          <div className="mb-6">
            {product.stock > 0 ? (
              <div className="flex items-center text-green-600">
                <Check className="h-5 w-5 mr-1" />
                <span className="text-sm font-medium">In Stock - {product.stock} available</span>
              </div>
            ) : (
              <div className="text-red-500 text-sm font-medium">Out of Stock</div>
            )}
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              className="flex-1 bg-akagera-700 hover:bg-akagera-800"
              size="lg"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
            <Button variant="outline" size="lg">
              <Heart className="h-5 w-5 mr-2" />
              Wishlist
            </Button>
            <Button variant="outline" size="lg">
              <Share2 className="h-5 w-5 mr-2" />
              Share
            </Button>
          </div>
          
          {/* Product benefits */}
          <div className="border-t border-gray-200 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <Truck className="h-5 w-5 text-akagera-700 mr-2" />
                <span className="text-sm">Free shipping over $50</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-akagera-700 mr-2" />
                <span className="text-sm">2-year warranty</span>
              </div>
              <div className="flex items-center">
                <RefreshCcw className="h-5 w-5 text-akagera-700 mr-2" />
                <span className="text-sm">30-day returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related products */}
      {relatedProducts.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">You may also like</h2>
          <ProductGrid products={relatedProducts} />
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
